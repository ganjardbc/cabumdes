<template>
    <div class="main-screen">
        <carousel 
            :per-page="1" 
            :mouse-drag="true" 
            :autoplay="true" 
            :autoplayTimeout="5000" 
            :loop="true" 
            :paginationColor="'#ccc'" 
            :paginationActiveColor="'#ec6408'" 
            :paginationSize="13">
            <slide>
                <!-- profil -->
                <div class="banner">
                    <div class="banner-container flex">
                        <div class="left column">
                            <div></div>
                            <div class="box-shadow" style="width: 300px; height: 300px; border-radius: 100%; background-color: #f5f5f5; overflow: hidden;">
                                <img :src="icon" alt="SAJI-IN" style="position: relative; width: 100%;">
                            </div>
                            <div></div>
                        </div>
                        <div class="right column">
                            <div></div>
                            <div>
                                <AppText type="title">Profil</AppText>
                                <AppText type="title">Amet consectetur elit</AppText>
                                <div class="bottom-line"></div>
                                <AppText style="width: 100%; margin-bottom: 40px;">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi labore dolores dolorem beatae. Dolorum tempore nam temporibus!
                                </AppText>
                                <div class="display-flex">
                                    <button class="btn btn-main btn-radius margin margin-right-5">
                                        <i class="fa fa-lw fa-bullhorn margin margin-top-2 margin-right-10" /> BERI DUKUNGAN
                                    </button>
                                    <button class="btn btn-sekunder btn-radius margin margin-right-5">
                                        <i class="fa fa-lw fa-play margin margin-top-2 margin-right-10" /> VIDEO PROFIL
                                    </button>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </slide>

            <slide>
                <!-- slogan -->
                <div class="banner">
                    <div class="banner-container flex">
                        <div class="left column">
                            <div></div>
                            <div class="box-shadow" style="width: 300px; height: 300px; border-radius: 100%; background-color: #f5f5f5; overflow: hidden;">
                                <img :src="icon" alt="SAJI-IN" style="position: relative; width: 100%;">
                            </div>
                            <div></div>
                        </div>
                        <div class="right column">
                            <div></div>
                            <div>
                                <AppText type="subtitle">Pendidikan</AppText>
                                <!-- <div class="bottom-line"></div> -->
                                <AppText style="width: 100%; margin-top: 10px; margin-bottom: 10px;">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </AppText>
                                <AppCardList :data="benefit" />
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </slide>

            <slide>
                <!-- visi -->
                <div class="banner">
                    <div class="banner-container flex">
                        <div class="left column">
                            <div></div>
                            <div class="box-shadow" style="width: 300px; height: 300px; border-radius: 100%; background-color: #f5f5f5; overflow: hidden;">
                                <img :src="icon" alt="SAJI-IN" style="position: relative; width: 100%;">
                            </div>
                            <div></div>
                        </div>
                        <div class="right column">
                            <div></div>
                            <div>
                                <AppText type="title">Visi & Misi</AppText>
                                <div class="bottom-line"></div>
                                <AppText type="subtitle" style="width: 100%; margin-bottom: 20px; font-style: italic;">
                                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi labore dolores dolorem beatae. Dolorum tempore nam temporibus!"
                                </AppText>
                                <AppText type="subtitle" style="width: 100%; margin-bottom: 0; font-style: italic;">
                                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi labore dolores dolorem beatae. Dolorum tempore nam temporibus!"
                                </AppText>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </slide>

            <!-- <slide>
                <div class="banner">
                    <div class="banner-container flex">
                        <div class="left column">
                            <div></div>
                            <div class="box-shadow" style="width: 300px; height: 300px; border-radius: 100%; background-color: #f5f5f5; overflow: hidden;">
                                <img :src="icon" alt="SAJI-IN" style="position: relative; width: 100%;">
                            </div>
                            <div></div>
                        </div>
                        <div class="right column">
                            <div></div>
                            <div>
                                <AppText type="title">Lorem ipsum</AppText>
                                <div class="bottom-line"></div>
                                <AppText type="bold" style="width: 100%; margin-bottom: 20px; font-style: italic;">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                </AppText>
                                <AppText type="bold" style="width: 100%; margin-bottom: 0; font-style: italic;">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                </AppText>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </slide> -->

            <slide>
                <!-- galery -->
                <div class="banner">
                    <div class="banner-container flex">
                        <div class="left column">
                            <div></div>
                            <div class="box-shadow" style="width: 300px; height: 300px; border-radius: 100%; background-color: #f5f5f5; overflow: hidden;">
                                <img :src="icon" alt="SAJI-IN" style="position: relative; width: 100%;">
                            </div>
                            <div></div>
                        </div>
                        <div class="right column">
                            <div></div>
                            <div>
                                <div class="content-center">
                                    <AppText type="title">Galeri</AppText>
                                    <div class="bottom-line" style="margin: auto; margin-top: 30px; margin-bottom: 30px;"></div>
                                </div>
                                <div class="display-flex margin margin-bottom-15">
                                    <div class="card-circle-gallery box-shadow">
                                        <img :src="icon" alt="icon" style="position: relative; width: 100%;">
                                    </div>
                                    <div class="card-circle-gallery box-shadow">
                                        <img :src="icon" alt="icon" style="position: relative; width: 100%;">
                                    </div>
                                    <div class="card-circle-gallery box-shadow">
                                        <img :src="icon" alt="icon" style="position: relative; width: 100%;">
                                    </div>
                                </div>
                                <div class="display-flex">
                                    <div class="card-circle-gallery box-shadow">
                                        <img :src="icon" alt="icon" style="position: relative; width: 100%;">
                                    </div>
                                    <div class="card-circle-gallery box-shadow">
                                        <img :src="icon" alt="icon" style="position: relative; width: 100%;">
                                    </div>
                                    <div class="card-circle-gallery box-shadow">
                                        <img :src="icon" alt="icon" style="position: relative; width: 100%;">
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </slide>

            <slide>
                <!-- kontak -->
                <div class="banner">
                    <div class="banner-container flex">
                        <!-- <div class="left column">
                            <div></div>
                            <div class="box-shadow" style="width: 300px; height: 300px; border-radius: 100%; background-color: #f5f5f5; overflow: hidden;">
                                <img :src="icon" alt="SAJI-IN" style="position: relative; width: 100%;">
                            </div>
                            <div></div>
                        </div> -->
                        <div class="right column" style="margin: auto;">
                            <div></div>
                            <div>
                                <div class="content-center">
                                    <AppText type="title">Kontak</AppText>
                                    <div class="bottom-line" style="margin: auto; margin-top: 30px; margin-bottom: 30px;"></div>
                                </div>
                                <div class="display-flex margin margin-bottom-15">
                                    <div class="card-circle-social box-shadow content-center">
                                        <i class="fab fa-2x fa-facebook" />
                                    </div>
                                    <div class="card-circle-social box-shadow content-center">
                                        <i class="fab fa-2x fa-instagram" />
                                    </div>
                                    <div class="card-circle-social box-shadow content-center">
                                        <i class="fab fa-2x fa-whatsapp" />
                                    </div>
                                    <div class="card-circle-social box-shadow content-center">
                                        <i class="fa fa-2x fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </slide>

        </carousel>

    </div>
