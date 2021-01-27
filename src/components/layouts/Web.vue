<template>
    <div id="app">
        <div id="header">
            <div id="header-container" class="display-flex space-between">
                <div class="display-flex">
                    <div style="width: 45px; margin-top: 0; margin-right: 10px;">
                        <router-link :to="{name: 'Home'}" style="position: relative; width: 100%; top: 0; left: 0;">
                            <img :src="logo" alt="SAJI-IN" style="width: 100%;">
                        </router-link>
                    </div>
                    <div style="margin-top: 3px;">
                        <AppMenu :data="navbar" />
                    </div>
                </div>
                <div class="display-flex margin margin-top-2">
                    <button class="btn btn-icon btn-radius btn-sekunder margin margin-left-5">
                        <i class="fab fa-lg fa-facebook" />
                    </button>
                    <button class="btn btn-icon btn-radius btn-sekunder margin margin-left-5">
                        <i class="fab fa-lg fa-instagram" />
                    </button>
                    <button class="btn btn-icon btn-radius btn-sekunder margin margin-left-5">
                        <i class="fab fa-lg fa-whatsapp" />
                    </button>
                    <button class="btn btn-icon btn-radius btn-sekunder margin margin-left-5">
                        <i class="fa fa-lg fa-envelope" />
                    </button>
                </div>
            </div>
        </div>
        <div id="body">
            <router-view />
        </div>
    </div>
</template>

<script>
import logo from '../../assets/img/icon.png'
import AppWrapper from '../modules/AppWrapper'
import AppButton from '../modules/AppButton'
import AppMenu from "../modules/AppMenu"
import AppText from "../modules/AppText"

const navbar = [
    {label: 'PROFIL', link: 'Home'},
    {label: 'PENDIDIKAN', link: 'Home'},
    {label: 'VISI & MISI', link: 'Home'},
    {label: 'GALERI', link: 'Home'},
    {label: 'KONTAK', link: 'Home'},
]

export default {
    name: 'App',
    data () {
        return {
            logo: logo,
            navbar: navbar
        }
    },
    components: {
        AppWrapper,
        AppButton,
        AppMenu,
        AppText
    },
    methods: {
        onLogin () {
            
        },
        onRegister () {
            console.log('REGISTER')
        }
    }
}

</script>