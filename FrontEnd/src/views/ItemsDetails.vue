<template>
    <div>
        <ReturnChassis v-if="searchTerm"></ReturnChassis>
        <div v-else class="container-info">
            <div class="incorporated">
                <h1>Incorporated</h1>
                <li v-for="item in items_incorporated">{{ item }}</li>
            </div>
            <div class="applicable">
                <h1>Applicable</h1>
                <li v-for="item in items_applicable">{{ item }}</li>
            </div>
            <div class="not-applicable">
                <h1>Not Applicable</h1>
                <li v-for="item in items_not_applicable">{{ item }}</li>
            </div>
        </div>    
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { eventBus } from '@/main.js'
import ReturnChassis from '@/components/ReturnChassis.vue';

export default {
    
    data() {
        return {
            items_incorporated: [],
            items_applicable: [],
            items_not_applicable: [],
            searchTerm: '',
        }
    },

    mounted() {
        this.getItems();
    },

    created() {
        
        eventBus.$on('search-term-updated', (searchTerm: string) => {
            this.searchTerm = searchTerm
        });
        
        eventBus.$on('click-event-url', (searchTerm: string) => {
            this.searchTerm = '';
            this.getItems();
        });
        
    },
    
    methods: {
        async getItems() {
            const chassis = this.$route.params.chassis;

            this.items_incorporated = (await axios.get('REQUISIÇÃO/' + chassis)).data.items_incorporated;

            this.items_applicable = (await axios.get('REQUISIÇÃO/' + chassis)).data.items_applicable;

            this.items_not_applicable = (await axios.get('REQUISIÇÃO/' + chassis)).data.items_not_applicable;
        },

    },

    components: {
        ReturnChassis,
    }
}
</script>