<template>
    <div v-if="searchTerm" class="container-card">
        <div v-for="sb in filteredItems" class="card" @click="divClickToSbs(sb)"><i class="fa-solid fa-plane-up"></i>{{ c }}</div>
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
            this.sbs = (await axios.get('REQUISIÇÃO')).data;
            console.log(this.sbs);
        },

        divClickToSbs(sb: string) {
            this.$router.push({
             name: 'sbs-details',
                params: {
                    sb: sb
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
             return this.sbs.map(item => item.sb_id).filter(result => result.toLowerCase().includes(this.searchTerm.toLowerCase()))
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