<template>
    <div class="h-100">
        <!-- <AppHeader :is-menu-navigate="true" :toggle-menu="toggleNavSide == !toggleNavSide" :toggle-menu="doToggleNavSide" /> -->
        <!-- <AppHeader :is-menu-navigate="true" :is-hide-nav="toggleNavSide" :class-name="className" @toggle-menu="doToggleNavSide()" /> -->
        <AppHeader :is-menu-navigate="true" :is-hide-nav="toggleNavSide"  @toggle-menu="doToggleNavSide()" />
        <div class="layout-page-content d-flex">
            <div class="left-col">
                <!-- Nav SideMenu elements -->
                <aside class="h-100">
                    <!-- Nav SideMenu Content elements -->
                    <AppSideMenu :toggle="toggleNavSide" />
                </aside>
            </div>
            <div class="right-col">
                <!-- <div>Toggle Nav Side: {{ toggleNavSide }}</div> -->
                <main class="v-container px-4 pt-3 pb-4">
                    <!-- <h5>😎 Stock Management Entry</h5> -->
                    <div id="main-program">
                        <slot />
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const toggleNavSide:Ref<boolean> = ref(true);
// const NavSideMenu: ConcreteComponent<{}, any, any, ComputedOptions, MethodOptions> = resolveComponent('NavSideMenu');
// const toggleNavSide = ():boolean =>{
//     console.log("👆🏻 Toggle Nav Side~")
//     return 
// }
const doToggleNavSide = ():void=>{
    console.log("# do ToggleNavSide!!!");
    toggleNavSide.value = !toggleNavSide.value;
}
</script>

<script lang="ts" >
// const screenwidth:Ref<number> = ref(window.screen.width);
export default {
    data() {
        return {
            
        }
    },
    computed: {
        smartResize() {
            // @media(min-width: 768px) {
        }
    },
    mounted() {
        console.log('Mounted 🔥!')
        window.addEventListener('resize', this.getDimensions);
    },
    beforeDestroy() {
        console.log('UnMounted 💣!')
        window.removeEventListener('resize', this.getDimensions);
    },
    methods: {
        getDimensions() {
            console.log("📏 GetDimensions!!!!")
            console.log("Window width !!: ", window.screen.width)
        }
    },
    watch: {
        // screenwidth(){
        //     console.log("# screenwidth: ", screenwidth)
        // }
    }
}
</script>

<style lang="scss">
.layout-wrapper.layout-nav-type-vertical .layout-content-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-block-size: calc(var(--vh, 1vh) * 100);
    transition: padding-inline-start .2s ease-in-out;
    will-change: padding-inline-start;
}

.layout-page-content {
    overflow: hidden;
    height: calc(100% - 57px);
}


@media (min-width: 576px) {
    /* .col-sm {
        flex: 1 0 0%;
    } */
}

.left-col {
    flex: 0 0 auto;
    width: 25%;

    max-width: 300px;
}

.right-col {
    flex: 0 0 auto;
    width: 75%;

    min-width: calc(75% - 300px);
}

/* 
.layout-page-content > .left-col #menu-side ul {
    overflow-x: hidden;
    overflow-y: scroll;
    height: calc(100% - 55px);
    min-height: calc(100% - 55px);
} */

/* .layout-page-content>.left-col {
    background-color: brown;
} */

.layout-page-content>.right-col>main {
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
    min-height: 100%;
}



@media (min-width: 1367px){
    $nav-width-default: 300px;
    .left-col {
        width: $nav-width-default;
    }
    .right-col {
        width: calc(100% - $nav-width-default);
    }
}
</style>