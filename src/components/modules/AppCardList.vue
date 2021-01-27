<template>
    <AppWrapper id="AppCardList">
        <AppWrapper v-for="(dt, index) in datas" :key="index" class="card">
            <div style="width: 120px;">
                <div class="box-shadow" style="width: 60px; height: 60px; border-radius: 100%; background-color: #f5f5f5; overflow: hidden;">
                    <img :src="icon" alt="icon" style="position: relative; width: 100%;">
                </div>
            </div>
            <AppWrapper :isColumn="true" type="left" style="width: 100%;">
                <div style="width: 90%; padding-top: 20px;">
                    <AppText type="bold">{{ dt.title }}</AppText>
                    <AppText style="margin-top: 5px;">{{ dt.description }}</AppText>
                </div>
            </AppWrapper>
        </AppWrapper>
    </AppWrapper>
</template>

<script>
import AppWrapper from './AppWrapper'
import AppButton from './AppButton'
import AppText from './AppText'
import icon from '../../assets/img/icon.png'

export default {
    name: 'AppCardList',
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