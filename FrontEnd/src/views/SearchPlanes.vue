<template>
    <ReturnChassis></ReturnChassis>
</template>

<script lang="ts">
import ReturnChassis from '@/components/ReturnChassis.vue';
import globalData from '@/globals'

export default {

    data() {
        return {
            g: globalData,
        }
    },

    components: {
        ReturnChassis,
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