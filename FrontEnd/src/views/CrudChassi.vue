<template>
    <div>
        <CadastrarChassi></CadastrarChassi>
        <ListarEditarChassi></ListarEditarChassi>
    </div>
</template>

<script lang="ts">
import CadastrarChassi from '@/components/CadastrarChassi.vue';
import ListarEditarChassi from '@/components/ListarEditarChassi.vue';

export default {
    components: {
        CadastrarChassi,
        ListarEditarChassi,
    }
}

</script>