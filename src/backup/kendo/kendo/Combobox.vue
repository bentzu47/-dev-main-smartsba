<template>
  <div>
    <div>$props: {{ $props }}</div>
    <div>props: {{ props }}</div>
    <ComboBox
      :$props
      :aria-describedby="`${props.id}-errror-msg`"
      :popupSettings="{
        appendTo: 'component'
      }"
    />
    <!-- <ComboBox
      class="form-control"
      :id="props.id"
      :name="props.name"
      :aria-describedby="`${props.id}-errror-msg`"
      :data-items="props.dataItems"
      :text-field="'name'"
      :required="props.required"
      :placeholder="props.placeholder"
      :loading="isFetching"
      :popupSettings="{
        appendTo: 'component'
      }"
    /> -->
  </div>
</template>

<script lang="ts" setup>
import { ComboBox } from '@progress/kendo-vue-dropdowns';
interface ComboBoxProps {
  id: string;
  name: string;
  value?: string;
  className?: string;
  required?: boolean;
  placeholder?: string;
  dataItems?: Array<null | object>;
}

const props = withDefaults(defineProps<ComboBoxProps>(), {
  value: '',
  className: '',
  required: false,
  placeholder: 'Choose...',
  isError: false,
  dataItems: [],
});

// console.log("# $props: ", this.$props);
console.log("# props: ", props);
const isFetching: Ref<boolean> = ref(true);
const component = ref(props.appendTo || ComboBox);
if (props.dataItems) isFetching.value = false;
</script>
