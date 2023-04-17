<template>
    <ButtonAdd aria-controls="exampleModalCenter" @click="exampleModalCenter = true">
        <i class="fab fa-airbnb fa-lg"></i>
        Choose CA Information
    </ButtonAdd>
    <Grid :style="{ height: '450px' }" :data-items="result" :pageable="true" :skip="data.skip" :take="data.take" :total="total"
        :columns="data.columns" @pagechange="pageChangeHandler" :loader="data.loader">
    </Grid>
</template>

<script lang="ts" setup>
import { Grid } from '@progress/kendo-vue-grid';
const exampleModalCenter: Ref<boolean> = ref(true);

const data = reactive({
    loader: false,
    dataItems: [],
    skip: 0,
    take: 10,
    columns: [
        { field: 'ProductID' },
        { field: 'ProductName', title: 'Product Name' },
        { field: 'UnitPrice', title: 'Unit Price' },
    ],
})

const result = computed(() => {
    get: () => {
        return data.dataItems.slice(data.skip, data.take + data.skip);
    }
})

const total = computed(() => {
    return data.dataItems ? data.dataItems.length : 0;
});

const pageChangeHandler = (event: Event) => {
    data.loader = true;
    // The idea behind using the following setTimeout method is to
    // demonstrate how we can show a loader while fetching data.
    // In a real-life scenarios with remote data binding, the 'loader'
    // property should be updated before making a server request
    // and after the request completes.
    setTimeout(() => {
        data.loader = false;
        data.skip = event.page.skip;
        data.take = event.page.take;
    }, 300);
};
const createRandomData = (count: number) => {
    const productNames = [
        'Chai',
        'Chang',
        'Syrup',
        'Apple',
        'Orange',
        'Banana',
        'Lemon',
        'Pineapple',
        'Tea',
        'Milk',
    ];
    const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];

    return Array(count)
        .fill({})
        .map((_, idx) => ({
            ProductID: idx + 1,
            ProductName:
                productNames[Math.floor(Math.random() * productNames.length)],
            UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
        }));
};

onMounted(() => {
    data.dataItems = createRandomData(500);
})
</script>
<style lang="scss" scoped></style>
