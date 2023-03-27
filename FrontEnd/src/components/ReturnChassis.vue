<template>
    <div v-if="searchTerm" class="container-card">
        <div v-if="$route.meta.ItemsDetails" v-for="c in filteredItems" class="card" @click="divClickToItems(c)"><i class="fa-solid fa-plane-up"></i>Chassi nº{{ c }}</div>
        <div v-if="$route.meta.SbsDetails" v-for="c in filteredItems" class="card" @click="divClickToSbs(c)"><i class="fa-solid fa-plane-up"></i>Chassi nº{{ c }}</div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { eventBus } from '@/main.js'

export default {

    data() {
        return {
            chassis: ['000047', '000052', '000067', '000075'],
            searchTerm: '',
        }
    },

    mounted() {
        //this.getChassis();

    },

    methods: {

        async getChassis() {
            this.chassis = await (await axios.get('REQUISIÇÃO')).data
        },

        divClickToItems(chassis: string) {
            this.$router.push({
             name: 'items-details',
                params: {
                    chassis: chassis
                }
            });
        },

        divClickToSbs(chassis: string) {
            this.$router.push({
             name: 'sbs-details',
                params: {
                    chassis: chassis
                }
            });
        },
    },

    created() {
        eventBus.$on('search-term-updated', (searchTerm: string) => {
            this.searchTerm = searchTerm
        })
    },


    computed: {
        filteredItems() {
             return this.chassis.filter(result => result.toLowerCase().includes(this.searchTerm.toLowerCase()))
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