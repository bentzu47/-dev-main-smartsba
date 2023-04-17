<template>
    <!-- Button trigger modal -->
    <MDBBtn
        color="light"
        aria-controls="visibleModal"
        class="d-flex align-items-center btn-choose-from-port"
        @click="visibleModal = true"
        size="xs"
    >
        <span class="material-icons-round me-2">account_box</span>
        Choose From Portfolio
    </MDBBtn>
    <MDBModal
        id="visibleModal"
        tabindex="-1"
        labelledby="visibleModalLabel"
        v-model="visibleModal"
        size="lg"
        centered
    >
        <MDBModalHeader>
            <MDBModalTitle id="visibleModalLabel">
                <HeaderBoxLabel
                    >รายละเอียดข่าว / Corporate Action's
                    Information</HeaderBoxLabel
                >
            </MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>
            <!-- Selected Item: {{ selectedItem && selectedItem.ProductID }} ,
            {{ selectedItem && selectedItem.ProductName }}
            <div>{{ items }}</div>
            <div>{{ kngrid.columns }}</div> -->
            <KendoGrid
                ref="grid"
                :style="{ height: '520px' }"
                :data-items="kngrid.data"
                :selected-field="selectedField"
                :columns="kngrid.columns"
                @rowclick="onRowClick"
            >
                <template v-slot:runningRecord="{ props }">
                    <td :class="props.className">{{ props.dataIndex }}</td>
                </template>
            </KendoGrid>
            <!-- </div> -->
        </MDBModalBody>
    </MDBModal>
</template>

<script lang="ts" setup>
import { MDBBtn, MDBModal, MDBModalHeader, MDBModalBody } from "mdb-vue-ui-kit";
import { Grid as KendoGrid } from "@progress/kendo-vue-grid";

const visibleModal = ref(false);
const kngrid = reactive({
    selectedID: 1,
    data: [],
    columns: [
        {
            title: "Seq.",
            width: "80px",
            clasName: "text-center",
            cell: "runningRecord",
        },
        { field: "corpdate", title: "CA Date", filter: "date" },
        { field: "corptype", title: "CA Type" },
        { field: "corpdesc", title: "Discription" },
        { field: "corpno", title: "CA No." },
        { field: "xdate", title: "X Date", filter: "date" },
    ],
});

// const items = computed(() => {
//     return data.products.map((item) => ({ ...item, selected: item.ProductID === data.selectedID }));
// })

const selectedItem = computed(() => {
    return kngrid.data.find((item) => item.ProductID === kngrid.selectedID);
});

const onRowClick = (event) => {
    console.log("# onRowClick: ", event);
    kngrid.selectedID = event.dataItem.ProductID;
};

const BASE_API_STOCK = useRuntimeConfig().public.BASE_API_STOCK;
const getInqCAInfo = async () => {
    let data = {
        sharecode: "BBL", // field symbol จาก Modal Trans's Detail
        xdate: "", // field xdate จาก Modal Trans's Detail
    };
    let response = await getJSONResponse(
        BASE_API_STOCK + "/inqcainfo/inquiry",
        data
    );
    console.log(" # inqcainfo response: ", response);
    if (response.result == "Y" || response.resultcode == "1002") {
        return response.lists;
    } else {
        return [];
    }
};

onBeforeMount(async () => {
    // data.products = createRandomData(10);
    console.log("# grid data: ", kngrid.data);
    kngrid.data = await getInqCAInfo();
    console.log("# getInqCAInfo data: ", kngrid.data);
    // kngrid.data.value = [
    //     { corpdate: new Date(2022, 06, 01), corptype: 'NR', corpdesc: 'New Register', corpno: '372', xdate: new Date(2022, 06, 15) },
    //     { corpdate: new Date(2022, 06, 01), corptype: 'NR', corpdesc: 'New Register', corpno: '372', xdate: new Date(2022, 06, 15) },
    //     { corpdate: new Date(2022, 06, 01), corptype: 'NR', corpdesc: 'New Register', corpno: '372', xdate: new Date(2022, 06, 15) },
    //     { corpdate: new Date(2022, 06, 01), corptype: 'NR', corpdesc: 'New Register', corpno: '372', xdate: new Date(2022, 06, 15) }
    // ]
});

// onMounted(() => {
//   el.value // <div>
// })
</script>
<style scoped>
.btn-choose-from-port {
    border: 1px solid #e0e0e0
}
</style>
