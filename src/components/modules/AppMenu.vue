<template>
    <div id="AppMenu">
        <ul class="navbar">
            <li v-for="(dt, index) in datas" :key="index">
                {{ dt.label }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AppMenu',
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
            datas: this.data
        }
    } 
}
</script>