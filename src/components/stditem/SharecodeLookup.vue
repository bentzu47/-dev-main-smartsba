<template>
  <FormGroup :id="`${id}-lookup-box`" :class="`stditem-sharecode-lookup ${className}`">
    <label :id="`${id}-label`" :for="`${id}`" :class="`form-label ${required ? 'require' : ''}`"
      >หลักทรัพย์ / Symbol</label
    >
    <!-- class="form-control i-search-inner" -->
    <!-- :opened="true" -->
    <KendoComboBox
      v-if="!viewmode"
      :id="id"
      :aria-describedby="`${name}Help`"
      :data-items="dataList"
      :data-item-key="'sharecode'"
      :text-field="'sharecode'"
      :required="required"
      placeholder="Symbol..."
      :aria-labelled-by="`${id}-label`"
      :disabled="isLoading"
      :loading="isLoading"
      :validity-styles="enableStyles"
      :virtual="virtual"
      @pagechange="pageChange"
      @filterchange="onFilterChange"
      @focus.once="enableStyles = true"
      @change="onChange"
    >
    </KendoComboBox>
    <div v-else class="form-control-plaintext">{{ value }}</div>
    <!-- Error Massage -->
    <InputErrorMsg v-if="fieldError.status" :for="`${id}`">
      {{ fieldError.message }}
    </InputErrorMsg>
  </FormGroup>
</template>
<script setup lang="ts">
import { ComboBox as KendoComboBox } from "@progress/kendo-vue-dropdowns";
const config = useRuntimeConfig();

type APIData = {
  condboard?: string;
  condxchgmkt?: string;
  condmktcode?: string;
  condsharetype?: string;
  condsdcflag?: string;
  shareid?: string;
};

interface SharecodeLookup {
  viewmode?: boolean;
  id?: string;
  name?: string;
  value?: string;
  className?: string;
  required?: boolean;
  isError?: boolean;
  params?: APIData;
};

const props = withDefaults(defineProps<SharecodeLookup>(), {
  viewmode: false,
  id: "sharecode",
  name: "sharecode",
  value: "",
  className: "mb-3",
  required: true,
  isError: false,
  params: () => {
    return {
      condboard: "",
      condxchgmkt: "",
      condmktcode: "",
      condsharetype: "",
      condsdcflag: "",
      shareid: ""
    }
  }
});

const fieldError = reactive({
  status: !!props.errorMsg,
  message: props.errorMsg,
});

const enableStyles: Ref<boolean> = ref(false);
const isLoading: Ref<boolean> = ref(true);
const dataList: Array<null|object> = ref([]);
const getLookupSharecode = async (): Promise<Array<null|object>> => {
  try {
    let data:APIData = {
      'condboard': props.params.condboard,
      'condxchgmkt': props.params.condxchgmkt,
      'condmktcode': props.params.condmktcode,
      'condsharetype': props.params.condsharetype,
      'condsdcflag': props.params.condsdcflag,
      'shareid': props.params.shareid
    };
    const response = await getJSONResponse(useRuntimeConfig().public.BASE_API_UTIL + '/lookupsharecode/collect', data);
    if (response.result === 'Y') {
      return Object.getOwnPropertyDescriptor(response, 'lists')
        ? response.lists
        : [];
    } else {
      throw response.reason;
    }
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

const options = reactive({
  subsetData: [],
  total: 100,
  pageSize: 100,
  skip: 0,
  filteredData: []
});

const virtual = computed<object[]>(() => {
  return options
});

const onFilterChange = (event) => {
            options.filteredData = filterBy(allData.slice(), event.filter);
            const data = options.filteredData.slice(0, options.pageSize);
    
            options.subsetData = data;
            options.skip = 0;
            options.total = options.filteredData.length;
        }
const pageChange = (event) => {
            const skip = event.page.skip;
            const take = event.page.take;
            const newSubsetData = allData.slice(skip, skip + take);
    
            options.subsetData = newSubsetData;
            options.skip = skip;
        }

onBeforeMount(async () => {
  try {
    let response = await getLookupSharecode();
    console.log("# getLookupSharecode Response: ", response);
    options.total = response.length || 0;
    if(response.length > 0) dataList.value = response;
    isLoading.value = false;
    console.log('# Sharecode lookup: ', dataList.value);

  } catch (err){
    console.log("👹Found Error!!")
  }
})

const onChange = (event:Event):void => {
  console.log("# on Change Sharecode!!")
  // const value = event.target.value;
  // console.log("# value: ", value);
}
</script>

<script lang="ts">
// import { ComboBox as KendoComboBox } from "@progress/kendo-vue-dropdowns";
// export default {
//   components: { AutoComplete }
// };
</script>
<style scoped>
/* <span class="material-icons-sharp">search</span> */
/* .stditem-sharecode-lookup .i-search-inner:before { */
  /* content: "\e003";
  font-family: "Glyphicons Halflings";
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  display: flex;
  width: 1.5em;
  height: 1.75em;
  position: absolute;
  right: 2px;
  top: 0;
  font-size: 1.125em;
  color: #9da4ab;
  align-items: center;
  justify-content: center;
  opacity: 0.65;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
</style>
<style>
/* .stditem-sharecode-lookup .k-autocomplete.i-search-inner > .k-clear-value {
  z-index: 1;
  opacity: 1;
  color: #b2b2b2;
  background: white;
  margin-right: 2px;
} */
</style>