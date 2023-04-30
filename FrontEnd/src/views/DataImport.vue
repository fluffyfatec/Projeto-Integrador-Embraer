<template>
    <div>
        <AttachFile></AttachFile>
    </div>
</template>

<script lang="js">
import AttachFile from '@/components/AttachFile.vue';
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
        AttachFile,
    },
}
</script>