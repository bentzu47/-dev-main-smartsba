<template>
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
<!--             
  <Grid
    :data-items="products"
    :filterable="true"
    :filter="filter"
    @filterchange="filterChange"
    :columns="columns"
    :filter-cell-render="filterRender"
  >
    <template v-slot:filterSlotTemplate="{ props, methods }">
      <div>
        Filter Slot:
        <KInput
          :style="{ width: '180px' }"
          :value="props.value"
          @input="
            (ev) => {
              props.onChange({
                operator: 'contains',
                field: props.field,
                value: ev.target.value,
                syntheticEvent: ev,
              });
            }
          "
        />
        <KButton
          :style="{ 'margin-left': '15px' }"
          @click="
            (ev) => {
              props.onChange({ operator: '', field: '', value: '', event: ev });
            }
          "
          >Clear</KButton
        >
      </div>
    </template>
    <template v-slot:filterSlotTemplate2="{ props, methods }">
      <div>
        <datepicker :style="{ width: '230px' }" :popupSettings="popupSettings" />
      </div>
    </template>
  </Grid> -->
</template>
<!--
  <script>
// import { DatePicker } from '@progress/kendo-vue-dateinputs';
// import { Grid as KendoGrid } from '@progress/kendo-vue-grid';
// import { Input } from '@progress/kendo-vue-inputs';
// import { Button } from '@progress/kendo-vue-buttons';
// import { filterBy } from '@progress/kendo-data-query';
// // import { sampleProducts } from './products';

// const popupSettings = {
//   appendTo: ""
// }

// const kngrid = reactive({
//     // selectedField: 'selected',
//     selectedID: 1,
//     data: [],
//     columns: [
//         {
//             title: "Seq.",
//             width: "80px",
//             clasName: "text-center",
//             cell: "runningRecord",
//         },
//         { field: "corpdate", title: "CA Date", filter: "date" },
//         { field: "corptype", title: "CA Type" },
//         { field: "corpdesc", title: "Discription" },
//         { field: "corpno", title: "CA No." },
//         { field: "xdate", title: "X Date", filter: "date" },
//     ],
// });


