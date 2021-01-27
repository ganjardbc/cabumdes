<template>
    <div class="main-screen" style="padding-top: 50px;">
        <AppWrapper :isColumn="true" class="card border-full border-radius" style="width: 350px; margin: auto;">
            <div style="width: 100%;">
                <div style="
                    position: relative;
                    width: 120px;
                    height: 120px;
                    margin: auto;
                    margin-bottom: 30px;
                ">
                    <img :src="logo" alt="SAJI-IN" style="position: relative; width: 100%; margin: auto;">
                </div>
                <AppWrapper style="margin-bottom: 20px;" type="space">
                    <AppText type="subtitle">Sign-In</AppText>
                    <AppText routeName="Register" type="content" style="margin-top: 8px;">Create account ?</AppText>
                </AppWrapper>
                <div style="width: 100%; margin-bottom: 10px;">
                    <AppForm styleType="sekunder" title="Email or username" placeholder="email or username" />
                </div>
                <div style="width: 100%; margin-bottom: 30px;">
                    <AppForm styleType="sekunder" title="Password" placeholder="your password" type="password" />
                </div>
                <AppWrapper style="margin-bottom: 20px;" type="center">
                    <AppButton 
                        style="width: 100%; text-align: center;"
                        title="Check Account"
                        type="main"
                        :onPress="onRegister"
                    />
                </AppWrapper>
                <AppWrapper style="margin-bottom: 10px;" type="center">
                    <AppText routeName="Home" type="bold">Forgot Password</AppText>
                </AppWrapper>
            </div>
        </AppWrapper>
    </div>
</template>

<script>
import logo from '../../../assets/img/icon.png'
import AppWrapper from '@/components/modules/AppWrapper'
import AppButton from '@/components/modules/AppButton'
import AppForm from '@/components/modules/AppForm'
import AppText from '@/components/modules/AppText'

export default {
    components: {
        AppWrapper,
        AppButton,
        AppText,
        AppForm
    },
    data () {
        return {
            logo: logo
        }
    },
    methods: {
        onRegister () {
            console.log('REGISTER')
        }
    },
}

</script>