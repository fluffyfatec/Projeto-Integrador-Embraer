<template class = "teste">
    <form @submit.prevent="saveConditionAndItem" class="center">
    <div class = "align">
        <div class="chassis">
            <select class="select-chassis" v-model="conditionDTO.chassis">
                <option class="select-placeholder" disabled hidden :value="null">Chassis > then...</option>
                <option v-for="c in chassis_options" :key="c.chassi_id">
                    {{ c.chassi_id }}
                </option>
            </select>
        </div>
        <div class="clause">
            <h3>=</h3>
        </div>
        <div class="item">
            <input type="text" v-model="conditionDTO.item" placeholder="Name of item...">
        </div>    
        <div class="center">
            <button 
            v-if="conditionDTO.item !== null && conditionDTO.item.length > 4  && conditionDTO.formulaDesc !== null && 
                conditionDTO.chassis !== null"
            type="submit" class="submit">Submit</button>
        </div>
    </div>
    </form>
</template>

<script lang="ts">
import axios from 'axios';
import { eventBus } from '@/main';

export default {
    data() {
        return {

            edition: false,
            chassis_options: [],
            conditionDTO: {
                item: null,
                formulaDesc: 'chassis >',
                chassis: null,
                sb1: null,
                sb1_part: null,
                sb2: null,
                sb2_part: null,
                sb3: null,
                sb3_part: null
            },

        }
    },

    mounted() {
        this.getChassis();
    },

    methods: {

        updategetItems() {
            eventBus.$emit('update-getItems', this.edition);
        },

        async saveConditionAndItem() {

            await axios.post('http://localhost:8080/register-condition', this.conditionDTO, {
                    headers: {
                    'Content-Type': 'application/json'
                    }

                });

            this.updategetItems();    

            this.conditionDTO.chassis = null;
            this.conditionDTO.item = null;
                
        },

        async getChassis() {
            const response = await axios.get('http://localhost:8080/chassi/list');
            this.chassis_options = response.data.map((item: String) => ({ chassi_id: item.chassi_id }));
        },
        
    },
}

</script>
<style scoped>

h3{
    font-size: 4rem;
    margin-left: 47%;
    color: var(--azul-principal);
}
.chassis{
    display: flex;
    justify-content: center;
}
.select-chassis{
    font-size: x-large;
}

@media only screen and (max-width: 767px) {
    .align{
        width: 80%;
    }

    h3{
        margin-left: 45%;
    }
    .item{
        display: flex;
        justify-content: center;
    }

    input{ 
        width: 90%;
    }

}
</style>