<template>
    <div>
        <RegisterChassisOwner></RegisterChassisOwner>
        <ReadDeleteChassisOwner></ReadDeleteChassisOwner>
    </div>    
</template>

<script lang="ts">
import RegisterChassisOwner from '@/components/RegisterChassisOwner.vue';
import ReadDeleteChassisOwner from '@/components/ReadDeleteChassisOwner.vue';

export default {

    components: {
        RegisterChassisOwner,
        ReadDeleteChassisOwner,
    }

}

</script>