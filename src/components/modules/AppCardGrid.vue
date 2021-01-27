<template>
    <AppWrapper id="AppCardGrid">
        <AppWrapper v-for="(dt, index) in datas" :key="index" :isColumn="true" class="card content-center">
            <div>
                <div style="margin-bottom: 30px;">
                    <div class="box-shadow" style="width: 160px; height: 160px; border-radius: 100%; background-color: #f5f5f5; margin: auto; overflow: hidden;">
                        <img :src="icon" alt="icon" style="position: relative; width: 100%;">
                    </div>
                </div>
                <AppText type="bold">{{ dt.title }}</AppText>
                <AppText style="width: 85%; margin: auto; margin-top: 15px;">{{ dt.description }}</AppText>
            </div>
        </AppWrapper>
    </AppWrapper>
</template>

<script>
import AppWrapper from './AppWrapper'
import AppButton from './AppButton'
import AppText from './AppText'
import icon from '../../assets/img/icon.png'

export default {
    name: 'AppCardGrid',
    components: {
        AppWrapper,
        AppButton,
        AppText
    },
    props: {
        data: {
            required: true
        }
    },
    mounted() {
        console.log('data', this.data)
    },
    data () {
        return {
            icon: icon,
            datas: this.data
        }
    } 
}
</script>