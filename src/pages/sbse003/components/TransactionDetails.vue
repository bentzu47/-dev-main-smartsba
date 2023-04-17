<template>
  <div>
    <FormRow>
      <SharecodeLookup class="col-md-4" />
      <div class="offset-md-2 col-md-6">
        <FormRow>
          <FormGroup class-name="col-6">
            <FormInput
              id="trans_market"
              :v-model="Trans.mktcode"
              type="input"
              label="Market"
              placeholder="N/A"
              input-class="form-control-plaintext"
              readonly
            />
          </FormGroup>
          <FormGroup class-name="col-5">
            <FormInput
              id="trans_regisflag"
              :v-model="Trans.regisflag"
              type="checkbox"
              input-label="Registrar is TSD"
              readonly
            />
          </FormGroup>
        </FormRow>
      </div>
    </FormRow>
    <FormRow>
      <FormGroup class-name="col-md-4">
        <label class="form-label">From Purpose</label>
        <input id="fpurpose" type="text" class="form-control" />
      </FormGroup>
      <FormGroup class-name="offset-md-2 col-md-4">
        <FormInput
          id="trans_availableunit"
          type="input"
          label="Available Unit"
          label-class="text-darkblue"
          input-class="form-control-plaintext"
          placeholder="0"
          readonly
          :v-model="Trans.availableunit"
        />
      </FormGroup>
    </FormRow>
    <FormRow>
      <FormGroup class-name="col-6">
        <label class="form-label">Trading Flag</label>
        <div>
          <FormInput
            id="trans_tradeflag_ch1"
            type="radio"
            input-name="trans_tradeflag"
            input-value="Y"
            input-label="Listed"
            no-label
            inline
            :v-model="Trans.tradeflag"
          />
          <FormInput
            id="trans_tradeflag_ch2"
            type="radio"
            input-name="trans_tradeflag"
            input-value="N"
            input-label="Non – Listed"
            no-label
            inline
            :v-model="Trans.tradeflag"
          />
        </div>
      </FormGroup>
      <FormGroup class-name="col-6 align-self-center">
        <ModalCAInfo />
      </FormGroup>
    </FormRow>
    <FormRow>
      <FormGroup class-name="col-4">
        <label class="form-label">CA Type / Date / No.</label>
        <input id="tpurpose" type="text" class="form-control" />
      </FormGroup>
      <FormGroup class-name="offset-md-2 col-md-4">
        <label class="form-label">X Date</label>
        <input id="tpurpose" type="text" class="form-control" />
      </FormGroup>
    </FormRow>
    <FormRow>
      <FormGroup class-name="col-md-4">
        <label class="form-label">To Purpose</label>
        <input id="tpurpose" type="text" class="form-control" />
      </FormGroup>
    </FormRow>
    <FormRow>
      <FormGroup class-name="col-md-4">
        <label class="form-label"> จำนวนหุ้น / Unit </label>
        <KendoNumericTextBox class="form-control" :default-value="0" :step="1" />
      </FormGroup>
      <FormGroup class-name="offset-md-2 col-md-4">
        <label class="form-label"> Avg. Cost </label>
        <KendoNumericTextBox class="form-control" :default-value="5" :step="3" />
      </FormGroup>
    </FormRow>
    <FormRow>
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
    </FormRow>
  </div>
</template>
<script lang="ts" setup>
const Trans = reactive({
    mktcode: "",
    regisflag: "1",
    availableunit: 0,
    tradeflag: "Y",
});

const objectiveOnChange = () =>{
  console.log("# Objective Change!")
}

const remarksOnChange = () =>{
  console.log("# Rmarks Change!")
}
</script>