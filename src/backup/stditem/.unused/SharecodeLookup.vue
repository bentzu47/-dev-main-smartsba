<template>
  <div :id="`${id}-lookup`" :class="`${className}`">
    <label :for="`${name}`" :class="`form-label ${required ? 'require' : ''}`"
      >หลักทรัพย์ / Symbol</label
    >
    <AutoComplete
      class="form-control"
      :aria-describedby="`${name}Help`"
      :data-items="dataList"
      :text-field="'text'"
      :default-item="defaultItem"
      :required="true"
      placeholder="Symbol..."
    >
    </AutoComplete>
    <div :id="`${id}Help`" class="form-text" v-if="isError">
      We'll never share your email with anyone else.
    </div>
  </div>
</template>
<script setup lang="ts">
interface SharecodeLookup {
  id?: string;
  name?: string;
  value?: string;
  className?: string;
  required?: boolean;
  isError?: boolean;
  params?: {
    condboard?: string;
    condxchgmkt?: string;
    condmktcode?: string;
    condsharetype?: string;
    condsdcflag?: string;
    shareid?: string;
  };
}

const props = withDefaults(defineProps<SharecodeLookup>(), {
  id: "sharecode",
  name: "sharecode",
  value: "",
  className: "mb-3",
  required: true,
  isError: false,
  params: {
    condboard: "",
    condxchgmkt: "",
    condmktcode: "",
    condsharetype: "",
    condsdcflag: "",
    shareid: "",
  },
});

const defaultItem: Ref<string> = ref("");
// const getLookup = ():{}[] =>{

// }
const config = useRuntimeConfig();
console.log("✨ config: ", config);
const { data: data } = await useFetch(
  config.public.apiUtil + "/lookupsharecode/collect",
  {
    method: "POST",
    body: {
      condboard: props.params.condboard,
      condxchgmkt: props.params.condxchgmkt,
      condmktcode: props.params.condmktcode,
      condsharetype: props.params.condsharetype,
      condsdcflag: props.params.condsdcflag,
      shareid: props.params.shareid,
    },
    headers: {
      "content-type": "application/json; charset=UTF-8",
      "fs-key": "52f4dcfb-7be6-4ad0-8e00-f238d8c4296e",
      "fs-track": "ncit2",
      microservice: "false",
    },
    pick: ["body"],
  }
);
console.log("# data: ", data);
const dataList = data.hasOwnProperty("lists") ? data.lists : [];
console.log("# Sharecode | dataList: ", dataList);
</script>

<script lang="ts">
import { AutoComplete } from "@progress/kendo-vue-dropdowns";
export default {
  components: {
    AutoComplete,
  },
};
</script>
<style scoped>
.k-input-inner::after{
  content: "✨";
  padding: 0 4px;
  display: block;
}
</style>
