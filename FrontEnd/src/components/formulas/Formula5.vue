<template>
    <form @submit.prevent="saveConditionAndItem" class="center">
        <div class="align">
            <div class="condition-or">
                <div class="sb1">
                    <select class="select-sb1" v-model="conditionDTO.sb1">
                        <option class="select-placeholder" disabled :value="null">Choose sb1...</option>
                        <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                            {{ sb.sb_name }}
                        </option>
                    </select>
                    <select v-if="conditionDTO.sb1 !== null" class="select-sb-part" 
                    v-model="conditionDTO.sb1_part">
                        <option class="select-placeholder" disabled :value="null">Part</option>
                        <option v-for="part in filteredParts1" :key="part.part">
                            {{ part.part }}
                        </option>
                    </select>
                </div>
                <div class="clause">
                    <h3>OR</h3>
                </div>
                <div class="sb2">
                    <select class="select-sb2" v-model="conditionDTO.sb2">
                        <option class="select-placeholder" disabled :value="null">Choose sb2...</option>
                        <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                            {{ sb.sb_name }}
                        </option>
                    </select>
                    <select v-if="conditionDTO.sb2 !== null" class="select-sb-part" 
                    v-model="conditionDTO.sb2_part">
                        <option class="select-placeholder" disabled :value="null">Part</option>
                        <option v-for="part in filteredParts2" :key="part.part">
                            {{ part.part }}
                        </option>
                    </select>    
                </div>    
            </div>
            <div class="clause">
                <h3>AND</h3>
            </div>    
            <div class="item">
                <input type="text" v-model="conditionDTO.item" placeholder="Name of item...">
            </div>

            <div class="center">
                <button v-if="conditionDTO.item !== null && conditionDTO.item.length > 4  && 
                            conditionDTO.formulaDesc !== null &&
                            conditionDTO.sb1 !== null && conditionDTO.sb1_part !== null &&
                            conditionDTO.sb2 !== null && conditionDTO.sb2_part !== null" 
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
            sbs_options: [],
            filteredParts1: [],
            filteredParts2: [],
            conditionDTO: {
                item: null,
                formulaDesc: 'sb1 OR sb2',
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
        this.getSbs();
    },

    methods: {

        updategetItems() {
            eventBus.$emit('update-getItems', this.edition);
        },

        async saveConditionAndItem() {

            if (this.conditionDTO.sb1_part === 'UNIQUE') { 
                this.conditionDTO.sb1_part = 'UNICO';
            };

            if (this.conditionDTO.sb2_part === 'UNIQUE') { 
                this.conditionDTO.sb2_part = 'UNICO';
            };

            await axios.post('http://localhost:8080/register-condition', this.conditionDTO, {
                    headers: {
                    'Content-Type': 'application/json'
                    }

                });

            this.updategetItems();    

            this.conditionDTO.sb1 = null;
            this.conditionDTO.sb1_part = null;
            this.conditionDTO.sb2 = null;
            this.conditionDTO.sb2_part = null;
            this.conditionDTO.item = null;
                
        },

        async getSbs() {
            const response = await axios.get('http://localhost:8080/bulletin/list/all');
            this.sbs_options = response.data.map((item: String) => ({ 
                sb_name: item.service_bulletin_name, 
                part: item.service_bulletin_part === 'UNICO' ? 'UNIQUE' : item.service_bulletin_part }));
        },

        filteredPartsBySb1() {
            this.filteredParts1 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb1);
        },

        filteredPartsBySb2() {
            this.filteredParts2 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb2);
        },

    },

    watch: {

        'conditionDTO.sb1': function () {
        this.filteredPartsBySb1();
        },

        'conditionDTO.sb2': function () {
        this.filteredPartsBySb2();
        },

    },



}

</script>
<style scoped>
.condition-or{
    border: 2px solid var(--azul-principal);
    border-radius: 5px;
    padding: 1rem;
}

h3{
    display: flex;
    justify-content: center;
    font-size: 4rem;
    color: var(--azul-principal);
}

</style>