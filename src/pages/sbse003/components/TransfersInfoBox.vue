<template>
    <section class="row no-gutters mb-3">
      <h6 class="header-label">ข้อมูลเลขที่บัญชีหลักทรพย์ผู้โอน / Transferer’s Information</h6>
      <div class="row no-gutters px-0 py-3 border">
      <template v-for="(field, index) in transfer_info" :key="field.inputname">
        <div class="row" v-if="(index % 3) == 0">
          <div class="col-md-4 col-xl-3">
            <div class="form-group">
              <label class="form-label" for="faccount">เลขที่บัญชีหลักทรัพย์ / Account</label>
              <input class="form-control-plaintext" type="text" name="faccount" value="" readonly>
            </div>
          </div>
        </div>
      </template>

        <div class="col-md-4 col-xl-3">
          <div class="form-group">
            <label class="form-label" for="faccount">เลขที่บัญชีหลักทรัพย์ / Account</label>
            <input class="form-control-plaintext" type="text" name="faccount" value="" readonly>
          </div>
        </div>

      </div>
      <!-- Append Something below -->
      <slots name="append"></slots>
    </section>
</template>

<script setup lang="ts">
const props = defineProps({ 
  "transerinfo": {
    type: String,
    required: true
  }
});
console.log("# props: ", props.transerinfo);
const prefix = ref((props.transerinfo == 'transferer')? 'f': 't');
interface TransferersInfoItem {
  inputlabel: string;
  inputname: string;
  inputvalue: string;
}

interface TransfereesInfoItem {
  inputlabel: string;
  inputname: string;
  inputvalue: string;
}


const transfer_info:Array<object[TransferersInfoItem]> = [{
  inputlabel: 'เลขที่อ้างอิงรายการ',
  inputname: 'referno',
  inputvalue: 'TC-20220704-00001',
},{
  inputlabel: 'วัน-เวลาที่สร้าง / Creation Date',
  inputname: 'createdate',
  inputvalue: '05/02/2021 10:37:10',
},{
  inputlabel: 'ผู้สร้างรายการ / Create User',
  inputname: 'createuser',
  inputvalue: 'Ralph West',
},{
  inputlabel: 'ช่องทางที่ใช้ / Channel',
  inputname: 'channel',
  inputvalue: 'SBA Entry',
}]



// const transferers_info:Array<object[TransferersInfoItem]> = [{
//   inputlabel: 'เลขที่อ้างอิงรายการ',
//   inputname: 'referno',
//   inputvalue: 'TC-20220704-00001',
// },{
//   inputlabel: 'วัน-เวลาที่สร้าง / Creation Date',
//   inputname: 'createdate',
//   inputvalue: '05/02/2021 10:37:10',
// },{
//   inputlabel: 'ผู้สร้างรายการ / Create User',
//   inputname: 'createuser',
//   inputvalue: 'Ralph West',
// },{
//   inputlabel: 'ช่องทางที่ใช้ / Channel',
//   inputname: 'channel',
//   inputvalue: 'SBA Entry',
// }]

// const transferees_info:Array<object[TransfereesInfoItem]> = [{
//   inputlabel: 'เลขที่อ้างอิงรายการ',
//   inputname: 'referno',
//   inputvalue: 'TC-20220704-00001',
// },{
//   inputlabel: 'วัน-เวลาที่สร้าง / Creation Date',
//   inputname: 'createdate',
//   inputvalue: '05/02/2021 10:37:10',
// },{
//   inputlabel: 'ผู้สร้างรายการ / Create User',
//   inputname: 'createuser',
//   inputvalue: 'Ralph West',
// },{
//   inputlabel: 'ช่องทางที่ใช้ / Channel',
//   inputname: 'channel',
//   inputvalue: 'SBA Entry',
// }]

</script>

<style lang="scss" scoped>

</style>