<template>
  <div>
    <!-- Radio Button -->
    <div :class="`form-check ${className}}`">
      <input
        class="form-check-input"
        type="checkbox"
        :id="id"
        :value="value"
        :checked="checked"
      />
      <label class="form-check-label" :for="id"><slot></slot></label>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface InputRadio {
  id: string;
  name: string;
  value: string;
  readonly?: boolean;
  checked?: boolean;
  className?: string;
  paddingtop?: boolean;
}

const props = withDefaults(defineProps<InputRadio>(), {
  readonly: false,
  checked: false,
  paddingtop: false,
});
</script>
