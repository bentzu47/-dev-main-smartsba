<template>
  <div class="program">
    <h4><slot name="headprogram">Stock Management</slot></h4>
    <div class="card">
      <!-- <slot name="head"> You Can Customize it!! ✂️ </slot> -->
      <div class="program-header card-header">
        <LayoutHeaderProgram
          :subtitle="subtitle"
          :title="title"
          :enableAboutVersion="props.enableAboutVersion"
          :enableReportIssue="props.enableReportIssue"
        >
        <template #title></template>
        <template #subtitle></template>
        </LayoutHeaderProgram>
      </div>
      <div class="program-body card-body">
        <slot name="body"> You Can Customize it!! ✂️ </slot>
        <!-- 
        This is Program content
        <div>
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-secondary">Secondary</button>
          <button type="button" class="btn btn-tertiary" data-mdb-ripple-color="light">
            Tertiary
          </button>
        </div>
         -->
      </div>
      
      <div class="program-footer card-footer">
        <slot name="footer"> You Can Customize it!! ✂️ </slot>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
const head:Ref<string> = ref('');
const title:Ref<string> = ref('');
const subtitle:Ref<string> = ref('');
interface LayoutProgram {
  enableAboutVersion?: boolean;
  enableReportIssue?: boolean;
}

const props = withDefaults(defineProps<LayoutProgram>(), {
  enableAboutVersion: true,
  enableReportIssue: false
});

const slots = useSlots();
head.value = slots.head ? slots.head()[0].children : "";
title.value = slots.title ? slots.title()[0].children : "";
subtitle.value = slots.subtitle ? slots.subtitle()[0].children : "";

// onMounted(() => {
//   console.log("🔥:", slots);
// })
</script>
<style>
.program-body > .row {
  margin: 0;
}
</style>
<style scoped>
.program-header {
  background-color: #5e6678;
  color: #ffffff;
  font-size: 18px;
}
</style>
