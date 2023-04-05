<template>
  <div
    :id="`${id}-body`"
    :class="`accordion-collapse collapse ${isEdit ? 'show' : ''}`"
    :aria-labelledby="`${id}-heading`"
    :data-mdb-parent="`#${id}`"
  >
    <div class="accordion-body">
      <div class="mb-3 row">
        <label :for="`${id}-template`" class="col-sm-12 col-md-6 col-form-label"
          >ต้นแบบข้อคิดเห็น / Comment Template</label
        >
        <div class="col-sm-12 col-md-6">
          <input
            type="text"
            readonly
            class="form-control-plaintext"
            :id="`${id}-template`"
            placeholder="Select Template..."
          />
        </div>
      </div>
      <div class="mb-3 d-flex">
        <div class="d-none d-md-block">
          <div class="div-circle me-3"></div>
          <!-- <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png" class="rounded-circle" alt="..." /> -->
        </div>
        <div class="w-100">
          <textarea
            class="form-control"
            :id="`${id}`"
            rows="3"
            placeholder="Write a comment..."
          ></textarea>
          <div class="invalid-feedback">Please Enter Something.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isEdit = ref(false);

interface WorkflowButtonProps {
  id: string;
  name: string;
  className?: string;

  useBackBtn?: boolean;
  useCloseBtn?: boolean;
  useCancelBtn?: boolean;
  defaultBtn?: string | false;
}

type ResultListType = {
  id: string;
  name: string;
  className: string;
};

const props = withDefaults(defineProps<WorkflowButtonProps>(), {
  id: "commentBox",
  name: "comment",
  className: "",

  isEdit: false,
  useCloseBtn: false,
  useCancelBtn: false,
  defaultBtn: false,
});
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
