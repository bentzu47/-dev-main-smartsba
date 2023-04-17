<template>
  <!-- Button trigger modal -->
  <MDBBtn
    color="light"
    aria-controls="cainfoModal"
    class="px-3 text-capitalize fw-bold d-flex align-items-center border"
    @click="visibleModal = true"
  >
    <span class="material-icons-round me-2">account_box</span> Choose CA Information
  </MDBBtn>
  <LazyClientOnly>
  <MDBModal
    id="cainfoModal"
    tabindex="-1"
    labelledby="cainfoModalLabel"
    v-model="visibleModal"
    size="lg" centered
  >
    
    <MDBModalHeader>
      <!-- <MDBModalTitle id="exampleModalLabel"> Modal title </MDBModalTitle> -->
    </MDBModalHeader>
     
    <MDBModalBody>
      <HeaderLabel>รายละเอียดข่าว / Corporate Actions' Information</HeaderLabel>
      <GridInformation ></GridInformation>
    </MDBModalBody>
  </MDBModal>
</LazyClientOnly>
</template>
<script setup lang="ts">
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from "mdb-vue-ui-kit";
import GridInformation from "./ModalCAInfoGrid.vue"
const visibleModal = ref(false);
</script>
