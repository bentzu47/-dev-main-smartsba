<template>
  <NumericTextBox
    :style="{ width: '230px' }"
    :placeholder="'please enter value'"
    :icon-name="'gear'"
  />
  <!-- 
        :value="computedValue"
          @change="ChangeMiles"
           -->
</template>

<script setup>
import { NumericTextBox } from "@progress/kendo-vue-inputs";
</script>

<style lang="scss" scoped></style>
