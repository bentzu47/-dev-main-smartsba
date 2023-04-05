<template>
  <div :id="`${props.id}-lookup`" :class="`${props.className}`">
    <label :for="`${name}`" :class="`form-label ${props.required ? 'require' : ''}`"
      >หมายเหตุ / Remarks</label
    >
    <ComboBox
      class="form-control"
      :aria-describedby="`${props.name}Help`"
      :data-items="datalist"
      :text-field="'value'"
      :default-item="defaultItem"
      :data-item-key="'index'"
      :required="true"
      :placeholder="`Choose...`"
      :allow-custom="true"
      @change="emit(`${id}-change`,$event)"
    >
    </ComboBox>
    <div v-if="props.isError" :id="`${props.id}Help`" class="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
</template>
<script setup lang="ts">
console.log("=== REMARK LOOKUP ===");
import axios from "axios";
interface LookupSharecode {
  id?: string;
  name?: string;
  value?: string;
  className?: string;
  required?: boolean;
  isError?: boolean;
  params?: {
    section?: string;
    type?: string;
    name?: string;
  };
}

const props = withDefaults(defineProps<LookupSharecode>(), {
  id: "remarks",
  name: "remarks",
  value: "",
  className: "mb-3",
  required: true,
  isError: false,
  params: {
    section: "",
    type: "",
    name: "",
  },
});
const defaultItem: Ref<string> = ref("");
// const getLookup = ():{}[] =>{

// }
const config = useRuntimeConfig();
console.log("# config: ", config);
// const { data } = await useFetch(config.public.apiUtil + "/inqsbconfig/collect", {
//   method: "POST",
//   body: {
//     section: "BSE003ARemark",
//     type: "L",
//     name: "",
//   },
//   headers: {
//     "content-type": "application/json; charset=UTF-8",
//     "fs-key": "52f4dcfb-7be6-4ad0-8e00-f238d8c4296e",
//     "fs-track": "ncit2",
//     microservice: "false",
//   },
//   pick: ["body"],
// });
// console.log("# data: ", { data }.value);
// console.log("# data: ", data.value);
// const dataList: Array<null | object> = data.value ? data.value.body.lists : [];
// console.log("# data.value.body.lists: ", data.value.body.lists);
// console.log("# dataList: ", dataList);
const data:object = {
    section: "BSE003ARemark",
    type: "L",
    name: "",
  }
const options:object = {
  headers: {
      "content-type": "application/json; charset=UTF-8",
      "fs-key": "52f4dcfb-7be6-4ad0-8e00-f238d8c4296e",
      "fs-track": "ncit2",
      microservice: "false",
    }
}
const datalist:Ref<Array<null|object>> = ref([]);
axios.post(`${config.public.apiUtil}/inqsbconfig/collect`, data, options)
.then(({data}: object) => {
  console.log("SUCCESS : inqsbconfig");
  console.log("# data: ", data);
  
  let list = (data?.body?.lists_total > 0) ? data.body.lists : [];
  datalist.value = list;
}).catch((error: Error) => {
  console.log("ERROR : inqsbconfig");
  console.error("Request canceled", error);
});

const emit = defineEmits<{
  (e: `${props.id}-change`, event: ComboBoxChangeEvent): void
}>()

// const handleChange:ComboBoxChangeEvent = (event) => {
//   emit.
// }
</script>

<script lang="ts">
import { ComboBox, ComboBoxChangeEvent } from "@progress/kendo-vue-dropdowns";
export default {
  components: {
    ComboBox,
  },
};
</script>
