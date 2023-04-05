<template>
    <div :id="`${id}-box`" :class="className">
      <label :for="`${id}`" class="form-label">หมายเหตุ / Remarks</label>
      <textarea class="form-control" type="text" minlength="0" :id="id" v-model="remark.remarkvalue" :rows="rows"
        :style="`min-height: ${28.86 * rows}px !important;`" @keypress.enter.prevent></textarea>
      <div class="box-warning d-flex justify-content-end">
        <div :id="`${id}Help`" class="form-text w-100" v-if="remark.visibleHelper">Length is a maximum of {{ maxlength }}
          characters.
        </div>
        <small class="form-text align-self-end text-end" for="remark">
          <span :class="`${remark.classNamecouter}`">{{ remark.counter }}</span>
          <span class="px-1">/</span>
          <span>{{ maxlength }}</span>
        </small>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface RemarksProps {
    id?: string
    value?: string
    maxlength?: number
    rows?: number,
    className?: string
  }
  
  const props = withDefaults(defineProps<RemarksProps>(), {
    id: 'remarks',
    value: '',
    maxlength: 100,
    rows: 3,
    className: 'mb-3'
  })
  
  type Remarks = {
    remarkvalue: string
    counter: number
    classNamecouter: string
    visibleHelper: boolean
  }
  
  const remark = ref<Remarks>({
    remarkvalue: props.value || '',
    counter: props.value.length || 0,
    classNamecouter: (props.value.length >= props.maxlength) ? 'text-danger' : '',
    visibleHelper: (props.value.length >= props.maxlength)
  })
  
  onMounted(() => {
    if (props.value) {
      remark.value.remarkvalue = props.value;
      remarkCounter(props.value);
    }
  })
  
  const remarkRaw: ComputedRef<string> = computed<string>(() => {
    let replaceStr: string = remark.value.remarkvalue.replace(/(\r\n|\n|\r)/gm, '');
    let sliceStr: string = replaceStr.slice(0, props.maxlength);
    return sliceStr
  })
  
  const remarkCounter = ((val: string) => {
    let value: string = val.trim();
    let length: number = value.length;
    let isMaxLength: boolean = (length == props.maxlength);
    remark.value.remarkvalue = remarkRaw.value;
    remark.value.counter = length;
    remark.value.visibleHelper = isMaxLength;
    remark.value.classNamecouter = isMaxLength ? "text-danger" : "";
  })
  
  watch(() => remark.value.remarkvalue, (newValue) => remarkCounter(newValue))
  </script>
  <style scoped>
  textarea {
    resize: none;
    min-height: 28.86px !important;
  }
  </style>