</template>

<script>
import icon from '../assets/img/icon.png'
import AppWrapper from '@/components/modules/AppWrapper'
import AppButton from '@/components/modules/AppButton'
import AppText from '@/components/modules/AppText'
import AppCardGrid from '@/components/modules/AppCardGrid'
import AppCardList from '@/components/modules/AppCardList'
import { Carousel, Slide } from 'vue-carousel'

export default {
    components: {
        AppCardList,
        AppCardGrid,
        AppWrapper,
        AppButton,
        AppText,
        Carousel,
        Slide
    },
    methods: {
        onRegister () {
            console.log('REGISTER')
        }
    },
    data () {
        return {
            icon: icon,
            data: [
                '<div class="example-slide">Slide 1</div>',
                '<div class="example-slide">Slide 2</div>',
                '<div class="example-slide">Slide 3</div>',
            ],
            features: [
                {
                    id: 1,
                    title: 'In-app transfer system',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit!'
                },
                {
                    id: 2,
                    title: 'Track payment',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit!'
                },
                {
                    id: 3,
                    title: 'Fully secured',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit!'
                }
            ],
            benefit: [
                {
                    id: 1,
                    title: 'Lorem ipsum',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi labore dolores dolorem beatae!'
                },
                {
                    id: 2,
                    title: 'Lorem ipsum',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi labore dolores dolorem beatae!'
                },
                {
                    id: 3,
                    title: 'Lorem ipsum',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi labore dolores dolorem beatae!'
                }
            ],
            benefit2: [
                {
                    id: 4,
                    title: 'Lorem ipsum',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi labore dolores dolorem beatae!'
                }
            ]
        }
    }
}
</script>

<style lang="css" scoped>
.card-circle-social {
    position: relative;
    width: 100px; 
    height: 100px; 
    line-height: 110px; 
    border-radius: 100%; 
    background-color: #fff; 
    margin: auto; 
    overflow: hidden;
}
.card-circle-gallery {
    position: relative;
    width: 140px; 
    height: 140px; 
    margin: auto;
    border-radius: 10px; 
    background-color: #f0f0f0; 
    margin: auto; 
    overflow: hidden;
}
</style>