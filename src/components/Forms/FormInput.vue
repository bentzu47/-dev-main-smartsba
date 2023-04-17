<template>
    <label v-if="!props.noLabel" :class="`form-label ${props.labelClass} ${!props.label || props.noLabel ? 'no-label' : ''}`">
      {{ props.label }}
    </label>
    <template v-if="'input' === props.type">
      <!-- Input Field -->
      <input
        :id="props.id"
        type="text"
        :placeholder="props.placeholder"
        :class="`form-control ${props.inputClass}`"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :v-model="props.vModel"
      />
    </template>
    <template v-else-if="'textarea' === props.type">
      <!-- Input Textarea -->
      <textarea
        :id="props.id"
        :rows="props.rows"
        type="text"
        :placeholder="props.placeholder"
        :class="`form-control ${props.inputClass} ${(!props.resize)? 'none-resize':''}`"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :v-model="props.vModel"
      />
    </template>
    <template v-else-if="'checkbox' === props.type">
      <!-- Input Checkbox -->
      <MDBCheckbox
        :id="props.id"
        :label="props.inputLabel"
        :value="props.inputValue"
        :class="`${props.inputClass}`"
        :inline="props.inline"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :v-model="props.vModel"
      />
    </template>
    <template v-else-if="'radio' === props.type">
      <!-- Input Radio -->
      <MDBRadio
        :id="props.id"
        :label="props.inputLabel"
        :value="props.inputValue"
        :class="`${props.inputClass}`"
        :name="props.inputName"
        :inline="props.inline"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :v-model="props.vModel"
      />
    </template>
</template>

<script lang="ts" setup>
import { MDBCheckbox, MDBRadio } from "mdb-vue-ui-kit";
interface FormInput {
  id: string;
  type: string;
  label?: string;
  labelClass?: string;
  noLabel?: boolean;
  className?: string;

  rows?: number;
  inputLabel?: string;
  inputClass?: string;
  inputName?: string;
  inputValue?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  inline?: boolean;
  vModel?: string | number;
}

const props = withDefaults(defineProps<FormInput>(), {
  label: "",
  labelClass: "",
  noLabel: false,
  className: "",

  rows: 3,
  inputLabel: "",
  inputClass: "",
  inputName: "",
  inputValue: "",
  placeholder: "",
  disabled: false,
  readonly: false,
  inline: false,
  vModel: ""
});
</script>

<style lang="scss">
$input-bg: #31bb9c;
.none-resize { resize: none }
.no-label {
  min-height: 24px;
}

.form-check-input {
  &:checked,&:checked:focus {
    border-color: $input-bg;
    &::before {
      box-shadow: 0px 0px 0px 13px $input-bg;
    }
  }
}

.form-check-input[type=checkbox]{
  &:checked,&:checked:focus {
    background-color: $input-bg;
  }
}
.form-check-input[type=radio]:checked:after {
  border-color: $input-bg;
  background-color: $input-bg;
}
</style>
