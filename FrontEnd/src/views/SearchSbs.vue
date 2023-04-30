<template>
    <ReturnSbs></ReturnSbs>
</template>

<script lang="ts">
import ReturnSbs from '@/components/ReturnSbs.vue';
import globalData from '@/globals'

export default {

    data() {
        return {
            g: globalData,
        }
    },

    components: {
        ReturnSbs,
    },

    mounted() {
        if (this.g.userRole == "EDITOR" || this.g.userRole == "ADMIN") {
            return
        } else {
            this.$router.push('/items');
        }

    },

}
</script>