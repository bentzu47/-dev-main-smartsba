<template>
    <LayoutProgram>
        <template #title>รายละเอียดการทำรายการ / Transaction Detail</template>
        <template #body>
            <!-- this.$slots.body().contentBody -->
            <div class="col-sm-12 col-md-10 col-xl-8 p-4">
                <div id="ic6cel" class="container border">
                    <div id="i2kvq5" class="row p-3">
                        <div id="ikr9uj" class="col">
                            <div id="resultmsg">
                                <h5>
                                    <svg width="1em" height="1em" 
                                        viewBox="0 0 16 16" class="fs-4 bi bi-check-circle-fill" 
                                        :fill="$color-success" >
                                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                    </svg>
                                    <span class="ms-2">Deleted draft successfully</span>
                                </h5>
                                <h5>
                                    <svg width="1em" height="1em" 
                                        viewBox="0 0 16 16" class="fs-4 bi bi-x-circle-fill" 
                                        :fill="$color-failed" >
                                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"></path>
                                    </svg>
                                    <span class="ms-2">Requested save as draft fail</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="row p-3">
                        <div v-for="item of transdetails" class="row">
                            <div class="col-xl-4">
                                <label class="form-label" :for="item.inputname">{{ item.inputlabel }}</label>
                            </div>
                            <div class="col-xl-8">
                            <span class="form-control-plaintext">{{ item.inputvalue }}</span>
                            </div>
                        </div>

                        <div id="it8b9h" class="col-xs-12 col-sm-6 col-md-4">
                            <label id="actiondate_label">วัน-เวลาที่แจ้ง / Request Date</label>
                            <div id="actiondate">
                                <input name="actiondate" type="text" readonly="" class="form-control read-only" id="i7whz"
                                    value="18/02/2021 09:35:38" tabindex="-1">
                            </div>
                        </div>
                        <div id="iia25z" class="col-xs-12 col-sm-6 col-md-4">
                            <label id="taskname_label">ชื่อใบงาน / Task Name</label>
                            <div id="taskname">
                                <input name="taskname" type="text" readonly="" class="form-control read-only"
                                    value="REQCMDEPOSIT" tabindex="-1">
                            </div>
                        </div>
                        <div id="i666u3" class="col-xs-12 col-sm-6 col-md-4">
                            <label id="appid_label">เลขที่ใบคำขอฯ / Application ID</label>
                            <div id="applicationid">
                                <input name="applicationid" type="text" readonly="" class="form-control read-only"
                                    value="2021-02-DZ-000032" tabindex="-1">
                            </div>
                        </div>
                    </div>
                    <div id="ieuwi8" class="row p-3">
                        <div id="i34bnh" class="col-xs-12 col-sm-6 col-md-4">
                            <label id="account_label">เลขที่บัญชีหลักทรัพย์ / Account</label>
                            <div id="account">
                                <input name="account" type="text" readonly="" class="form-control read-only" id="igyw6"
                                    value="000019-7" tabindex="-1">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <label id="effdate_label" class="result_page">วันที่มีผล / Effective Date</label>
                            <div id="effdate">
                                <input name="effdate" type="text" readonly="" class="form-control read-only " id="igwes"
                                    value="01/07/2021" tabindex="-1">
                            </div>
                        </div>
                        <div id="infu7c" class="col-xs-12 col-sm-6 col-md-4">
                            <label id="amount_label">จำนวนเงิน / Amount</label>
                            <div id="amount">
                                <input name="amt" type="text" readonly="" class="form-control read-only" id="amt"
                                    value="58000000.00" tabindex="-1">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row py-2 px-0">
                    <div class="w-100">
                        <div class="reason-box">{{ reason }}</div>
                    </div>
                </div>
                <slot name="buttons">
                    <button type="button" class="btn btn-success">Success</button>
                    <button type="button" class="btn btn-danger">Danger</button>
                    <button type="button" class="btn btn-warning">Warning</button>
                    <button type="button" class="btn btn-info">Info</button>
                    <div class="row row-btn">
                        <div class="">
                            <button role="button" id="closebutton" class="btn btn-reset">Return Home</button>
                            <button role="button" id="okbutton" class="btn btn-reset">Continue Add</button>
                        </div>
                        <div class="">
                            <button role="button" id="closebutton" class="btn btn-reset">Close</button>
                            <button role="button" id="okbutton" class="btn btn-reset">OK</button>
                        </div>
                        <div class="">
                            <button role="button" id="backButton" class="btn btn-reset">Back</button>
                            <button role="button" id="cancelButton" class="btn btn-reset">Cancel</button>
                            <button role="button" id="reportIssueButton" class="btn btn-reset">Report an Issue</button>
                        </div>
                    </div>
                </slot>
            </div>
        </template>
    </LayoutProgram>
</template>

<script lang="ts" setup>
const currentColour = ref('');
// {"head":{"errordesc":"","method":"update","errorflag":"N","model":"CMManageTransItem","errorcode":"0"},"body":{"reason":"Cannot Edit or Delete this transaction because it is on process.","canresend":"0","taskname":"REQCMDEPOSIT","amt":"1020.00","actiondate":"15\/07\/2022 10:02:24","result":"N","titleresult":"M0IN","currentdatetime":"15\/07\/2022 10:02:24","trxtype":"D","action":null,"resultcode":"1007","applicationid":null,"effdate":"15\/07\/2022","msgtype":"0E","account":"000012-7"}}
const route = useRoute();
// route.params.company
const transdetails = reactive({
    
})
</script>

<style lang="scss" scoped>
$color-success: rgb(72, 153, 78);
$color-failed: rgb(219, 82, 76);

.reason-box {
    margin: 0.65rem 0;
    padding: 1rem;
    background: #e8e8e8;
    border: 0;
    border-radius: .25rem;
}
</style>