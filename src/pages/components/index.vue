<template>
    <div>
        <h1>Hi! Components Page | Parent🤣</h1>
        <div id="nav-lists" class="d-flex">
            <NuxtLink to="/components/button">Button</NuxtLink>
            <NuxtLink to="/components/lookup">Lookup</NuxtLink>
        </div>
        <NuxtPage />
    </div>
</template>

<script lang="ts" setup>
const actionFlowButtonInit = (step:string, action:string, actiontype:string):void =>{
    console.log("👉🏻 actionFlowButtonInit Function!")
    console.log("# actionFlow: ", {
        step: step,
        action: action,
        actiontype: actiontype
    })
};
</script>

<style lang="css" scoped>
#nav-lists > *::after {
    content: "/";
    padding: 2.5px;
}
</style>
