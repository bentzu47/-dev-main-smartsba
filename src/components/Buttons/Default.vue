<template>
  <button
    type="button"
    id="cainform_btn"
    class="btn k-button"
  >
    <span class="fa fa-id-badge"></span>
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>

</script>
<style scoped>
.k-button {
  color: #444;
  border-color: #ebebeb;
  background-color: #ebebeb;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), 0 2px 3px rgba(0, 0, 0, 0.05);
}
</style>
