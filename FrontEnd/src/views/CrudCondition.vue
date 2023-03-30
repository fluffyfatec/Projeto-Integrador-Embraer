
<template>
    <div>
        <RegisterCondition></RegisterCondition>
        <ReadUpdateDeleteCondition></ReadUpdateDeleteCondition>
    </div>    
</template>

<script lang="ts">
import RegisterCondition from '@/components/RegisterCondition.vue';
import ReadUpdateDeleteCondition from '@/components/ReadUpdateDeleteCondition.vue';

export default {
    components: {
        RegisterCondition,
        ReadUpdateDeleteCondition,
    }
}
</script>