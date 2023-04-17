<template>
  <LayoutProgram id="sbse003-update-page">
    <template #title>Edit Transaction</template>
    <template #body>
    <div>
    Show Modal 👉🏻 <Modal />
    </div>
      <ContentViewPage />
      <section class="border p-3 mb-3">
        <HeaderSection>รายละเอียดของรายการ / Transaction’s Detail</HeaderSection>
        <div class="row">
          <div class="row gy-2">
            <div class="col-md-3">
              <StditemSharecodeLookup :viewmode="viewmode" id="newsharecode" name="sharecode" />             
            </div>
            <div class="offset-md-1 col-md-3">
              <div class="form-group">
                <label class="form-label">Market</label>
                <input type="text" class="form-control-plaintext" value="SET" readonly />
              </div>
            </div>
            <div class="col-md">
            <InputCheckbox id="new_regisflag" name="new_regisflag" value="1" :checked="('1' === regisflag)" >Registrar is TSD</InputCheckbox>
            </div>
          </div>
          <div class="row gy-2">
            <PurposeLookup id="fpurpose" name="fpurpose" class-name="col-md-3" label="From Purpose" />
            <!-- 
            <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">From Purpose</label>
                <input type="text" class="form-control-plaintext" value="02 : Sellable Share" readonly />
              </div>
            </div>
             -->
            <div class="offset-md-1 col-md-4">
              <div class="form-group">
                <label class="form-label">Available Unit</label>
                <input type="text" class="form-control-plaintext" value="1,000" readonly />
              </div>
            </div>
          </div>
          <div class="row gy-2">
            <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">Trading Flag</label>
                <input type="text" class="form-control-plaintext" value="02 : Sellable Share" readonly />
              </div>
            </div>
            <!-- <XDate xdateClass="col-md-4" /> -->
            <Xdate />
          </div>
          <div class="row gy-2">
            <div class="col-md-4 align-self-center">
              <ModalCAInfo />
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">Trading Flag</label>
                <input type="text" class="form-control-plaintext" value="02 : Sellable Share" readonly />
              </div>
            </div>
          </div>
          <div class="row gy-2">
            <PurposeLookup id="tpurpose" name="tpurpose" class-name="col-md-3" label="To Purpose" />
            <AvailableUnit id="available" name="available" class-name="offset-md-1 col-md-4" :view-mode="false" />
            <NumericTextBox
              class="k-textbox"
              :style="{ width: '200px' }"
              v-model="pagerButtons"
            />
            <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">Avg. Cost</label>
                <input type="text" class="form-control-plaintext" value="300,000,000.00" readonly />
              </div>
            </div>
          </div>
          <div class="row gy-2">
            <!-- #UtilsObjectiveLookup Default id: objective, name: objective, required: true -->
            <UtilsObjectiveLookup class-name="col-md-4" />
            <!-- #UtilsObjectiveLookup Default id: remarks, name: remarks, required: false -->
            <UtilsRemarkLookup class-name="col-md-4" />
          </div>
          <ModalCAInfoGrid />
        </div>
      </section>
    </template>
  </LayoutProgram>
</template>

<script lang="ts" setup>
import { NumericTextBox } from '@progress/kendo-vue-inputs';
import ContentViewPage from "../components/ContentViewPage.vue";
import AvailableUnit from "../components/AvailableUnitForm.vue";

const viewmode = ref(false);
const regisflag = ref(1);

// interface SBSE003_UpdatePage {
//   data: {
//     id: string;
//     name: string;
//     value: string;
//     readonly?: boolean;
//     checked?: boolean;
//     className?: string;
//     paddingtop?: boolean;
//   }
// }

// const props = withDefaults(defineProps<SBSE003_UpdatePage>(), {
//   data: {
//     id: string;
//     name: string;
//     value: string;
//     readonly?: boolean;
//     checked?: boolean;
//     className?: string;
//     paddingtop?: boolean;
//   }
// });


// Use Middleware
</script>

<style lang="scss" scoped></style>
