<template>
    <!-- # InputErrorMsg props `for` for init to `id` prop -->
    <small :id="`${prop.for}-errror-msg`" class="text-danger" >
        <slot></slot>
    </small>
</template>

<script lang="ts" setup>
defineProps<{for: string}>();
</script>

<style scoped>

</style>