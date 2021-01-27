<template>
    <div id="app">
        <div id="header">
            <AppWrapper id="header-container">
                <AppWrapper type="center">
                    <div style="width: 155px; margin-right: -20px;">
                        <router-link :to="{name: 'Home'}" style="position: relative; width: 100%; top: -7.5px; left: -15px;">
                            <img :src="logo" alt="SAJI-IN" style="width: 100%;">
                        </router-link>
                    </div>
                    <div style="margin-top: 2px;">
                        <AppMenu :data="navbar" />
                    </div>
                </AppWrapper>
                <div style="margin-top: 11px;">
                    <AppButton 
                        title="How it works"
                        type="link"
                        routeName="Home"
                    />
                    <AppButton 
                        title="Login"
                        type="sekunder"
                        routeName="Login"
                    />
                    <AppButton 
                        title="Register"
                        type="main"
                        routeName="Register"
                    />
                </div>
            </AppWrapper>
        </div>
        <div id="body">
            <router-view />
        </div>
        <div id="footer">
            <AppWrapper id="footer-content">
                <AppWrapper :isColumn="true" style="width: 240px;">
                    <img 
                        :src="logo" 
                        alt="SAJI-IN" 
                        style="
                            position: relative; 
                            width: 150px;
                            margin-bottom: 20px;
                        ">
                    <AppText type="normal" style="margin-bottom: 20px;">
                        <span style="font-size: 11pt;">Photographs are away of preserving a moment in our lives for the rest of our lives.</span>
                    </AppText>
                    <AppText style="margin-bottom: 20px;">
                        <span style="font-size: 10pt;">Saji-in All Right Reserved @2020</span>
                    </AppText>
                </AppWrapper>
                <AppWrapper :type="'start'" :isColumn="true">
                    <div>
                        <AppText style="margin-bottom: 15px;">
                            <b>Products</b>
                        </AppText>
                        <ul class="menu-list">
                            <li>
                                <a href="#">
                                    Catalog
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Payment
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Delivery
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </AppWrapper>
                <AppWrapper :type="'start'" :isColumn="true">
                    <div>
                        <AppText style="margin-bottom: 15px;">
                            <b>About</b>
                        </AppText>
                        <ul class="menu-list">
                            <li>
                                <a href="#">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Team
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Principles
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    History
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Awwards
                                </a>
                            </li>
                        </ul>
                    </div>
                </AppWrapper>
                <AppWrapper :type="'start'" :isColumn="true">
                    <div>
                        <AppText style="margin-bottom: 15px;">
                            <b>Blog</b>
                        </AppText>
                        <ul class="menu-list">
                            <li>
                                <a href="#">
                                    News
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Events
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </AppWrapper>
                <AppWrapper :isColumn="true" style="width: 150px;">
                    <div style="
                        positiion: relative;
                        width: 120px;
                        height: 50px;
                        background-color: #ccc;
                        border-radius: 5px;
                        margin-bottom: 15px;
                    "></div>
                    <div style="
                        positiion: relative;
                        width: 120px;
                        height: 50px;
                        background-color: #ccc;
                        border-radius: 5px;
                        margin-bottom: 15px;
                    "></div>
                    <AppWrapper>
                        <div style="
                            positiion: relative;
                            width: 40px;
                            height: 40px;
                            background-color: #ccc;
                            border-radius: 100px;
                            margin-bottom: 10px;
                        "></div>
                        <div style="
                            positiion: relative;
                            width: 40px;
                            height: 40px;
                            background-color: #ccc;
                            border-radius: 100px;
                            margin-bottom: 10px;
                        "></div>
                        <div style="
                            positiion: relative;
                            width: 40px;
                            height: 40px;
                            background-color: #ccc;
                            border-radius: 100px;
                            margin-bottom: 10px;
                        "></div>
                    </AppWrapper>
                </AppWrapper>
            </AppWrapper>
        </div>
    </div>
</template>

<script>
import logo from '../../assets/img/logo.png'
import AppWrapper from '../modules/AppWrapper'
import AppButton from '../modules/AppButton'
import AppMenu from "../modules/AppMenu"
import AppText from "../modules/AppText"

const navbar = [
    {label: 'Premium Features', link: 'premium'},
    {label: 'Blogs', link: 'blogs'},
    {label: 'Language', link: 'language'},
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