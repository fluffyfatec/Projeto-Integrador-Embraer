<template>
    <div>
        <ReturnChassis v-if="searchTerm"></ReturnChassis>
        <div v-else>
            <h1 class="title">Items of chassis {{ $route.params.chassis }}</h1>
            <div class="container-info">
                <div class="incorporated">
                    <div class="h2-button">
                        <h2>Incorporated</h2>
                        <button class="show-button" @click="showLiIncorporated = !showLiIncorporated" :class="classBottonIncorporated">
                            <i :class="classIconIncorporated"></i>
                        </button>
                    </div>    
                    <li v-if="showLiIncorporated" v-for="item in items_incorporated">- {{ item.item }}</li>
                    <p v-if="items_incorporated.length === 0 ? showLiIncorporated : false">There is nothing here</p>
                </div>
                <div class="applicable">
                    <div class="h2-button">
                        <h2>Applicable</h2>
                        <button class="show-button" @click="showLiApplicable = !showLiApplicable" :class="classBottonApplicable">
                            <i :class="classIconApplicable"></i>
                        </button>
                    </div>    
                    <li v-if="showLiApplicable" v-for="item in items_applicable">- {{ item.item }}</li>
                    <p v-if="items_applicable.length === 0 ? showLiApplicable : false">There is nothing here</p>
                </div>
                <div class="not-applicable">
                    <div class="h2-button"> 
                        <h2>Not Applicable</h2>
                        <button class="show-button" @click="showLiNotApplicable = !showLiNotApplicable" :class="classBottonNotApplicable">
                            <i :class="classIconNotApplicable"></i>
                        </button>
                    </div>    
                    <li v-if="showLiNotApplicable" v-for="item in items_not_applicable">- {{ item.item }}</li>
                    <p v-if="items_not_applicable.length === 0 ? showLiNotApplicable : false">There is nothing here</p>
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
            showLiIncorporated: false,
            showLiApplicable: false,
            showLiNotApplicable: false,
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

            //this.items_incorporated = (await axios.get('REQUISIÇÃO/' + chassis)).data.items_incorporated;
            this.items_incorporated = (await axios.get('https://mocki.io/v1/21a80894-7469-4a55-a8d1-f187edcb2c95')).data;

            //this.items_applicable = (await axios.get('REQUISIÇÃO/' + chassis)).data.items_applicable;
            this.items_applicable = (await axios.get('https://mocki.io/v1/469e4b8a-df3b-4689-8f3b-439c6ed34ef4')).data;

            //this.items_not_applicable = (await axios.get('REQUISIÇÃO/' + chassis)).data.items_not_applicable;
            this.items_not_applicable = (await axios.get('https://mocki.io/v1/a95e7109-bde3-479e-87e1-e719481cf70a')).data;
        },

    },

    computed: {
        classBottonIncorporated() {
      return this.showLiIncorporated ? "button-active" : "button-inactive";
        },

        classIconIncorporated() {
        return this.showLiIncorporated ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-left";
        },

        classBottonApplicable() {
      return this.showLiApplicable ? "button-active" : "button-inactive";
        },

        classIconApplicable() {
        return this.showLiApplicable ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-left";
        },

        classBottonNotApplicable() {
      return this.showLiNotApplicable ? "button-active" : "button-inactive";
        },

        classIconNotApplicable() {
        return this.showLiNotApplicable ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-left";
        },
    },

    components: {
        ReturnChassis,
    }
}
</script>

<style scoped>
@import "../assets/base.css";

.title {
    color: var(--azul-principal);
    margin-left: 25px;
    font-weight: var(--medium);
}

.container-info {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 20px;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 10px;
    margin-bottom: 30px;
}

.h2-button {
    display: block;
}

h2 {
    margin-left: 25px;
    color: var(--azul-principal);
    float: left;
}

.show-button {
    float: right;
    margin-right: 40px;
    margin-top: 40px;
}

.button-inactive {
    padding: 0;
    border: none;
    background: none;
}

.button-inactive i {
    font-size: 30px;
    color: var(--azul-principal);
    font-weight: var(--semi-bold);
}
.button-active {
    padding: 0;
    border: none;
    background: none;
}

.button-active i {
    font-size: 30px;
    color: var(--azul-principal);
    font-weight: var(--semi-bold);
}

.incorporated {
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 2px 2px 20px 10px var(--silver);
    padding-bottom: 30px;
    display: grid;
    grid-template-columns: 100%;
}

.applicable {
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 2px 2px 20px 10px var(--silver);
    padding-bottom: 30px;
    display: grid;
    grid-template-columns: 100%;
}

.not-applicable {
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 2px 2px 20px 10px var(--silver);
    padding-bottom: 30px;
    display: grid;
    grid-template-columns: 100%;
}

li {
    margin-left: 25px;
    color: var(--azul-principal);
    font-weight: var(--light);
    list-style-type: none;
    padding-top: 5px;
}

p {
    text-align: center;
    font-size: 20pt;
    color: var(--silver);
    font-weight: var(--medium);
}

</style>