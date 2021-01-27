<template>
    <div id="app">
        <Web />
    </div>
</template>

<script>
import Web from './components/layouts/Web'
import Admin from './components/layouts/Admin'

export default {
    name: 'App',
    components: {
        Web,
        Admin
    },
}

</script>