<template>
    <LayoutProgram>
        <template #title>TC</template>
        <template #body>
            <div id="sbfe003_editdraft_form">
                <DivRowBorder>
                    <AccountDetail
                        title="ข้อมูลเลขที่บัญชีหลักทรัพย์ผู้โอน / Transferer’s Information"
                        mode="view"
                        :detail-page="FAccountDetail"
                    />
                </DivRowBorder>
                <DivRowBorder>
                    <AccountDetail
                        title="ข้อมูลเลขที่บัญชีหลักทรัพย์ผู้รับ / Transferee’s Information"
                        mode="view"
                        :detail-page="TAccountDetail"
                    />
                </DivRowBorder>

                <DivRowBorder>
                    <HeaderBoxLabel>
                        รายละเอียดการทำรายการ / Request Lists of Transaction
                    </HeaderBoxLabel>
                    <FormRow>
                        <SharecodeLookup class="col-md-4" />
                        <div class="offset-md-2 col-md-6">
                            <FormRow>
                                <FormGroup class-name="col-6">
                                    <FormInput
                                        id="trans_market"
                                        :v-model="Trans.mktcode"
                                        type="input"
                                        label="Market"
                                        placeholder="N/A"
                                        input-class="form-control-plaintext"
                                        readonly
                                    />
                                </FormGroup>
                                <FormGroup class-name="col-5">
                                    <FormInput
                                        id="trans_regisflag"
                                        :v-model="Trans.regisflag"
                                        type="checkbox"
                                        input-label="Registrar is TSD"
                                        readonly
                                    />
                                </FormGroup>
                            </FormRow>
                        </div>
                    </FormRow>
                    <FormRow>
                        <FormGroup class-name="col-md-4">
                            <label class="form-label">From Purpose</label>
                            <input
                                id="fpurpose"
                                type="text"
                                class="form-control"
                            />
                        </FormGroup>
                        <FormGroup class-name="offset-md-2 col-md-4">
                            <FormInput
                                id="trans_availableunit"
                                type="input"
                                label="Available Unit"
                                label-class="text-darkblue"
                                input-class="form-control-plaintext"
                                placeholder="0"
                                readonly
                                :v-model="Trans.availableunit"
                            />
                        </FormGroup>
                    </FormRow>
                    <FormRow>
                        <FormGroup class-name="col-6">
                            <label class="form-label">Trading Flag</label>
                            <div>
                                <FormInput
                                    id="trans_tradeflag_ch1"
                                    type="radio"
                                    input-name="trans_tradeflag"
                                    input-value="Y"
                                    input-label="Listed"
                                    no-label
                                    inline
                                    :v-model="Trans.tradeflag"
                                />
                                <FormInput
                                    id="trans_tradeflag_ch2"
                                    type="radio"
                                    input-name="trans_tradeflag"
                                    input-value="N"
                                    input-label="Non – Listed"
                                    no-label
                                    inline
                                    :v-model="Trans.tradeflag"
                                />
                            </div>
                        </FormGroup>
                        <FormGroup class-name="col-6 align-self-center">
                            <ModalCAInfo />
                        </FormGroup>
                    </FormRow>
                    <FormRow>
                        <FormGroup class-name="col-4">
                            <label class="form-label"
                                >CA Type / Date / No.</label
                            >
                            <input
                                id="tpurpose"
                                type="text"
                                class="form-control"
                            />
                        </FormGroup>
                        <FormGroup class-name="offset-md-2 col-md-4">
                            <label class="form-label">X Date</label>
                            <input
                                id="tpurpose"
                                type="text"
                                class="form-control"
                            />
                        </FormGroup>
                    </FormRow>
                    <FormRow>
                        <FormGroup class-name="col-md-4">
                            <label class="form-label">To Purpose</label>
                            <input
                                id="tpurpose"
                                type="text"
                                class="form-control"
                            />
                        </FormGroup>
                    </FormRow>
                    <FormRow>
                        <FormGroup class-name="col-md-4">
                            <label class="form-label"> จำนวนหุ้น / Unit </label>
                            <KendoNumericTextBox
                                class="form-control"
                                :default-value="0"
                                :step="1"
                            />
                        </FormGroup>
                        <FormGroup class-name="offset-md-2 col-md-4">
                            <label class="form-label"> Avg. Cost </label>
                            <KendoNumericTextBox
                                class="form-control"
                                :default-value="5"
                                :step="3"
                            />
                        </FormGroup>
                    </FormRow>
                    <FormRow>
                        <ObjectiveLookup
                            id="trans-objective"
                            class-name="col-md-6"
                            value=""
                            @change="objectiveOnChange"
                        />
                        <RemarksLookup
                            id="trans-remarks"
                            class-name="col-md-6"
                            value=""
                            @change="remarksOnChange"
                        />
                    </FormRow>
                </DivRowBorder>
            </div>
        </template>
    </LayoutProgram>
</template>

<script lang="ts" setup>
import $sbse003 from "./sbse003";
import AddTransDetail from "./components/AddTransDetail.vue";

const objectiveOnChange = (dataItem: object) => {
    $sbse003._insert.objective = dataItem ? dataItem.name : dataItem;
};
const remarksOnChange = (dataItem: object) => {
    $sbse003._insert.remark = dataItem ? dataItem.name : dataItem;
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
        { field: "action", title: "Action", cell: "action", width: "140px" },
    ],
});

const closeEdit = (event: Event): void => {
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

const Trans = reactive({
    mktcode: "",
    regisflag: "1",
    availableunit: 0,
    tradeflag: "Y",
});

const objectiveOnChange = (event: Event) => {
    console.log("# objectiveOnChange!");
};

const remarksOnChange = (event: Event) => {
    console.log("# remarksOnChange!");
};
</script>
