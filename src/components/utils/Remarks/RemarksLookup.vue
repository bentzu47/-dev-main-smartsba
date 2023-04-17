<template>
  <div
    :id="`${id}-lookup-box`"
    :class="`utils-remarks-lookup form-group ${className}`"
  >
    <label
      :id="`${id}-label`"
      :for="`${id}`"
      :class="`form-label ${required ? 'require' : ''}`"
      >หมายเหตุ / Remarks</label
    >
    <KendoComboBox
      :id="id"
      class="form-control"
      :name="name"
      :default-value="value"
      :data-items="dataList"
      :text-field="'name'"
      :data-item-key="'name'"
      :value-field="'value'"
      :required="required"
      :allow-custom="true"
      placeholder="Choose..."
      :aria-labelled-by="`${id}-label`"
      :error-msg="errorMsg"
      @change="emit('change', $event.target.value)"
    />
    <InputErrorMsg v-if="fieldError.status" :for="`${id}`">
      {{ fieldError.message }}
    </InputErrorMsg>
  </div>
</template>
<script setup lang="ts">
import { ComboBox as KendoComboBox } from '@progress/kendo-vue-dropdowns';
type APIData = {
  section?: string;
  type?: string;
  name?: string;
};

interface RemarksLookup {
  id?: string;
  name?: string;
  value?: string;
  className?: string;
  required?: boolean;
  errorMsg?: string;
  params?: APIData;
}

const props = withDefaults(defineProps<RemarksLookup>(), {
  id: 'remarks',
  name: 'remarks',
  value: '',
  className: '',
  required: false,
  errorMsg: '',
  params: () => {
    return {
      section: 'BSE003ARemark',
      type: 'L',
      name: '',
    };
  },
});

console.log('# RemarksLookup props: ', props);

const fieldError = reactive({
  status: !!props.errorMsg,
  message: props.errorMsg,
});

const dataList: Array<null | object> = ref([]);
const getRemarksLookup = async (): Promise<Array<null | object>> => {
  try {
    const data: APIData = {
      section: props.params.section,
      type: props.params.type,
      name: props.params.name,
    };
    const response = await getInqSBConfig(data);
    if (response.result === 'Y') {
      return Object.getOwnPropertyDescriptor(response, 'lists')
        ? response.lists
        : [];
    } else {
      throw response.reason;
    }
  } catch (error) {
    console.error(error);
    fieldError.message = error;
    throw new Error(error);
  }
};

const emit = defineEmits<{ (e: 'change', dataItem: object): void }>();

onBeforeMount(async () => {
  try {
    let response = await getRemarksLookup();
    console.log("# getRemarksLookup Response: ", response);
    if(response.length > 0) dataList.value = response;
    console.log('# remarks lookup: ', dataList.value);
  } catch (err) {
    console.log('👹Found Error!!');
  }
});
</script>
