<template>
    <div>
        <RegisterChassisPilot></RegisterChassisPilot>
        <ReadDeleteChassisPilot></ReadDeleteChassisPilot>
    </div>    
</template>

<script lang="ts">
import RegisterChassisPilot from '@/components/RegisterChassisPilot.vue';
import ReadDeleteChassisPilot from '@/components/ReadDeleteChassisPilot.vue';

export default {

    components: {
        RegisterChassisPilot,
        ReadDeleteChassisPilot,
    }

}

</script>