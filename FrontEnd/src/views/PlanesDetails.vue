<template>
    <div>
        <ReturnChassis v-if="searchTerm"></ReturnChassis>
        <div>
            <h1 class="title">SBs of chassis {{ $route.params.chassis }}</h1>
            <table cellspacing="0">
                <tr class="table-header">
                    <th>Service Bulletin</th>
                    <th>Applicable</th>
                    <th>Not Applicable</th>
                    <th>Incorporated</th>
                </tr>
                <tr v-for="sb in sbs" :key="sb.id">
                    <td>{{ sb.service_bulleti_name }}</td>
                    <td><input v-if="sb.status == 'APPLICABLE'" type="checkbox" onclick="return false;" checked readonly><input v-else type="checkbox" onclick="return false;" readonly></td>
                    <td><input v-if="sb.status != 'APPLICABLE' && sb.status != 'INCORP' && sb.status != 'INCORPORATED'" type="checkbox" onclick="return false;" checked readonly><input v-else type="checkbox" onclick="return false;" readonly></td>
                    <td><input v-if="sb.status == 'INCORP' || sb.status == 'INCORPORATED'" type="checkbox" onclick="return false;" checked readonly><input v-else type="checkbox" onclick="return false;" readonly></td>
                </tr>
            </table>
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
            this.searchTerm = '';
            this.getSbs();
        });
        
    },
    
    methods: {
        async getSbs() {
            const chassis = this.$route.params.chassis;

            const response = (await axios.get('http://localhost:8080/bulletins/listar/' + chassis));
            this.sbs = response.data.map((item: String) => ({ 
                service_bulleti_name: item.service_bulleti_name,
                status: item.status 
            }));
        },

    },

    components: {
        ReturnChassis,
    },
}
</script>


<style scoped>
@import "../assets/base.css";

.title {
    color: var(--azul-principal);
    margin-left: 25px;
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

</style>