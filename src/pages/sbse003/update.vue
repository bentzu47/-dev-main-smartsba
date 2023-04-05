<template>
  <LayoutProgram id="sbse003-update-page">
    <template #title>Edit Transaction</template>
    <template #body>
      <ContentViewPage />
      <section class="row no-gutters mb-3">
        <h6 class="header-label">รายละเอียดของรายการ / Transaction’s Detail</h6>
        <div class="row px-0 py-3 border">
          <div class="row g-4">
            <div class="col-md-5">
              <div class="form-group">
                <label class="form-label">หลักทรัพย์ / Symbol</label>
                <input type="text" class="form-control-plaintext" value="BBL" readonly />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">Market</label>
                <input type="text" class="form-control-plaintext" value="SET" readonly />
              </div>
            </div>
            <div class="col-md">
            <FormsCheckbox id="" name="" value="" >Registrar is TSD</FormsCheckbox>
            </div>
          </div>
        </div>
      </section>
    </template>
  </LayoutProgram>
</template>

<script setup>
import ContentViewPage from "./components/ContentViewPage.vue";
</script>

<style lang="scss" scoped></style>
