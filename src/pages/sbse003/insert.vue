<template>
  <LayoutProgram>
    <template #title>Add Trasaction | TC</template>
    <template #body>
      <div class="row mb-3">
        <AccountDetail :title="sbse003.title_transferer" />
      </div>
      <div class="row mb-3">
        <AccountDetail :title="sbse003.title_transferee" />
      </div>

      <div class="row border p-3 mb-3">
        <UtilsObjectiveLookup class-name="col-md-5" />
        <UtilsRemarkLookup class-name="offset-md-1 col-md-6" />
      </div>
      <div class="row border p-3 mb-3">
        <div>Button Rows</div>
        <KendoGrid :data-items="grid.result" :pageable="true" :total="grid.total" :columns="grid.columns" @pagechange="grid.pageChangeHandler"
          :loader="grid.loader">
        </KendoGrid>
      </div>
      <div class="row">
        <UtilsCommentBox id="fcomment" name="fcomment" className="px-0" />
      </div>
      <div class="row">
        <UtilsWorkflowButton />
      </div>
    </template>
  </LayoutProgram>
</template>

<script lang="ts" setup>
const sbse003 = {
  title_transferer: "ข้อมูลเลขที่บัญชีหลักทรัพย์ผู้โอน / Transferer’s Information",
  title_transferee: "ข้อมูลเลขที่บัญชีหลักทรัพย์ผู้รับ / Transferee’s Information",
};

onMounted(() => {
  console.log("🔥 On Mounted!!!");
});
</script>

<script lang="ts">
import { Grid as KendoGrid } from "@progress/kendo-vue-grid";

const grid = reactive({
  loader: false,
  dataItems: [],
  skip: 0,
  take: 10,
  columns: [
    { field: "symbol", title: "Seq.", width: 70 },
    { field: "symbol", title: "Symbol", className: "text-center" },
    { field: "fpurpose", title: "From Purpose" },
    { field: "tpurpose", title: "Transfer Unit" },
    { field: "avgprice", title: "Avg. Cost" },
    { field: "objective", title: "Objective" },
  ],
});
</script>