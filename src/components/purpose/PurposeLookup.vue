<template>
  <div class="form-group" :class="purposeClass">
    <label :id="`${purposeId}_label`" :for="`${purposeId}`" class="require">{{ purposeLabel }}</label>
    <DropDownList 
      :id="purposeId" 
      :name="purposeName" 
      :data-items="lookupPurpose" 
      :text-field="'purposeename'"
      :default-item="defaultItem" 
      :item-render="customItemRender" 
      :value-render="customValueRender" 
      @change="onChange"
    >
      <template v-slot:purposeItemRender="{ props }">
        <PurposeItemRender :class="props.itemClass" :data-item="props.dataItem" :index="props.index"
          @click="(event) => props.onClick(event)" />
      </template>
      <template v-slot:purposeValueRender="{ props }">
        <PurposeValueRender :value="props.value" />
      </template>
    </DropDownList>
    <small id="purposetHelpText" data-for="purpose" class="form-text text-muted errText">require</small>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from 'vue';
import { DropDownList, DropDownListChangeEvent } from "@progress/kendo-vue-dropdowns";

interface PurposeLookupProps {
  purposeLabel: string,
  purposeId: string,
  purposeName: string,
  purposeClass: string
}
const props = defineProps<PurposeLookupProps>();
const emit = defineEmits(['purpose-value']);

const fsLang = useRuntimeConfig().public.FS_LANG;
const apiStock = useRuntimeConfig().public.apiStock;
const headers = {
  headers: {
    'Content-Type': 'application/json',
    'Microservice': 'false',
    'Fs-Key': 'b17d681e-a827-45f8-bcce-6dff3c3a6eef',
    'Fs-Track': 'kml2'
  }
}
var lookupPurpose = ref<Array<object>>([]);
var defaultItem = ref({
  purposeename: 'Choose one of the following',
  purposetname: 'Choose one of the following',
  purposecode: ''
})

const customItemRender = ref('purposeItemRender');
const customValueRender = ref('purposeValueRender');

var purposeValue = ref<string>('');
var purposeTextField = ref<string>('');

onMounted(async () => {
  lookupPurpose.value = await queryLookupPurpose();
});

const queryLookupPurpose = async(): Promise<Array<object>> => {
  let lookupPurpose: Array<object> = [];
  await axios.post(`${apiStock}/lookuppurpose/lookup`, {}, headers)
    .then((result) => {
      console.log("SUCCESS : lookuppurpose");
      if (result.data.body.result == "Y") {
        lookupPurpose = result.data.body.lists;
      }
    })
    .catch((error) => {
      console.log("ERROR : lookuppurpose");
      console.error("Request canceled", error);
    });
  return lookupPurpose;
}
const onChange = (event: DropDownListChangeEvent) => {
  purposeValue.value = event.value;
  emit('purpose-value', purposeValue.value);
}
</script>