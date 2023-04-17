<template>
  <LayoutResultPage>
    <template #body>
      <div class="col-sm-12 col-md-10 col-xl-8 p-4">
        <div class="container border">
          <div class="row p-3">
            <div class="col">
              <div id="resultmsg">
                <h5>
                  <span style="color: #48994e"
                    ><svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="fa-lg bi bi-check-circle-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                      ></path></svg
                  ></span>
                  Transaction is on process
                </h5>
              </div>
            </div>
          </div>
          <div id="iq8w0g" class="row p-3">
            <div id="it8b9h" class="col-xs-12 col-sm-6 col-md-4">
              <label id="actiondate_label">วัน-เวลาที่แจ้ง / Request Date</label>
              <div id="actiondate">
                <input
                  name="actiondate"
                  type="text"
                  readonly=""
                  class="form-control read-only"
                  id="i7whz"
                  value="15/07/2022 19:44:31"
                  tabindex="-1"
                />
              </div>
            </div>
            <div id="iia25z" class="col-xs-12 col-sm-6 col-md-4">
              <label id="taskname_label">ชื่อใบงาน / Task Name</label>
              <div id="taskname">
                <input
                  name="taskname"
                  type="text"
                  readonly=""
                  class="form-control read-only"
                  value="REQCMDEPOSIT"
                  tabindex="-1"
                />
              </div>
            </div>
            <div id="i666u3" class="col-xs-12 col-sm-6 col-md-4">
              <label id="appid_label">เลขที่ใบคำขอฯ / Application ID</label>
              <div id="applicationid">
                <input
                  name="applicationid"
                  type="text"
                  readonly=""
                  class="form-control read-only"
                  value="2022-07-DZ-000643"
                  tabindex="-1"
                />
              </div>
            </div>
          </div>
          <div id="ieuwi8" class="row p-3">
            <div id="i34bnh" class="col-xs-12 col-sm-6 col-md-4">
              <label id="account_label">เลขที่บัญชีหลักทรัพย์ / Account</label>
              <div id="account">
                <input
                  name="account"
                  type="text"
                  readonly=""
                  class="form-control read-only"
                  id="igyw6"
                  value="000004-1"
                  tabindex="-1"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <label id="effdate_label" class="result_page"
                >วันที่มีผล / Effective Date</label
              >
              <div id="effdate">
                <input
                  name="effdate"
                  type="text"
                  readonly=""
                  class="form-control read-only"
                  id="igwes"
                  value="15/07/2022"
                  tabindex="-1"
                />
              </div>
            </div>
            <div id="infu7c" class="col-xs-12 col-sm-6 col-md-4">
              <label id="amount_label">จำนวนเงิน / Amount</label>
              <div id="amount">
                <input
                  name="amt"
                  type="text"
                  readonly=""
                  class="form-control read-only"
                  id="amt"
                  value="100.00"
                  tabindex="-1"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="itr58r" class="container">
          <div id="ih6v3k" class="row py-2 px-0">
            <div id="" class="w-100">
              <div
                id="reasonmsg"
                class="alert reason-box"
                style="color: rgb(72, 153, 78)"
              >
                Success
              </div>
            </div>
          </div>
          <div class="row row-btn">
            <button
              role="button"
              type="button"
              id="okbutton"
              class="btn btn-search ml-auto"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </template>
  </LayoutResultPage>
</template>

<script setup></script>

<style lang="scss" scoped></style>
