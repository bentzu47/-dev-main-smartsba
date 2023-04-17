<template>
    <div :id="`${id}-box`" :class="`stditem-xdate form-group ${className}`">
        <label :for="`${id}`" :class="`form-label ${required ? 'require' : ''}`">X Date</label>
        <input :id="`${id}`" :name="`${name}`" class="form-control" />
    </div>
</template>

<script lang="ts" setup>
interface XDate {
  viewmode?: boolean;
  id?: string;
  name?: string;
  value?: string;
  className?: string;
  required?: boolean;
  isError?: boolean;
};

const props = withDefaults(defineProps<XDate>(), {
  viewmode: false,
  id: "xdate",
  name: "xdate",
  value: "",
  className: "mb-3",
  required: true,
  isError: false
});
</script>

<style lang="scss" scoped>

</style>