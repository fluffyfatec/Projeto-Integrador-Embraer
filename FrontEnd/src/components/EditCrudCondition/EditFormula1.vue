<template>
    <form @submit.prevent="EditionConfirm" class="center">
        <div class="align">
            <div class="chassis">
                <select class="select-chassis" v-model="conditionDTO.chassis">
                    <option class="select-placeholder" disabled :value="null">Chassis > then...</option>
                    <option v-for="c in chassis_options" :key="c.chassi_id">
                        {{ c.chassi_id }}
                    </option>
                </select>
            </div>
            <div class="clause">
                <h3>=</h3>
            </div>
            <div class="item">
                <input type="text" v-model="conditionDTO.item" placeholder="Name of item..." disabled>
            </div> 

            <div class="center">
                <button 
                v-if="conditionDTO.item !== null && conditionDTO.formulaDesc !== null && 
                    conditionDTO.chassis !== null"
                type="submit" class="submit">Submit</button>
                <button @click.prevent="EditionCancel">Cancel</button>
                <!-- <button @click.prevent="ItemDelete">Delete</button> -->
            </div>
        </div>
    </form>
</template>

<script lang="ts">
import axios from 'axios';
import { eventBus } from '@/main';

export default {

    props: ['itemId'],

    data() {
        return {

            edition: true,
            chassis_options: [],
            conditionDTO: {
                conditionId: null,
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
        this.getCondition();
        this.getChassis();
    },

    methods: {

        updateEditionValue() {
            eventBus.$emit('edition', this.edition);
        },

        updategetItems() {
            eventBus.$emit('update-getItems', this.edition);
        },

        async getCondition() {

            const response = await axios.get('http://localhost:8080/list/condition/' + this.itemId);
                    
            this.conditionDTO = response.data;
            
        },

        async getChassis() {
            const response = await axios.get('http://localhost:8080/chassi/list');
            this.chassis_options = response.data.map((item: String) => ({ chassi_id: item.chassi_id }));
        },

        async EditionConfirm() {

            await axios.post('http://localhost:8080/edit-condition', this.conditionDTO,  {
                    headers: {
                    'Content-Type': 'application/json'
                    }

            });

            this.edition = false;

            this.updateEditionValue();
        
        },

        EditionCancel() {
            this.edition = false;
            this.updateEditionValue();
        },

        async ItemDelete() {
            await axios.get('http://localhost:8080/delete/' + this.conditionDTO.conditionId + '/' + this.itemId);

            this.edition = false;

            this.updateEditionValue();
            this.updategetItems();

        },

        
    },
}

</script>
<style scoped>


@media only screen and (max-width: 767px) {

    h3{
        font-size: 90px;
        margin-top: 1px;
        margin-bottom: 1px;
    }

    .align{
        width: 70%;
    }

    input{
        width: 80%;
    }
}


</style>
