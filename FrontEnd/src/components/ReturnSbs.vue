<template>
    <div v-if="searchTerm" class="container-card">
        <div v-for="sb in filteredItems" class="card" @click="divClickToSbs(sb); clickToReset()"><i class="fa-solid fa-plane-up"></i>{{ sb }}</div>
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
            this.sbs = response.data.map((item: String) => ({ service_bulletin_name: item.service_bulletin_name }));
        },

        divClickToSbs(sb: string) {
            this.$router.push({
             name: 'sbs-details',
                params: {
                    sb: sb
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
                .filter(item => String(item.service_bulletin_name).toLowerCase().includes(this.searchTerm.toLowerCase()))
                .map(item => item.service_bulletin_name);
        },
    },
}

</script>

<style scoped>
@import "../assets/base.css";

.container-card {
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    grid-gap: 10px;
    margin-left: 30px;
    margin-right: 15px;
    margin-top: 25px;
}

.card {
    background-color: var(--white);
    border-radius: 5px;
    padding: 20px;
}
</style>