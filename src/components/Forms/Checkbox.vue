<template>
  <div>
    <MDBCheckbox label="Default checkbox" v-model="checkbox1" />
    <MDBCheckbox label="Checked checkbox" v-model="checkbox2" />
    <!-- Checkbox -->
    <div :class="`form-check ${className}}`">
      <input class="form-check-input" type="checkbox" :id="id" :value="value" :checked="checked" />  
      <label class="form-check-label" :for="id"><slot></slot></label>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const checkbox1 = ref(false);
  const checkbox2 = ref(true);
interface FormsCheckbox {
  id: string;
  name: string;
  value: string;
  readonly?: boolean;
  checked?: boolean;
  className?: string;
  paddingtop?: boolean
}

const props = withDefaults(defineProps<FormsCheckbox>(),{
  readonly: false,
  checked: false,
  paddingtop: false
});
</script>

<style lang="scss" scoped>

</style>