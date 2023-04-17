<template>
    <!-- <div> -->
        <ButtonAdd aria-controls="exampleModalCenter" @click="exampleModalCenter = true" >Add New</ButtonAdd>
        <!-- 
        <MDBBtn color="primary" aria-controls="exampleModalCenter" @click="exampleModalCenter = true">
            Add New
        </MDBBtn>
        -->
        <MDBModal id="exampleModalCenter" tabindex="-1" labelledby="exampleModalCenterTitle" v-model="exampleModalCenter" size="lg"
            centered>
            <MDBModalHeader>
                <!-- <MDBModalTitle id="exampleModalCenterTitle"> Modal title </MDBModalTitle> -->
            </MDBModalHeader>
            <MDBModalBody id="modal-body-center" class="px-4" >
                    <HeaderBoxLabel>รายละเอียดการทำรายการ / Transaction's Detail</HeaderBoxLabel>
                    <div class="row">
                        <SharecodeLookup class="col-md-4" />
                        <div class="offset-md-2 col-md-6">
                            <MDBInput
                                inputGroup
                                :formOutline="false"
                                v-model="form13Input"
                                aria-describedby="inputGroupPrepend"
                                aria-label="Username"
                                placeholder="Username"
                            />
                            <Input label="Market" value="N/A" class-name="col-3" readonly />
                            <!-- <div class="form-group col-3">
                                <label class="form-label">Market</label>
                                <input class="form-control-plaintext" value="N/A" />
                            </div> -->
                            <!-- <div class="form-group-nolabel"> -->
                            <InputCheckbox id="regisflag" class-name="col-3" :checked="regisflag == 1" label="Registrar is TSD" readonly />
                            <!-- </div> -->
                        </div>
                    </div>
                    <div class="row">
                    </div>
                    <div class="row">
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label class="form-label">CA Type / Date / No.</label>
                            <input id="tpurpose" type="text" class="form-control" />
                        </div>
                        <div class="form-group offset-md-2 col-md-4">
                            <label class="form-label">X Date</label>
                            <input id="tpurpose" type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label class="form-label">To Purpose</label>
                            <input id="tpurpose" type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label class="form-label"> จำนวนหุ้น / Unit </label>
                            <KendoNumericTextBox 
                                class="form-control"
                                :default-value="5"
                                :step="3"
                            />
                        </div>
                        <div class="form-group offset-md-2 col-md-4">
                            <label class="form-label"> Avg. Cost </label>
                            <KendoNumericTextBox 
                                class="form-control"
                                :default-value="5"
                                :step="3"
                            />
                        </div>
                    </div>
                    <div class="row">
                        <ObjectiveLookup
                            id="trans-objective"
                            class-name="col-md-6"
                            value=""
                            @change="objectiveOnChange"
                        />
                        <RemarksLookup
                            id="trans-remarks"
                            class-name="col-md-6"
                            value=""
                            @change="remarksOnChange"
                        />
                    </div>
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="grey" @click="exampleModalCenter = false"> CANCEL </MDBBtn>
                <MDBBtn color="warning"> SAVE </MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    <!-- </div> -->
</template>
<script setup lang="ts">
import { NumericTextBox as KendoNumericTextBox } from '@progress/kendo-vue-inputs';
import {
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';

const exampleModalCenter = ref(false);
const form13Input = ref('Test!');
</script>