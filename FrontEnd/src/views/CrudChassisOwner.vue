<template>
    <div>
        <RegisterChassisOwner></RegisterChassisOwner>
        <ReadDeleteChassisOwner></ReadDeleteChassisOwner>
    </div>    
</template>

<script lang="ts">
import RegisterChassisOwner from '@/components/RegisterChassisOwner.vue';
import ReadDeleteChassisOwner from '@/components/ReadDeleteChassisOwner.vue';
import globalData from '@/globals';

export default {

    data() {
        return {
            g: globalData,
        }
    },

    mounted() {
        if (this.g.userRole == "ADMIN") {
            return
        } else {
            this.$router.push('/items');
        }

    },

    components: {
        RegisterChassisOwner,
        ReadDeleteChassisOwner,
    }

}

</script>