<template>
  <LayoutProgram id="sbse003_content">
    <template #title :enableAboutVersion="true">Add Transaction | TC</template>
    <template #body>
      <h1>Page 003</h1>
      <div class="row mb-3">
        <AccountDetail :title="sbse003.title_transferer" />
      </div>
      <div class="row mb-3">
        <AccountDetail :title="sbse003.title_transferee" />
      </div>
      <div class="row justify-content-between">
          <UtilsObjectiveLookup className="mb-3 col-md-5" name="objective" id="objective" />
          <UtilsRemarksLookup className="mb-3 col-md-6" name="remarks" id="remarks" @remarks-change="remarksChange" />
      </div>
    </template>
    <template #footer>
    <button class="btn btn-grey">Cancel</button>
      <div class="row mb-3">
          <UtilsWorkflowButton @action-flow="actionFlowButtonInit" />
        </div>
    </template>
  </LayoutProgram>
</template>
<script setup lang="ts">
const sbse003:object = {
  title_transferer: "ข้อมูลเลขที่บัญชีหลักทรัพย์ผู้โอน / Transferer’s Information",
  title_transferee: "ข้อมูลเลขที่บัญชีหลักทรัพย์ผู้รับ / Transferee’s Information"
}
</script>
<script lang="ts">
const remarksChange = (event:Event):void =>{
  console.log("👉🏻 remarksChange Function!");
  console.log("# event: ", event);
}

const actionFlowButtonInit = (step: string, action: string, actiontype: string): void => {
  console.log("👉🏻 actionFlowButtonInit Function!");
  console.log("# actionFlow: ", {
    step: step,
    action: action,
    actiontype: actiontype,
  });
};
</script>
<style scoped src="./sbse003.css"></style>
