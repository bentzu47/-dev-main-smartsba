<template>
  <MDBBtn
    color="primary"
    aria-controls="exampleModalCenter"
    @click="exampleModalCenter = true"
  >
    Vertically centered modal
  </MDBBtn>
  <MDBModal
    id="exampleModalCenter"
    tabindex="-1"
    labelledby="exampleModalCenterTitle"
    v-model="exampleModalCenter"
    centered
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalCenterTitle"> Modal title </MDBModalTitle>
      <div class="row">
        <SharecodeLookup />
      </div>
    </MDBModalHeader>
    <MDBModalBody>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
        vestibulum at eros.
      </p>
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" @click="exampleModalCenter = false"> Close </MDBBtn>
      <MDBBtn color="primary"> Save changes </MDBBtn>
    </MDBModalFooter>
  </MDBModal>
</template>
<script setup lang="ts">
import {
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';

const exampleModalCenteredScrollable = ref(false);
</script>