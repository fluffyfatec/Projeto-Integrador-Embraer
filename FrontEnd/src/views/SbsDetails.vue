<template>
    <div>
        <ReturnSbs v-if="searchTerm"></ReturnSbs>
        <div v-else>
            <h1 class="title">Chassis of {{ $route.params.sb }}</h1>
            <div class="table-wrapper">
                <table cellspacing="0">
                    <tr class="table-header">
                        <th>Chassis</th>
                        <th>Applicable</th>
                        <th>Not Applicable</th>
                        <th>Incorporated</th>
                    </tr>
                    <tr v-for="plane in planes" :key="plane.id">
                        <td>{{ plane.id }}</td>
                        <td><input v-if="plane.status == 'APPLICABLE'" type="checkbox" onclick="return false;" checked readonly><input v-else type="checkbox" onclick="return false;" readonly></td>
                        <td><input v-if="plane.status != 'APPLICABLE' && sb.status != 'INCORP' && sb.status != 'INCORPORATED'" type="checkbox" onclick="return false;" checked readonly><input v-else type="checkbox" onclick="return false;" readonly></td>
                        <td><input v-if="plane.status == 'INCORP' || sb.status == 'INCORPORATED'" type="checkbox" onclick="return false;" checked readonly><input v-else type="checkbox" onclick="return false;" readonly></td>
                    </tr>
                </table>
            </div>    
        </div>    
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
            this.searchTerm = '';
            this.getPlanes();
        });
        
    },
    
    methods: {
        async getPlanes() {
            const sb = this.$route.params.sb;
            const part = this.$route.params.part;

            this.planes = (await axios.get('REQUISIÇÃO/' + sb + '/' + part)).data
        },
    },

    components: {
        ReturnSbs,
    },
}
</script>

<style scoped>
@import "../assets/base.css";

.title {
    color: var(--azul-principal);
    margin-left: 25px;
    font-weight: var(--medium);
}

.table-wrapper {
    padding-bottom: 50px;
}

table {
    background-color: white;
    border-radius: 15px;
    border-collapse: separate;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 20px;
    margin-bottom: 30px;
    overflow: hidden;
    box-shadow: 2px 2px 20px 5px var(--silver);
    width: 96%;
    
}

.table-header {
    background-color: var(--azul-principal);
    border-radius: 15px;
    
}

th {
    padding: 25px;
    color: var(--white);
}

td {
    padding: 10px;
    color: var(--azul-claro);
    text-align: center;
    vertical-align: middle;
}

input[type=checkbox] {
  -ms-transform: scale(1.5); /* IE */
  -moz-transform: scale(1.5); /* FF */
  -webkit-transform: scale(1.5); /* Safari and Chrome */
  -o-transform: scale(1.5); /* Opera */
  transform: scale(1.5);
  padding: 10px;
}


tr:nth-child(even)    { background-color: rgba(224, 224, 225, 0.5);}


/* --------------- Media Queries -------------------- */

/* Estilos para tablet */
@media only screen and (min-width: 768px) and (max-width: 1023px) {

    .title {
        margin-left: 25px;
    }

    .table-wrapper {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        max-width: 100vw;
        padding-bottom: 50px;
    }

    .table-wrapper::-webkit-scrollbar {
        display: none;
    }    

    table {
        margin-left: 25px;
        margin-right: 25px;
        margin-top: 20px;
        margin-bottom: 30px;
        box-shadow: 2px 2px 20px 5px var(--silver);
        width: 93%;
        
    }

    .table-header {
        
    }

    th {
        padding: 25px;
    }

    td {
        padding: 10px;
    }

    input[type=checkbox] {
        -ms-transform: scale(1.5); /* IE */
        -moz-transform: scale(1.5); /* FF */
        -webkit-transform: scale(1.5); /* Safari and Chrome */
        -o-transform: scale(1.5); /* Opera */
        transform: scale(1.5);
        padding: 10px;
    }

}

/* Estilos para mobile */
@media only screen and (max-width: 767px) {

    .title {
        margin-left: 25px;
    }

    .table-wrapper {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        max-width: 100vw;
        padding-bottom: 80px;
    }

    .table-wrapper::-webkit-scrollbar {
        display: none;
    }    

    table {
        margin-left: 15px;
        margin-right: 15px;
        margin-top: 20px;
        margin-bottom: 30px;
        box-shadow: 2px 2px 20px 5px var(--silver);
        width: 96%;
    }

    .table-header {
        
    }

    th {
        padding: 25px;
    }

    td {
        padding: 10px;
    }

    input[type=checkbox] {
        -ms-transform: scale(1); /* IE */
        -moz-transform: scale(1); /* FF */
        -webkit-transform: scale(1); /* Safari and Chrome */
        -o-transform: scale(1); /* Opera */
        transform: scale(1);
        padding: 10px;
    }

}    

</style>