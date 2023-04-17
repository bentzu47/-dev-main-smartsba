<template>
  <div :id="`${id}-body`" :class="`accordion-collapse ${visible ? 'show' : ''}`"
    :aria-labelledby="`${id}-heading`" :data-mdb-parent="`#${id}`">
    <div class="accordion-body">
      <div class="mb-3 row">
        <label :for="`${id}-label`" class="col-sm-12 col-md-6 col-form-label form-label">ต้นแบบข้อคิดเห็น / Comment
          Template</label>
        <div class="col-sm-12 col-md-6">
          <!-- @change="emit('change', $event.target.value)" -->
          <KendoComboBox :id="`${id}-lookup`" placeholder="Select Template..."
          :default-value="value"
          :data-items="dataList"
          :text-field="'chkdescription'"
          :value-field="'chkdescription'"
          @change="onSelectTemplate"
           />
        </div>
      </div>
      <div class="mb-3 d-flex">
        <div class="d-none d-md-block">
          <div class="div-circle me-3"></div>
        </div>
        <div class="w-100">
          <FormInput type="textarea" :v-model="commentTextBox" :id="`${id}`" rows="3" placeholder="Write a comment..." no-label :resize="false" />
          <div class="invalid-feedback">Please Enter Something.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ComboBox as KendoComboBox } from "@progress/kendo-vue-dropdowns";
import { AccessorStores } from "stores/Accessor";
const Accessor = AccessorStores();
console.log("# Accessor Store: ", Accessor);

interface CommentBody {
  id: string;
  name: string;
  visible?: boolean;
  vModel: string;
}

const props = defineProps<CommentBody>();

const getLookupCommentlist = async (): Promise<void | object[]> => {
  console.log("# call | getLookupCommentlist")
  try {
    const response = await getJSONResponse(useRuntimeConfig().public.BASE_API_UTIL + '/lookuptchecklist/collect');
    if (response.result == "Y") {
      return response.hasOwnProperty("lists") ? response.lists : [];
    } else {
      throw response.reason;
    }
  } catch (error) {
    console.log("# error, ", error);
    console.error(error);
  }
}

const commentTextBox = ref('');
const onSelectTemplate = (event) => {
  if(event.target.value) {
    let textValue = ((commentTextBox.value)? "\n": "") + event.target.value.chkdescription;
    console.log("# commentTextBox.value: ", commentTextBox.value);
    console.log("# textValue: ", textValue);
    commentTextBox.value += textValue;
  }
  event.target.value = null;
}

const onChange = (event) => {
  console.log("# commentTextBox: ", commentTextBox.value);
  // this.value = event.target.value;
}

const dataList = ref([]);
onBeforeMount(async () => {
  const response = await getLookupCommentlist();
  if(response.length > 0) dataList.value = response;
})

</script>

<style scoped>
textarea {
  min-height: 86.58px !important;
}

.div-circle {
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  min-width: 50px;
  min-height: 50px;
  background-color: #d8d8d8;
  background-image: linear-gradient(141deg, #c5dcd2 0, #ececec 51%, #e1e4e3 75%);
  box-shadow: 1px 0 7px -2px #565656;
  display: flex;
  transition: 0.3s;
}
</style>
