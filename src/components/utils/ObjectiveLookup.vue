<template>
  <FormGroup
    :id="`${id}-lookup-box`"
    :class="`utils-objective-lookup form-group ${className}`"
  >
    <label :for="`${id}`" :class="`form-label ${required ? 'require' : ''}`"
      >วัตถุประสงค์ / Objective</label
    >
    <KendoComboBox
      :id="id"
      :default-value="value"
      :data-items="dataList"
      :text-field="'name'"
      :data-item-key="'name'"
      :value-field="'value'"
      :required="required"
      :allow-custom="true"
      placeholder="Choose..."
      :aria-labelled-by="`${id}-label`"
      :error-msg="errorMsg"
      :popup-settings="{ className: 'z-index' }"
      :append-to="`${id}-lookup-box`"
      @change="emit('change', $event.target.value)"
    />
    <InputErrorMsg v-if="fieldError.status" :for="`${id}`">
      {{ fieldError.message }}
    </InputErrorMsg>
  </FormGroup>
</template>
<script setup lang="ts">
import { ComboBox as KendoComboBox } from '@progress/kendo-vue-dropdowns';
type APIData = {
  section: string;
  type: string;
  name: string;
};
interface ObjectiveLookup {
  id?: string;
  name?: string;
  value?: string;
  className?: string;
  required?: boolean;
  params?: APIData;
  errorMsg?: string;
}

const props = withDefaults(defineProps<ObjectiveLookup>(), {
  id: 'objective',
  name: 'objective',
  value: '',
  className: '',
  required: false,
  errorMsg: '',
  params: () => {
    return {
      section: 'BSE602AObjective',
      type: 'L',
      name: '',
    };
  },
});

console.log('# ObjectiveLookup props: ', props);

const fieldError = reactive({
  status: !!props.errorMsg,
  message: props.errorMsg,
});

const dataList: Array<null | object> = ref([]);
const getObjectiveLookup = async (): Promise<Array<null | object>> => {
  try {
    const data: APIData = {
      section: props.params.section,
      type: props.params.type,
      name: props.params.name,
    };
    const response = await getInqSBConfig(data);
    if (response.result === 'Y') {
      return Object.getOwnPropertyDescriptor(response, 'lists')
        ? response.lists
        : [];
    } else {
      throw response.reason;
    }
  } catch (error) {
    console.error(error);
    fieldError.message = error;
    throw new Error(error);
  }
};

const emit = defineEmits<{ (e: 'change', dataItem: object): void }>();

onBeforeMount(async () => {
  try {
    let response = await getObjectiveLookup();
    if(response.length > 0) dataList.value = response;
    console.log('# objective lookup: ', response);
  } catch (err) {
    console.log('👹Found Error!!');
  }
});
</script>
<style>
.z-index {
  z-index: 10000;
}
</style>
