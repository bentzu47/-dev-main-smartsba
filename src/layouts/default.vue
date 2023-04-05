<template>
    <div class="h-100">
        <AppHeader :is-menu-navigate="false" />
        <div class="layout-page-content d-flex">
            <div class="w-100">
                <main class="v-container px-4 pt-3 pb-4">
                    <h5>😎 Stock Management Entry</h5>
                    <div id="main-program">
                        <slot />
                    </div>
                    <!-- <div class="card">
                        <div class="card-header">
                            <LayoutHeaderProgram :enableAboutVersion="false" />
                        </div>
                        <div class="card-body">
                            <header>
                                Test
                            </header>
                            <slot />

                            <hr />
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div> -->
                </main>
            </div>
        </div>
    </div>
</template>

<script lang="ts" >
console.log("# default!!!")
let isMenuNavigate: Boolean = false;
export default {
    data() {
        return {
            fsUserName: 'Nutchayapat Intaramat (CHECKER)',
            isMenuNavigate: isMenuNavigate
        }
    },
    computed: {
        smartResize() {
            // @media(min-width: 768px) {
        }
    },
    mounted() {
        console.log('Mounted 🔥')
        window.addEventListener('resize', this.getDimensions);
    },
    unmounted() {
        console.log('Mounted 🔥')
        window.removeEventListener('resize', this.getDimensions);
    },
    methods: {
        getDimensions() {
            console.log('Get dimensions!!');
        }
    }
}
</script>

<style scoped></style>