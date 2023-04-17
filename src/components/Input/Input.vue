<template>
  <div class="form-group col-3">
    <label class="form-label">Market</label>
    <input class="form-control-plaintext" value="N/A" />
  </div>
  <!--   
  <div class="mb-4 d-flex flex-column-reverse" style="">
    <input
      class="form-control"
      type="email"
      aria-label="Email"
      placeholder="Email"
      id="form1Email"
    /><label class="form-label" for="form1Email">Email address</label>
  </div>
  -->

  <MDBInput
    type="text"
    label="Username"
    id="form1Username"
    wrapperClass="form-group mb-4"
    :formOutline="false"
    v-model="form1Username"
    aria-label="Username"
    placeholder="Username"
  />
  <MDBInput
    type="email"
    label="Email address"
    id="form1Email"
    wrapperClass="mb-4 d-flex flex-column-reverse"
    :formOutline="false"
    v-model="form1Email"
    aria-label="Email"
    placeholder="Email"
  />
</template>

<script lang="ts" setup>
import { MDBInput, MDBTextarea, MDBRow } from "mdb-vue-ui-kit";
</script>

<style lang="scss" scoped></style>
