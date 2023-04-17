<template>
    <div :id="`${id}-avaiableunit-box`" :class="`${className}`">
        <div class="form-group">
            <label :for="`${name}`" :class="`form-label ${required ? 'require' : ''}`">จำนวนหุ้น / Unit</label>
            <NumericTextBox v-if="!viewMode" :id="id" :name="name" class="form-control" :aria-describedby="`${name}Help`"
                :required="required" placeholder="Choose..." />
            <div v-else type="text" class="form-control-plaintext">{{ value }}</div>
            <InputErrorMsg v-if="fieldError.status" :for="`${id}`">
                {{ fieldError.message }}
            </InputErrorMsg>
        </div>
    </div>
</template>
<script setup lang="ts">
import { NumericTextBox } from '@progress/kendo-vue-inputs';
type APIData = {
    section?: string;
    type?: string;
    name?: string;
};
</script>