<template>
    <div id="admin">
        <div :class="isSidebarSmall ? 'sidebar small' : 'sidebar'">
            <div class="header">
                <div class="header-content display-flex space-between">
                    <div class="logo">
                        <img :src="logo" alt="SAJI-IN" style="width: 100%;">
                    </div>
                    <button class="close btn btn-white btn-icon" @click="onSidebar()">
                        <i 
                            :class="isSidebarSmall ? 'fa fa-lg fa-bars' : 'fa fa-lg fa-times'" 
                            style="font-size: 18px; margin-top: 0;" />
                    </button>
                </div>
            </div>
            <div class="content">
                <div>
                    <ul :class="isSidebarSmall ? 'menu-list hover with-icon small' : 'menu-list hover with-icon'">
                        <li v-for="(dt, index) in sidebar" :key="index">
                            <router-link :to="{name: dt.link}">
                                <div class="icon">
                                    <i :class="dt.icon" />
                                </div>
                                <div class="label">
                                    {{ dt.label }}
                                </div>
                                <div class="val-container">
                                    <div v-if="dt.value > 0" class="value">
                                        {{ dt.value }}
                                    </div>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="header">
                <div class="set-padding display-flex space-between">
                    <div>
                        <form action="#" class="card-search">
                            <button class="btn btn-icon btn-white" type="submite">
                                <i class="fa fa-1x fa-search" />
                            </button>
                            <input type="search" placeholder="Cari menu atau pesanan.." required class="field">
                        </form>
                    </div>
                    <div style="width: 100%;" class="display-flex right">
                        <button class="btn btn-white btn-icon btn-radius">
                            <i class="far fa-lg fa-life-ring" />
                        </button>
                        <button class="btn btn-white btn-icon btn-radius">
                            <i class="fa fa-lg fa-plus-circle" />
                        </button>
                        <button class="btn btn-white btn-icon btn-radius">
                            <i class="far fa-lg fa-bell" />
                        </button>
                        <div class="card-small-profile">
                            <div class="image">
                                <img :src="profile" alt="">
                            </div>
                            <div class="label">MICRO COFFEE</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="set-padding">
                    <router-view />
                </div>
            </div>
            <div class="footer display-flex space-between">
                <div>Version 0.0.1 - Beta</div>
                <div style="cursor: default;">
                    <router-link to="/" class="link-text bold small">About us</router-link> -
                    <router-link to="/" class="link-text bold small">Helps</router-link> -
                    <router-link to="/" class="link-text bold small">Terms & conditions</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import logo from '../../assets/img/logo.png'
import profile from '../../assets/img/3.jpg'

const sidebar = [
    {icon: 'fa fa-lg fa-tachometer-alt', label: 'DASHBOARD', value: 1, link: 'Admin'},
    {icon: 'fa fa-lg fa-store', label: 'RESTORAN', value: 0, link: 'AdminShops'},
    {icon: 'fa fa-lg fa-utensils', label: 'MENU', value: 2, link: 'AdminMenus'},
    {icon: 'fa fa-lg fa-receipt', label: 'PESANAN', value: 5, link: 'AdminOrders'},
    {icon: 'fa fa-lg fa-calculator', label: 'PEMBAYARAN', value: 3, link: 'AdminCashier'},
    // {icon: 'fa fa-lg fa-users', label: 'PEGAWAI', value: 0, link: 'AdminEmployees'},
    // {icon: 'fa fa-lg fa-bullhorn', label: 'PENGUMUMAN', value: 2, link: 'Admin'},
    {icon: 'fa fa-lg fa-calendar-alt', label: 'LAPORAN', value: 0, link: 'Admin'},
]

export default {
    name: 'admin',
    data () {
        return {
            logo: logo,
            profile: profile,
            sidebar: sidebar,
            isSidebarSmall: false,
            classSidebar: 'sidebar smalls',
            classSidebarMenu: 'menu-list hover with-icon smalls'
        }
    },
    methods: {
        onSidebar () {
            this.isSidebarSmall = !this.isSidebarSmall
        }
    }
}
</script>