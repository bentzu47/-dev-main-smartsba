<template>
    <!-- <div> -->
    <ButtonAdd aria-controls="ModalVisible" @click="ModalVisible = true"
        >Add New</ButtonAdd
    >
    <!-- Account Lookup Modal -->
    <KendoDialog
        v-if="ModalVisible"
        :title-render="customTitleBar"
        :closeIcon="false"
        :width="800"
    >
        <template v-slot:customTitleBarRender="{ props, listeners }">
            <div class="d-flex w-100 justify-content-between">
                <HeaderBoxLabel class="mb-0"
                    >รายละเอียดการทำรายการ / Transaction's
                    Detail</HeaderBoxLabel
                >
                <button
                    class="btn-close"
                    aria-label="Close"
                    @click="ModalVisible = false"
                ></button>
            </div>
        </template>
        <div class="modal-body px-4">
            <TransactionDetails />
        </div>
        <dialog-actions-bar class="modal-footer px-4">
            <MDBBtn color="grey" @click="ModalVisible = false"> CANCEL </MDBBtn>
            <MDBBtn color="warning"> SAVE </MDBBtn>
        </dialog-actions-bar>
    </KendoDialog>
</template>
<script setup lang="ts">
import { Dialog as KendoDialog } from "@progress/kendo-vue-dialogs";
import { MDBBtn } from "mdb-vue-ui-kit";
import TransactionDetails from "./TransactionDetails.vue";

const customTitleBar = "customTitleBarRender";
const ModalVisible = ref(false);
const Trans = reactive({
    mktcode: "",
    regisflag: "1",
    availableunit: 0,
    tradeflag: "Y",
});

const objectiveOnChange = (event:Event) => {
  console.log("# objectiveOnChange!");
}

const remarksOnChange = (event:Event) => {
  console.log("# remarksOnChange!");
}
</script>
