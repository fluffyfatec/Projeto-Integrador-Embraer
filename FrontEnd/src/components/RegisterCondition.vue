<template>
    <div>
        <h1 class="title">Register of Item</h1>
        <div class="select">
            <select class="select-condit-formula" v-model="condition_formula">
                <option value="" disabled selected hidden>Select a formula...</option>
                <option>chassis ></option>
                <option>sb1</option>
                <option>(sb1 OR sb2) AND sb3</option>
                <option>sb1 AND sb2</option>
                <option>sb1 OR sb2</option>
                <option>others</option>
            </select>
        </div>
        <Formula1 v-if="condition_formula === 'chassis >'"></Formula1>
        <Formula2 v-else-if="condition_formula === 'sb1'"></Formula2>
        <Formula3 v-else-if="condition_formula === '(sb1 OR sb2) AND sb3'"></Formula3>
        <Formula4 v-else-if="condition_formula === 'sb1 AND sb2'"></Formula4>
        <Formula5 v-else-if="condition_formula === 'sb1 OR sb2'"></Formula5>
        <FormulaX v-else-if="condition_formula === 'others'"></FormulaX>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import Formula1 from './formulas/Formula1.vue';
import Formula2 from './formulas/Formula2.vue';
import Formula3 from './formulas/Formula3.vue';
import Formula4 from './formulas/Formula4.vue';
import Formula5 from './formulas/Formula5.vue';
import FormulaX from './formulas/FormulaX.vue';


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
    Formula5,
    FormulaX,
},

}
    
</script>

<style scoped>
.title{
    color: var(--azul-principal);
    margin-left: 25px;
    font-weight: var(--medium);
}
.select{
    display: flex;
    justify-content: center;
    border-color: var(--azul-claro-light);
}
select{
    border-color: var(--azul-claro-light);
    border-radius: 5px;
    width: 25rem;
    height: 2rem;
    font-size: x-large;
}
select:focus-within .dropdown-toggle {
  border: 2px solid var(--azul-principal);
}

@media only screen and (max-width: 767px) {
    select{
        width: 90%;
    }
}

</style>
