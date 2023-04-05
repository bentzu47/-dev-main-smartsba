<template>
  <div class="bg-secondary">
    <h1>Link to... 👉🏻 {{ $route.params.progid }}</h1>
    <LayoutProgram id="example_content">
      <template #title >Add Transaction</template>
    </LayoutProgram>
    <!-- <NuxtLayout> -->
    <div id="main-apps2">
      <NuxtPage />
    </div>
    <!-- </NuxtLayout> -->
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<script lang="ts" setup>
// const route = useRoute();
</script>
<script lang="ts">
export default {
    mounted() {
    console.log(this.$slots.header);
    console.log(this.$slots['main-title']);
    console.log(this.$slots['title']);
  },
}
</script>

<style lang="scss" scoped></style>
