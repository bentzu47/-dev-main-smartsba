<template>
  <LayoutProgram>
    <template #title>TC</template>
    <template #body>
      <div id="sbfe003_insert_form">
        <DivRowBorder>
          <AccountDetail
            title="ข้อมูลเลขที่บัญชีหลักทรัพย์ผู้โอน / Transferer’s Information"
            mode="insert"
            :detail-page="FAccountDetail"
          />
        </DivRowBorder>
        <DivRowBorder>
          <AccountDetail
            title="ข้อมูลเลขที่บัญชีหลักทรัพย์ผู้รับ / Transferee’s Information"
            mode="insert"
            :detail-page="TAccountDetail"
          />
        </DivRowBorder>
        <DivRowBorder>
          <UtilsObjectiveLookup
            class-name="col-md-5"
            :value="$sbse003._insert.objective"
            @change="objectiveOnChange"
          />
          <UtilsRemarksLookup
            class-name="offset-md-1 col-md-6"
            :value="$sbse003._insert.remark"
            @change="remarksOnChange"
          />
        </DivRowBorder>
        <DivRowBorder>
          <HeaderBoxLabel>รายละเอียดการทำรายการ / Request Lists of Transaction</HeaderBoxLabel>
          <div>
            <AddTransDetail />
            <ChooseFromPortBtn />
          </div>
          <KendoGrid :data-items="grid.dataItems" :pageable="true" :total="grid.total" :columns="grid.columns"
            @pagechange="grid.pageChangeHandler" :loader="grid.loader">
            <grid-toolbar>
              <div @click="closeEdit">
                <kbutton title="Add new" :theme-color="'primary'" @click="addRecord">
                  Add new
                </kbutton>
              </div>
            </grid-toolbar>
          </KendoGrid>
        </DivRowBorder>
        <div class="row">
          <UtilsCommentBox className="px-0" />
        </div>
        <div class="row">
          <!-- <UtilsWorkflowButton /> -->
        </div>
      </div>
    </template>
  </LayoutProgram>
</template>

<script lang="ts" setup>
import $sbse003 from "../sbse003";
import AddTransDetail from "../components/AddTransDetail.vue";

const objectiveOnChange = (dataItem: object) => {
  $sbse003._insert.objective = (dataItem) ? dataItem.name: dataItem;
};
const remarksOnChange = (dataItem: object) => {
  $sbse003._insert.remark = (dataItem) ? dataItem.name: dataItem;
};

const regisflag = ref(1);

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

const closeEdit = (event: Event): void => {
  console.log("# closeEdit!!");
  console.log("# event: ", event);
};


const FAccountDetail = {
  account: {
    label: "เลขที่บัญชีหลักทรัพย์ / Account",
    id: "account",
    name: "account",
    className: "col-md-4",
    require: true,
  },
  depacc: {
    label: "Depository Account",
    id: "dpaccount",
    name: "dpaccount",
    className: "col-md-4",
    require: true,
  },
  cardid: {
    label: "เลขประจำตัวประชาชน / Card ID",
    id: "fcardid",
    className: "col-md-4",
    require: false,
  },
  prefixcode: {
    label: "รหัสคำนำหน้า / Prefix Code",
    id: "ftitle_code",
    name: "title_code",
    className: "col-md-4",
    require: false,
  },
  prefixdesc: {
    label: "คำนำหน้า / Prefix",
    id: "ftitle",
    name: "title",
    className: "col-md-4",
    require: false,
  },
  custname: {
    label: "ชื่อ - นามสกุลของลูกค้า / Customer Name",
    id: "fname",
    className: "col-md-4",
    require: false,
  },
};

const TAccountDetail = {
  account: {
    label: "เลขที่บัญชีหลักทรัพย์ / Account",
    id: "account",
    name: "account",
    className: "col-md-4",
    require: true,
  },
  depacc: {
    label: "Depository Account",
    id: "dpaccount",
    name: "dpaccount",
    className: "col-md-4",
    require: true,
  },
  cardid: {
    label: "เลขประจำตัวประชาชน / Card ID",
    id: "fcardid",
    className: "col-md-4",
    require: false,
  },
  prefixcode: {
    label: "รหัสคำนำหน้า / Prefix Code",
    id: "ftitle_code",
    name: "title_code",
    className: "col-md-4",
    require: false,
  },
  prefixdesc: {
    label: "คำนำหน้า / Prefix",
    id: "ftitle",
    name: "title",
    className: "col-md-4",
    require: false,
  },
  custname: {
    label: "ชื่อ - นามสกุลของลูกค้า / Customer Name",
    id: "fname",
    className: "col-md-4",
    require: false,
  },
};
</script>
