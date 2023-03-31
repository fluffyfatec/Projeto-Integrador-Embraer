<template>
    <div>
        <ReturnChassis v-if="searchTerm"></ReturnChassis>
        <div v-else>
            <h1 class="title">Items of chassis {{ $route.params.chassis }}</h1>
            <div class="container-info">
                <div class="incorporated">
                    <h2>Incorporated</h2>
                    <li v-for="item in items_incorporated">{{ item }}</li>
                    <p v-if="!items_incorporated">There is nothing here</p>
                </div>
                <div class="applicable">
                    <h2>Applicable</h2>
                    <li v-for="item in items_applicable">{{ item }}</li>
                    <p v-if="!items_applicable">There is nothing here</p>
                </div>
                <div class="not-applicable">
                    <h2>Not Applicable</h2>
                    <li v-for="item in items_not_applicable">{{ item }}</li>
                    <p v-if="!items_not_applicable">There is nothing here</p>
                </div>
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

<style scoped>
.title {
    color: var(--azul-principal);
    margin-left: 25px;
    font-weight: var(--medium);
}

.container-info {

}

.incorporated {

}

.applicable {

}

.not-applicable {

}

li {

}

p {

}

</style>