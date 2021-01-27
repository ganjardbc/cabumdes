<template>
    <div class="main-screen">
        <div class="banner">
            <AppWrapper class="banner-container">
                <AppWrapper :isColumn="true" type="center" style="width: 100%; height: 500px;">
                    <div>
                        <AppText type="title">Book a food is</AppText>
                        <AppText type="title">Easier then before</AppText>
                        <div class="bottom-line"></div>
                        <AppText style="width: 80%; margin-bottom: 40px;">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi labore dolores dolorem beatae. Dolorum tempore nam temporibus!
                        </AppText>
                        <AppButton 
                            title="Try it for free"
                            type="main"
                            style="margin-left: 0; margin-right: 5px;"
                            routeName="Login"
                        />
                        <AppButton 
                            title="Learn more"
                            type="sekunder"
                            :onPress="onRegister"
                        />
                    </div>
                </AppWrapper>
                <div style="background-color: #fff; width: 120%; height: 500px; text-align: right;">
                    <img :src="icon" alt="SAJI-IN" style="position: relative; width: 80%; margin: auto; margin-top: 10px;">
                </div>
            </AppWrapper>
        </div>

        <AppWrapper :isColumn="true" type="center" class="self-padding">
            <div class="space space-center">
                <AppText type="subtitle">How it works</AppText>
                <AppWrapper type="center">
                    <div class="bottom-line" style="margin-top: 15px; margin-bottom: 15px;"></div>
                </AppWrapper>
                <AppText>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi labore dolores dolorem beatae.
                </AppText>
            </div>
            <AppCardGrid :data="features" />
        </AppWrapper>

        
        <AppWrapper type="space" class="self-padding">
            <AppWrapper :isColumn="true" type="center" style="width: 100%; height: 300px;">
                <div style="width: 80%;">
                    <div class="box-shadow border-radius" style="background-color: #ccc; width: 100%; height: 250px; text-align: left;">
                        <!-- <img :src="'/'" style="position: relative; width: 100%; margin: auto;"> -->
                    </div>
                </div>
            </AppWrapper>
            <AppWrapper :isColumn="true" type="center" style="width: 100%; height: 300px;">
                <div style="width: 80%;">
                    <AppText type="subtitle">Realtime book balance check</AppText>
                    <div class="bottom-line" style="margin-top: 15px; margin-bottom: 15px;"></div>
                    <AppText>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi labore dolores dolorem beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </AppText>
                    <div style="margin-top: 30px;">
                        <AppButton
                            routeName="Register" 
                            style="margin: 0;"
                            title="Register your restaurant now !"
                            type="sekunder"
                        />
                    </div>
                </div>
            </AppWrapper>
        </AppWrapper>

        <AppWrapper :isColumn="true" type="center" class="self-padding">
            <div class="space space-center">
                <AppText type="subtitle">Get benefit choosing saji-in</AppText>
                <AppWrapper type="center">
                    <div class="bottom-line" style="margin-top: 15px; margin-bottom: 15px;"></div>
                </AppWrapper>
                <AppText>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi labore dolores dolorem beatae.
                </AppText>
            </div>
            <AppCardList :data="benefit" />
            <AppCardList :data="benefit2" />
        </AppWrapper>

        <AppWrapper :isColumn="true" type="center" class="self-padding">
            <div class="space space-center">
                <AppText type="subtitle">Providing our service throughout the country</AppText>
                <AppWrapper type="center">
                    <div class="bottom-line" style="margin-top: 15px; margin-bottom: 15px;"></div>
                </AppWrapper>
                <AppText>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi labore dolores dolorem beatae.
                </AppText>
            </div>
            <div class="box-shadow border-radius" style="width: 100%; height: 350px; background-color: #ccc; margin-bottom: 20px;"></div>
            <div class="space space-center">
                <AppWrapper>
                    <AppWrapper :isColumn="true" class="content-center">
                        <AppText type="title">150+</AppText>
                        <AppText style="margin-top: 10px;">Restaurans</AppText>
                    </AppWrapper>
                    <AppWrapper :isColumn="true" class="content-center">
                        <AppText type="title">3440+</AppText>
                        <AppText style="margin-top: 10px;">Orders</AppText>
                    </AppWrapper>
                </AppWrapper>
                <AppText type="normal" style="margin-top: 30px;">We're currently working to transfer and exchange money to the people</AppText>
                <div style="margin-top: 30px;">
                    <AppButton
                        routeName="Register" 
                        style="margin: 0;"
                        title="Register your restaurant now !"
                        type="sekunder"
                    />
                </div>
            </div>
        </AppWrapper>

        <!-- <AppWrapper type="space" class="self-padding">
            <AppWrapper :isColumn="true" style="width: 350px; margin-top: 30px;">
                <div style="width: 80%;">
                    <AppText type="subtitle">People are</AppText>
                    <AppText type="subtitle">Saying</AppText>
                    <AppText type="subtitle">About us</AppText>
                    <div class="bottom-line" style="margin-top: 15px; margin-bottom: 15px;"></div>
                    <AppText>
                        Lorem ipsum dolor sit !
                    </AppText>
                    <AppButton 
                        style="margin-top: 30px;"
                        title="See all"
                        type="sekunder"
                        :onPress="onRegister"
                    />
                </div>
            </AppWrapper>
            <AppWrapper :isColumn="true" type="center" style="width: 100%; height: 400px;">
                <AppWrapper>
                    <div style="width: 100%; margin: 0 15px;">
                        <div class="box-shadow border-radius" style="background-color: #ccc; width: 100%; height: 350px;">
                            <img :src="'/'" style="position: relative; width: 100%; margin: auto;">
                        </div>
                    </div>
                    <div style="width: 100%; margin: 0 15px;">
                        <div class="box-shadow border-radius" style="background-color: #ccc; width: 100%; height: 350px;">
                            <img :src="'/'" style="position: relative; width: 100%; margin: auto;">
                        </div>
                    </div>
                </AppWrapper>
            </AppWrapper>
        </AppWrapper> -->
    </div>
</template>

<script>
import icon from '../assets/img/icon.png'
import AppWrapper from '@/components/modules/AppWrapper'
import AppButton from '@/components/modules/AppButton'
import AppText from '@/components/modules/AppText'
import AppCardGrid from '@/components/modules/AppCardGrid'
import AppCardList from '@/components/modules/AppCardList'

export default {
    components: {
        AppCardList,
        AppCardGrid,
        AppWrapper,
        AppButton,
        AppText
    },
    methods: {
        onRegister () {
            console.log('REGISTER')
        }
    },
    data () {
        return {
            icon: icon,
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
                    title: 'Bank deposit',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi labore dolores dolorem beatae!'
                },
                {
                    id: 2,
                    title: 'Mobile recharge',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi labore dolores dolorem beatae!'
                }
            ],
            benefit2: [
                {
                    id: 3,
                    title: 'Fast transfer',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi labore dolores dolorem beatae!'
                },
                {
                    id: 4,
                    title: 'Easy to send money',
                    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi labore dolores dolorem beatae!'
                }
            ]
        }
    }
}
</script>

<style lang="css" scoped>
.self-padding {
    padding-top: 80px;
    padding-bottom: 80px;
}
</style>