
<template>
    <div>
        <RegisterCondition></RegisterCondition>
        <ReadUpdateDeleteCondition></ReadUpdateDeleteCondition>
    </div>    
</template>

<script lang="ts">
import RegisterCondition from '@/components/RegisterCondition.vue';
import ReadUpdateDeleteCondition from '@/components/ReadUpdateDeleteCondition.vue';
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
        RegisterCondition,
        ReadUpdateDeleteCondition,
    }
}
</script>