<template>
    <div id="menu-side" class="h-100">
        <div class="h6 d-flex justify-content-between p-3 mb-0 fw-bold">
            <span class="text-white">NAVIGATION</span>
            <button title="close" id="side-menu-closebtn" class="bg-transparent border-0 text-white" @click="sideMenuToggle">
                <i class="fas fa-lg fa-times"></i>
            </button>
        </div>
        <ul class="list-group rounded-0 nav-item">
            <template v-for="item in menuLists.menu">
                <NuxtLink v-if="item.submenu.length == 0" :id="item.id"
                    :class="`list-group-item list-group-item-action px-0 border-0 text-light ${'true' === item.firstpage ? 'router-link-active' : ''}`"
                    :to="`/${item.id}`" @click.prevent="routerLinkByMenues(item.id)">
                    <div class="px-3">
                        <div>
                            <span class="icon"><em :class="item.menuicon"></em></span>
                            <span class="ps-2">{{ item.text }}</span>
                        </div>
                    </div>
                </NuxtLink>
                <li v-else :id="`${item.id}-submenu`"
                    class="list-mainmenu-list list-group-item list-group-item-action p-0 border-0 rounded-0">
                    <div class="d-flex justify-content-between px-3 py-2 collapsed" data-mdb-toggle="collapse"
                        :href="`#${item.id}-submenu-collapse`" role="button" aria-expanded="false" tabindex="1">
                        <div>
                            <em :class="item.menuicon"></em>
                            <span class="ps-2">{{ item.text }}</span>
                        </div>
                        <span class="angle-rotate"></span>
                        <em class="fas fa-angle-down rotate-icon"
                            style="transition-property: transform; transform: rotate(0deg);" />
                    </div>
                    <ul class="list-submenu-list sidenav-collapse border-0 rounded-0 collapse"
                        :id="`${item.id}-submenu-collapse`" style="transition-property: height;">
                        <template v-for="subitem in item.submenu" :key="subitem.index">
                            <NuxtLink v-if="'true' === subitem.permissions.insert" :id="`${subitem.type - subitem.id}`"
                                class="list-submenu-item list-group-item list-group-item-action border-0"
                                :to="`/insert/${subitem.id}/insert`" 
                                @click.prevent="routerLinkByMenues(subitem.id)">
                                <div class="ps-3">{{ subitem.text }}</div>
                            </NuxtLink>
                        </template>
                    </ul>
                </li>
            </template>
        </ul>
    </div>
</template>

<script setup lang="ts">
//  const config = useRuntimeConfig()
//  const { response } = await $fetch(`https://10.22.26.75/AUTHREF/menu/get_menufile.jsp?programgroupname=SBRE188M.nagivate`, { method: 'GET' })

// const { data: response, pending, error, refresh } = await useFetch('/api/authref/menu')

const { data } = await useFetch(() => `/api/authref/menu`)
console.log("# data: ", data);
// console.log('# menuLists: ', data?._rawValue?.content)
const menuLists = await data?._rawValue?.content;
console.log('# menuLists: ', menuLists)
</script>

<script lang="ts">
export default {
    data() {
        return {
            menues: [],
        }
    },
    async mounted() {
        console.log('😏 mounted!!')
        // this.menues = await this.getMenuFile();
    },
    computed: {
        defaultSizeNavigate(){

        }
    },
    methods: {
        getMenuFile: function () {
            // return useFetch('/api/authref/menu')
        },
        routerLinkByMenues: async (id: string) => {
            console.log('function: routerLinkByMenues')
            // console.log('# e: ', e)
            // console.log("# href: ", e.href)
            await navigateTo({
                path: "/program/" + id + "/action/insert",
                // query: {
                    // page: 1,
                    // sort: 'asc'
                // }
            })
        },
        sideMenuToggle: ():void => {
            console.log("# SideMenuToggle!!!!!!!!!")
        }
    }
}
</script>



<style scoped >
@import "@/assets/css/components/nav-sidemenu.css";



/* router-link-active router-link-exact-active list-group-item list-group-item-action px-3 border-0 */
.list-mainmenu-list:not(.collapse) {}

.list-group-item:not(.list-submenu-item) {
    background-color: var(--sidemenu-color);
    color: var(--mdb-gray-100) !important;
}

/* .list-mainmenu-list:not(.collapse), */
/* .list-mainmenu-list:not(.collapse):not(:hover), */
.list-mainmenu-list:hover,
.list-mainmenu-list:has(> div:not(.collapsed)),
.list-group-item:not(.list-mainmenu-list, .list-submenu-item):hover {
    border-right: 4px solid #FF9800 !important;
    background-color: rgba(255, 255, 255, 0.06);
    /* transition: var(--mdb-list-group-item-transition-time); */
}

.list-group-item .icon {
    
}

.list-group-item.list-submenu-item {
    background-color: #243547;
    padding-right: 8px;
    color: rgba(255, 255, 255, 0.75);
}

.list-group-item.list-submenu-item:hover {
    background-color: rgba(255, 255, 255, 0.06)
}

.list-group-item.router-link-active.router-link-exact-active {
    color: #F6C700 !important;
    border-right: 4px solid #F6C700 !important;
    background-color: rgba(255, 255, 255, 0.06);
}

.list-group {
    --mdb-list-group-item-transition-time: 0.3s;
}

.list-mainmenu-list>.list-submenu-list {
    /* background-color: #020081; */
    background-color: #243547;
}


/* .nav-md ul.nav.child_menu li:before { */
.list-mainmenu-list>.list-submenu-list>.list-submenu-item::before {
    background: #425668;
    bottom: auto;
    content: "";
    height: 8px;
    /* left: 23px; */
    margin-top: 15px;
    position: absolute;
    right: auto;
    width: 8px;
    z-index: 1;
    border-radius: 50%;
    left: 18.5px;
}


/* .nav-md ul.nav.child_menu li:after { */
.list-mainmenu-list>.list-submenu-list::after {
    border-left: 1px solid #425668;
    bottom: 0;
    content: "";
    /* left: 27px; */
    position: absolute;
    top: 0;
    left: 22px;
}

.angle-rotate {
    content: "\f107";
    padding-top: 0.285em;
    display: block;
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: var(--fa-display, inline-block);
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    text-rendering: auto;
}

/* <em class="fas fa-angle-down rotate-icon"
                            style="transition-property: transform; transform: rotate(0deg);" /> */


#menu-side > ul.list-group {
    height: calc(100% - 55px);
    overflow-x: hidden;
    overflow-y: auto;
}
</style>