<template>
  <div class="example-wrapper">
    <div class="example-config">
      <input
        id="ac"
        type="checkbox"
        class="k-checkbox k-checkbox-md k-rounded-md"
        v-model="allowCustom"
      />
      <label class="k-checkbox-label" for="ac">Allow custom values</label>
    </div>
    <div class="form-group">
        <label for="example" class="form-label require">Favourite Sport</label>
      <combobox
        :style="{ width: '230px' }"
        :data-items="sports"
        :allow-custom="allowCustom"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();
console.log("▶️ config: ", config.public.apiUtil);
const data = useFetch(config.public.api + "/lookupsharecode/collect", {
  method: "POST",
  body: {
    condboard: "L,R",
    condxchgmkt: "1,3,4,9,O",
    condmktcode: "",
    condsdcflag: "",
    shareid: "",
    condsharetype: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z",
  },
  headers: {
    "content-type": "application/json; charset=UTF-8",
    "fs-key": "52f4dcfb-7be6-4ad0-8e00-f238d8c4296e",
    "fs-track": "ncit2",
    microservice: "false",
  },
  pick: ["body"],
});

console.log("# data: ", data);
</script>
<script lang="ts">
import { ComboBox } from '@progress/kendo-vue-dropdowns';
export default {
    components: { 'combobox': ComboBox },
    data(){
        return {
            sports: ["Baseball", "Basketball", "Cricket",
            "Field Hockey", "Football", "Table Tennis", "Tennis",
            "Volleyball" ],
            allowCustom: true
        }
    }
};
</script>
