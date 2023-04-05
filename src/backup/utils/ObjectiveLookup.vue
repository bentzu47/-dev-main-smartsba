<template>
  <div :id="`${id}-lookup`" :class="`${className}`">
    <label :for="`${name}`" :class="`form-label ${required ? 'require' : ''}`"
      >วัตถุประสงค์ / Objective</label
    >
    <ComboBox
      class="form-control"
      :aria-describedby="`${name}Help`"
      :data-items="dataList"
      :text-field="'text'"
      :default-item="defaultItem"
      :required="required"
      placeholder="Choose..."
      @queryObjectiveLookup="queryObjectiveLookup"
      @change="$emit('objective-change',this)"
    />
    <div v-if="isError" :id="`${id}Help`" class="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ComboBox } from "@progress/kendo-vue-dropdowns";
export default {
  components: {
    ComboBox,
  },
  props: {
    id: {
      type: String,
      required: true,
      default: "objective"
    },
    name: {
      type: String,
      required: true,
      default: "objective"
    },
    value: {
      type: String,
      required: true,
      default: ""
    },
    className: {
      type: String,
      required: false,
      default: "mb-3"
    },
    required: {
      type: Boolean,
      required: false,
      default: true
    },
    isError: {
      type: Boolean,
      required: false,
      default: false
    },
    params: {
      section: {
        type: String,
        default: "",
        required: false
      },
      type: {
        type: String,
        default: "",
        required: false
      },
      name: {
        type: String,
        default: "",
        required: false
      }
    }
  },
  data() {
    return {
      dataList: [],
      defaultItem: "",
      headers: {
        "content-type": "application/json; charset=UTF-8",
        "fs-key": "52f4dcfb-7be6-4ad0-8e00-f238d8c4296e",
        "fs-track": "ncit2",
        microservice: "false",
      },
      body: {
        section: "BSE602AObjective",
        type: "L",
        name: "",
      },
    };
  },
  methods: {
    queryObjectiveLookup: () => {
        axios
          .post(`${useRuntimeConfig().public.apiUtil}/inqsbconfig/collect`, this.body, {
            headers: this.headers,
          })
          .then((resp) => {
            console.log("SUCCESS : inqsbconfig");
            let list = resp?.data?.body?.lists ? resp.data.body.lists : [];
            this.setDataSource(list);
          })
          .catch((error) => {
            console.log("ERROR : inqsbconfig");
            console.error("Request canceled", error);
          });
      },
      setDataSource: (dataSource) => {
        dataList.value = dataSource;
      }
  }
};
</script>
