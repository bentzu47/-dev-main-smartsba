<template>
    <h6 class="title-row fw-bold"><slot></slot></h6>
</template>

<script lang="ts">
export default defineComponent({
    name: "HeaderSection"
})
</script>

<style scoped>
.title-row {
    color: #375777;
}
</style>