<template>
    <!-- 
    <MDBBtn color="light">
        <span class="material-icons-round me-2">account_box</span>
        !-- text-capitalize 
        <slot>Choose CA Information</slot>
    </MDBBtn> -->

    <!-- Button trigger modal -->
    <MDBBtn color="light" aria-controls="exampleModal" @click="exampleModal = true">
        <span class="material-icons-round me-2">account_box</span>
        Choose CA Information
    </MDBBtn>
    <MDBModal id="exampleModal" tabindex="-1" labelledby="exampleModalLabel" v-model="exampleModal" size="lg" centered>
        <MDBModalHeader>
            <MDBModalTitle id="exampleModalLabel"> </MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>
            <HeaderBoxLabel class='mb-0' >รายละเอียดข่าว / Corporate Action's Information</HeaderBoxLabel>
            <!-- Selected Item: {{ selectedItem && selectedItem.ProductID }} , {{ selectedItem && selectedItem.ProductName }}
            <div>{{ items }}</div>
            <div>{{ kngrid.columns }}</div> -->
            <Grid ref="grid" :style="{ height: '520px' }" :data-items="kngrid.data" :selected-field="selectedField"
                :columns="kngrid.columns" @rowclick="onRowClick">
                <template v-slot:runningRecord="{ props }">
                    <td :class="props.className">{{ props.dataIndex }}</td>
                </template>
            </Grid>
            <!-- </div> -->
        </MDBModalBody>
    </MDBModal>
</template>
<script lang="ts" setup>
import { MDBBtn, MDBModal, MDBModalHeader, MDBModalBody } from "mdb-vue-ui-kit";
// import { Grid as KendoGrid } from '@progress/kendo-vue-grid';
import { Grid } from '@progress/kendo-vue-grid';
const exampleModal = ref(false);
const kngrid = reactive({
    // selectedField: 'selected',
    selectedID: 1,
    data: [],
    columns: [
        { title: 'Seq.', width: '80px', clasName: 'text-center', cell: 'runningRecord' },
        { field: 'corpdate', title: 'CA Date', filter: 'date' },
        { field: 'corptype', title: 'CA Type' },
        { field: 'corpdesc', title: 'Discription' },
        { field: 'corpno', title: 'CA No.' },
        { field: 'xdate', title: 'X Date', filter: 'date' }
    ]
})

// const items = computed(() => {
//     return data.products.map((item) => ({ ...item, selected: item.ProductID === data.selectedID }));
// })

const selectedItem = computed(() => {
    return kngrid.data.find((item) => item.ProductID === kngrid.selectedID);
})

const onRowClick = (event) => {
    console.log("# onRowClick: ", event)
    kngrid.selectedID = event.dataItem.ProductID;
}
// const createRandomData = (count) => {
//     const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
//     const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120]

//     return Array(count).fill({}).map((_, idx) => ({
//         ProductID: idx + 1,
//         ProductName: productNames[Math.floor(Math.random() * productNames.length)],
//         UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
//         UnitsInStock: Math.floor(Math.random() * 100)
//     }));
// }

const BASE_API_STOCK = useRuntimeConfig().public.BASE_API_STOCK;
const getInqCAInfo = async () => {
    let data = {
        sharecode: 'BBL',// field symbol จาก Modal Trans's Detail
        xdate: ''// field xdate จาก Modal Trans's Detail
    }
    let response = await getJSONResponse(BASE_API_STOCK + '/inqcainfo/inquiry', data);
    console.log(" #response: ", response)
    if(response.result == 'Y' || response.resultcode == '1002'){
        return response.lists;
    } else {
        return [];
    }
}

onBeforeMount(async () => {
    // data.products = createRandomData(10);
    console.log("# grid data: ", kngrid.data);
    kngrid.data = await getInqCAInfo();
    // kngrid.data.value = [
    //     { corpdate: new Date(2022, 06, 01), corptype: 'NR', corpdesc: 'New Register', corpno: '372', xdate: new Date(2022, 06, 15) },
    //     { corpdate: new Date(2022, 06, 01), corptype: 'NR', corpdesc: 'New Register', corpno: '372', xdate: new Date(2022, 06, 15) },
    //     { corpdate: new Date(2022, 06, 01), corptype: 'NR', corpdesc: 'New Register', corpno: '372', xdate: new Date(2022, 06, 15) },
    //     { corpdate: new Date(2022, 06, 01), corptype: 'NR', corpdesc: 'New Register', corpno: '372', xdate: new Date(2022, 06, 15) }
    // ]
})

// onMounted(() => {
//   el.value // <div>
// })
</script>
<style scoped></style>