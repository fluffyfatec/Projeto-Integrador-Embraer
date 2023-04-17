<template>
    <div>
        <h1>Register of Item</h1>
        <select class="select-condit-formula" v-model="condition_formula" placeholder="Select a formula...">
            <option>chassis ></option>
            <option>sb1</option>
            <option>(sb1 OR sb2) AND sb3</option>
            <option>sb1 AND sb2</option>        
        </select>
        <Formula1 v-if="condition_formula === 'chassis >'"></Formula1>
        <Formula2 v-else-if="condition_formula === 'sb1'"></Formula2>
        <Formula3 v-else-if="condition_formula === '(sb1 OR sb2) AND sb3'"></Formula3>
        <Formula4 v-else-if="condition_formula === 'sb1 AND sb2'"></Formula4>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import Formula1 from './formulas/Formula1.vue';
import Formula2 from './formulas/Formula2.vue';
import Formula3 from './formulas/Formula3.vue';
import Formula4 from './formulas/Formula4.vue';

export default {
    data() {

        return {
            condition_formula: '',
        }

    },

    mounted() {
    
    },

    methods: {


    },

    components: {
      Formula1, 
      Formula2,
      Formula3,
      Formula4,
    },

}
    
</script>

<style scoped>

</style>
