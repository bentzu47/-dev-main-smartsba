<template>
  <LayoutProgram id="sbse003-view-page">
    <template #title>View Transaction</template>
    <template #body>
      <ContentViewPage />
      <div class="row no-gutters mb-3">
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-grey waves-effect">Back</button>
          <button type="button" class="btn btn-info">Print Slip</button>
        </div>
      </div>
    </template>
  </LayoutProgram>
</template>

<script lang="ts" setup>
import ContentViewPage from "../components/ContentViewPage.vue";

</script>

<style lang="scss" scoped>
#sbse003-view-page > .row {
}
</style>
