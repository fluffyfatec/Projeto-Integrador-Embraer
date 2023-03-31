<template>
    <div>
        <h1>SB Search</h1>
        <p v-if="!searchTerm">No SBs sought...</p>
        <div v-if="searchTerm" class="container-card">
            <div v-for="sb in filteredItems" class="card" 
            @click="divClickToSbs(sb.service_bulletin_name, sb.part); clickToReset()">
                <i class="fa-solid fa-toolbox"></i>{{ sb.service_bulletin_name }} <b>{{ sb.part }}</b>
            </div>
        </div>
    </div>    
</template>

<script lang="ts">
import axios from 'axios';
import { eventBus } from '@/main.js'

export default {

    data() {
        return {
            sbs: [],
            searchTerm: '',
        }
    },

    mounted() {
        this.getSbs();

    },

    methods: {

        async getSbs() {
            const response = await axios.get('http://localhost:8080/bulletin/list/all');
            this.sbs = response.data.map((item: String) => ({ service_bulletin_name: item.service_bulletin_name, part: item.part }));
        },

        divClickToSbs(sb: string, part: string) {
            this.$router.push({
             name: 'sbs-details',
                params: {
                    sb: sb,
                    part: part
                }
            });
        },

        clickToReset() {
        
        eventBus.$emit('click-event-url', this.searchTerm)
        },


    },

    created() {
        eventBus.$on('search-term-updated', (searchTerm: string) => {
            this.searchTerm = searchTerm
        })
    },


    computed: {
        filteredItems() {
            return this.sbs
            .filter(item => 
                String(item.service_bulletin_name).toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                String(item.part).toLowerCase().includes(this.searchTerm.toLowerCase())
            )
            .map(item => ({ service_bulletin_name: item.service_bulletin_name, part: item.part }));
        },
    },
}

</script>

<style scoped>
@import "../assets/base.css";

h1 {
    color: var(--azul-principal);
    margin-left: 25px;
    font-weight: var(--medium);
}

p {
    color: var(--silver);
    font-size: 32px;
    text-align: center;
    padding: 25px;
}

.container-card {
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    grid-gap: 10px;
    margin-left: 30px;
    margin-right: 15px;
    margin-top: 25px;
    margin-bottom: 25px;
}

.card {
    background-color: var(--white);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    color: var(--azul-principal);
    cursor: pointer;
    font-weight: var(--light);
    box-shadow: 2px 2px 20px 5px var(--silver);
}

i {
    padding-right: 15px;
    color: var(--silver);
    font-size: 40px;
}
</style>