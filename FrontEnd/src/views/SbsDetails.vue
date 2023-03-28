<template>
    <div>
        <ReturnSbs v-if="searchTerm"></ReturnSbs>
        <table v-else>
            <tr>
                <th>Bulletin Service</th>
                <th>Applicable</th>
                <th>Not Applicable</th>
                <th>Incorporated</th>
            </tr>
            <tr v-for="plane in planes" :key="plane.id">
                <td>{{ plane.id }}</td>
                <td>{{ plane.incorporated }}</td>
                <td>{{ plane.not_applicable }}</td>
                <td>{{ plane.applicable }}</td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { eventBus } from '@/main.js'
import ReturnSbs from '@/components/ReturnSbs.vue';

export default {
    
    data() {
        return {
            planes: [],
            searchTerm: '',
        }
    },

    mounted() {
        this.getPlanes();
    },

    created() {
        
        eventBus.$on('search-term-updated', (searchTerm: string) => {
            this.searchTerm = searchTerm
        });
        
        eventBus.$on('click-event-url', (searchTerm: string) => {
            this.searchTerm = ''
        });
        
    },
    
    methods: {
        async getPlanes() {
            const sb = this.$route.params.sb;

            this.planes = (await axios.get('REQUISIÇÃO/' + sb)).data
        },
    },

    components: {
        ReturnSbs,
    },
}
</script>