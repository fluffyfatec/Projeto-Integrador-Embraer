<template>
    <div>
        <ReturnChassis v-if="searchTerm"></ReturnChassis>
        <table v-else>
            <tr>
                <th>Bulletin Service</th>
                <th>Applicable</th>
                <th>Not Applicable</th>
                <th>Incorporated</th>
            </tr>
            <tr v-for="sb in sbs" :key="sb.id">
                <td>{{ sb.id }}</td>
                <td>{{ sb.incorporated }}</td>
                <td>{{ sb.not_applicable }}</td>
                <td>{{ sb.applicable }}</td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { eventBus } from '@/main.js'
import ReturnChassis from '@/components/ReturnChassis.vue';

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

    created() {
        
        eventBus.$on('search-term-updated', (searchTerm: string) => {
            this.searchTerm = searchTerm
        });

        eventBus.$on('click-event-url', (searchTerm: string) => {
            this.searchTerm = ''
        });
        
    },
    
    methods: {
        async getSbs() {
            const chassis = this.$route.params.chassis;

            this.sbs = (await axios.get('REQUISIÇÃO/' + chassis)).data
        },

    },

    components: {
        ReturnChassis,
    },
}
</script>