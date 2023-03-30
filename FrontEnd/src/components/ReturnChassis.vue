<template>
    <div v-if="searchTerm" class="container-card">
        <div v-if="$route.meta.itemsDetails" v-for="c in filteredItems" class="card" @click="divClickToItems(c); clickToReset()"><i class="fa-solid fa-plane-up"></i>Chassi nº{{ c }}</div>
        <div v-if="$route.meta.planesDetails" v-for="c in filteredItems" class="card" @click="divClickToPlanes(c); clickToReset()"><i class="fa-solid fa-plane-up"></i>Chassi nº{{ c }}</div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { eventBus } from '@/main.js'

export default {

    data() {
        return {
            chassis: [],
            searchTerm: '',
        }
    },

    mounted() {
        this.getChassis();

    },

    methods: {

        async getChassis() {
            const response = await axios.get('http://localhost:8080/chassi/list');
            this.chassis = response.data.map((item: String) => ({ chassi_id: item.chassi_id }));
        },

        divClickToItems(chassis: string) {

            this.$router.push({
             name: 'items-details',
                params: {
                    chassis: chassis
                }
            });
        },

        divClickToPlanes(chassis: string) {

            this.$router.push({
             name: 'planes-details',
                params: {
                    chassis: chassis
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
            return this.chassis
                .filter(item => String(item.chassi_id).toLowerCase().includes(this.searchTerm.toLowerCase()))
                .map(item => item.chassi_id);
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