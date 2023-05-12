<template>
    <div>
        <RegisterChassisPilot></RegisterChassisPilot>
        <ReadDeleteChassisPilot></ReadDeleteChassisPilot>
    </div>    
</template>

<script lang="ts">
import RegisterChassisPilot from '@/components/RegisterChassisPilot.vue';
import ReadDeleteChassisPilot from '@/components/ReadDeleteChassisPilot.vue';
import globalData from '@/globals';

export default {

    data() {
        return {
            g: globalData,
        }
    },

    mounted() {
        if (this.g.userRole == "EDITOR") {
            return
        } else {
            this.$router.push('/items');
        }

    },

    components: {
        RegisterChassisPilot,
        ReadDeleteChassisPilot,
    }

}

</script>