// const sampleProducts = [
//   {
//     ProductID: 1,
//     ProductName: "Chai",
//     SupplierID: 1,
//     CategoryID: 1,
//     QuantityPerUnit: "10 boxes x 20 bags",
//     UnitPrice: 18,
//     UnitsInStock: 39,
//     UnitsOnOrder: 0,
//     ReorderLevel: 10,
//     Discontinued: false,
//     Category: {
//       CategoryID: 1,
//       CategoryName: "Beverages",
//       Description: "Soft drinks, coffees, teas, beers, and ales",
//     },
//     FirstOrderedOn: new Date(1996, 8, 20),
//   },
//   {
//     ProductID: 2,
//     ProductName: "Chang",
//     SupplierID: 1,
//     CategoryID: 1,
//     QuantityPerUnit: "24 - 12 oz bottles",
//     UnitPrice: 19,
//     UnitsInStock: 17,
//     UnitsOnOrder: 40,
//     ReorderLevel: 25,
//     Discontinued: false,
//     Category: {
//       CategoryID: 1,
//       CategoryName: "Beverages",
//       Description: "Soft drinks, coffees, teas, beers, and ales",
//     },
//     FirstOrderedOn: new Date(1996, 7, 12),
//   },
//   {
//     ProductID: 3,
//     ProductName: "Aniseed Syrup",
//     SupplierID: 1,
//     CategoryID: 2,
//     QuantityPerUnit: "12 - 550 ml bottles",
//     UnitPrice: 10,
//     UnitsInStock: 13,
//     UnitsOnOrder: 70,
//     ReorderLevel: 25,
//     Discontinued: false,
//     Category: {
//       CategoryID: 2,
//       CategoryName: "Condiments",
//       Description: "Sweet and savory sauces, relishes, spreads, and seasonings",
//     },
//     FirstOrderedOn: new Date(1996, 8, 26),
//   },
//   {
//     ProductID: 4,
//     ProductName: "Chef Anton's Cajun Seasoning",
//     SupplierID: 2,
//     CategoryID: 2,
//     QuantityPerUnit: "48 - 6 oz jars",
//     UnitPrice: 22,
//     UnitsInStock: 53,
//     UnitsOnOrder: 0,
//     ReorderLevel: 0,
//     Discontinued: false,
//     Category: {
//       CategoryID: 2,
//       CategoryName: "Condiments",
//       Description: "Sweet and savory sauces, relishes, spreads, and seasonings",
//     },
//     FirstOrderedOn: new Date(1996, 9, 19),
//   },
//   {
//     ProductID: 5,
//     ProductName: "Chef Anton's Gumbo Mix",
//     SupplierID: 2,
//     CategoryID: 2,
//     QuantityPerUnit: "36 boxes",
//     UnitPrice: 21.35,
//     UnitsInStock: 0,
//     UnitsOnOrder: 0,
//     ReorderLevel: 0,
//     Discontinued: true,
//     Category: {
//       CategoryID: 2,
//       CategoryName: "Condiments",
//       Description: "Sweet and savory sauces, relishes, spreads, and seasonings",
//     },
//     FirstOrderedOn: new Date(1996, 7, 17),
//   },
//   {
//     ProductID: 6,
//     ProductName: "Grandma's Boysenberry Spread",
//     SupplierID: 3,
//     CategoryID: 2,
//     QuantityPerUnit: "12 - 8 oz jars",
//     UnitPrice: 25,
//     UnitsInStock: 120,
//     UnitsOnOrder: 0,
//     ReorderLevel: 25,
//     Discontinued: false,
//     Category: {
//       CategoryID: 2,
//       CategoryName: "Condiments",
//       Description: "Sweet and savory sauces, relishes, spreads, and seasonings",
//     },
//     FirstOrderedOn: new Date(1996, 9, 19),
//   },
//   {
//     ProductID: 7,
//     ProductName: "Uncle Bob's Organic Dried Pears",
//     SupplierID: 3,
//     CategoryID: 7,
//     QuantityPerUnit: "12 - 1 lb pkgs.",
//     UnitPrice: 30,
//     UnitsInStock: 15,
//     UnitsOnOrder: 0,
//     ReorderLevel: 10,
//     Discontinued: false,
//     Category: {
//       CategoryID: 7,
//       CategoryName: "Produce",
//       Description: "Dried fruit and bean curd",
//     },
//     FirstOrderedOn: new Date(1996, 7, 22),
//   },
//   {
//     ProductID: 8,
//     ProductName: "Northwoods Cranberry Sauce",
//     SupplierID: 3,
//     CategoryID: 2,
//     QuantityPerUnit: "12 - 12 oz jars",
//     UnitPrice: 40,
//     UnitsInStock: 6,
//     UnitsOnOrder: 0,
//     ReorderLevel: 0,
//     Discontinued: false,
//     Category: {
//       CategoryID: 2,
//       CategoryName: "Condiments",
//       Description: "Sweet and savory sauces, relishes, spreads, and seasonings",
//     },
//     FirstOrderedOn: new Date(1996, 11, 1),
//   },
//   {
//     ProductID: 9,
//     ProductName: "Mishi Kobe Niku",
//     SupplierID: 4,
//     CategoryID: 6,
//     QuantityPerUnit: "18 - 500 g pkgs.",
//     UnitPrice: 97,
//     UnitsInStock: 29,
//     UnitsOnOrder: 0,
//     ReorderLevel: 0,
//     Discontinued: true,
//     Category: {
//       CategoryID: 6,
//       CategoryName: "Meat/Poultry",
//       Description: "Prepared meats",
//     },
//     FirstOrderedOn: new Date(1997, 1, 21),
//   },
//   {
//     ProductID: 10,
//     ProductName: "Ikura",
//     SupplierID: 4,
//     CategoryID: 8,
//     QuantityPerUnit: "12 - 200 ml jars",
//     UnitPrice: 31,
//     UnitsInStock: 31,
//     UnitsOnOrder: 0,
//     ReorderLevel: 0,
//     Discontinued: false,
//     Category: {
//       CategoryID: 8,
//       CategoryName: "Seafood",
//       Description: "Seaweed and fish",
//     },
//     FirstOrderedOn: new Date(1996, 8, 5),
//   },
// ];


// export default {
//   components: {
//     Grid,
//     KInput: Input,
//     KButton: Button,
//     'datepicker': DatePicker
//   },
//   data: function () {
//     return {
//       filter: {
//         logic: 'and',
//         filters: [{ field: 'UnitPrice', operator: 'neq', value: 2 }],
//       },
//       columns: [
//         { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
//         {
//           field: 'ProductName',
//           title: 'Product Name',
//           filterCell: 'filterSlotTemplate',
//           width: '150px',
//         },
//         { field: 'UnitPrice', filter: 'numeric', title: 'UnitPrice' },
//         { field: 'Discontinued', filter: 'boolean', title: 'Discontinued' },
//         { field: 'FirstOrderedOn', filter: 'date', title: 'FirstOrderedOn', filterCell: 'filterSlotTemplate2', width: '250px', },
//       ],
//     };
//   },
//   computed: {
//     products: function () {
//       return filterBy(sampleProducts, this.filter);
//     },
//   },
//   methods: {
//     filterChange: function (ev) {
//       this.filter = ev.filter;
//     },
//     filterRender: function (h, defaultRendering, props, change) {
//       return defaultRendering;
//     },
//   },
// };
</script>
-->

<script lang="ts" setup>
import { MDBBtn, MDBModal, MDBModalHeader, MDBModalBody } from "mdb-vue-ui-kit";
import { Grid as KendoGrid } from "@progress/kendo-vue-grid";

const visibleModal = ref(false);
const kngrid = reactive({
    // selectedField: 'selected',
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