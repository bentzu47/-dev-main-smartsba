<template>
  <div>
    <section class="mb-3">
      <h6 class="header-label">ข้อมูลการทำรายการ / Transaction Info</h6>
      <div class="border p-3 g-0">
        <div class="row gy-3">
          <div v-for="item of transinfo" class="col-md-6 col-lg-4">
            <div class="detail-item d-flex align-items-center">
              <span class="material-icons-round me-2 fs-1">{{ item.iconname }}</span>
              <div class="form-group">
                <label class="form-label" :for="item.inputname">{{
                  item.inputlabel
                }}</label>
                <span class="form-control-plaintext" :id="item.inputname" >{{ item.inputvalue }}</span>
                <!-- <input class="form-control-plaintext" type="text" :name="item.inputname" :value="item.inputvalue" readonly /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- รอ Component: AccountDetail View Mode |  Transferer’s Information -->
    <!-- รอ Component: AccountDetail View Mode |  Transferee’s Information-->
    <section class="mb-3">
      <h6 class="header-label">รายละเอียดของรายการ / Transaction’s Detail</h6>
      <div class="border p-3 gx-0 gy-3">
        <div v-for="item of transdetails" class="row">
          <div class="col-xl-4">
            <label class="form-label" :for="item.inputname">{{ item.inputlabel }}</label>
          </div>
          <div class="col-xl-8">
          <span class="form-control-plaintext">{{ item.inputvalue }}</span>
            <!-- <input class="form-control-plaintext" type="text" :name="item.inputname" :value="item.inputvalue" readonly /> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import TransfersInfoBox from "./TransfersInfoBox.vue";
interface TransactionInfoItem {
  iconname: string;
  inputlabel: string;
  inputname: string;
  inputvalue: string;
}

const transinfo: Array<object[TransactionInfoItem]> = [
  {
    iconname: "article",
    inputlabel: "เลขที่อ้างอิงรายการ",
    inputname: "referno",
    inputvalue: "TC-20220704-00001",
  },
  {
    iconname: "event",
    inputlabel: "วัน-เวลาที่สร้าง / Creation Date",
    inputname: "createdate",
    inputvalue: "05/02/2021 10:37:10",
  },
  {
    iconname: "person_add",
    inputlabel: "ผู้สร้างรายการ / Create User",
    inputname: "createuser",
    inputvalue: "Ralph West",
  },
  {
    iconname: "move_to_inbox",
    inputlabel: "ช่องทางที่ใช้ / Channel",
    inputname: "channel",
    inputvalue: "SBA Entry",
  },
];

interface TransactionDetails {
  inputlabel: string;
  inputname: string;
  inputvalue: string;
}
const trans = {
  tradeflag: "Y",
};
const transdetails: Array<object[TransactionDetails]> = [
  {
    inputlabel: "ประเภทรายการ / Transaction Type",
    inputname: "transtypedesc",
    inputvalue: "TC-20220704-00001",
  },
  {
    inputlabel: "หลักทรัพย์ / Symbol",
    inputname: "fsharecode",
    inputvalue: "05/02/2021 10:37:10",
  },
  {
    inputlabel: "From Purpose",
    inputname: "fpurpose",
    inputvalue: "Ralph West",
  },
  {
    inputlabel: "Trading flag",
    inputname: "tradeflag_detail",
    inputvalue: trans.tradeflag == "Y" ? "Listed" : "Non - Listed",
  },
  {
    inputlabel: "CA Type / Date / No.",
    inputname: "corprefer",
    inputvalue: "",
  },
  {
    inputlabel: "X Date",
    inputname: "xdate",
    inputvalue: "",
  },
  {
    inputlabel: "To Purpose",
    inputname: "tpurpose",
    inputvalue: "",
  },
  {
    inputlabel: "จำนวนหุ้น / Unit",
    inputname: "unit",
    inputvalue: "",
  },
  {
    inputlabel: "Avg. Cost",
    inputname: "avgprice",
    inputvalue: "",
  },
  {
    inputlabel: "Object",
    inputname: "objective",
    inputvalue: "",
  },
  {
    inputlabel: "Remarks",
    inputname: "remark",
    inputvalue: "",
  },
];
</script>

<style lang="scss" scoped></style>
