<template>
    <div>
        <ReturnChassis v-if="searchTerm"></ReturnChassis>
        <div v-else>
            <h1 class="title">SBs of chassis {{ $route.params.chassis }}</h1>
            <input type="checkbox" v-model="ApplicableFilter">
            <label>Applicable</label>
            <input type="checkbox" v-model="NotApplicableFilter">
            <label>Not Applicable</label>
            <input type="checkbox" v-model="IncorporatedFilter">
            <label>Incorporated</label>
            <div class="table-wrapper">
                <table cellspacing="0">
                    <tr class="table-header">
                        <th>Service Bulletin</th>
                        <th>Part</th>
                        <th>Applicable</th>
                        <th>Not Applicable</th>
                        <th>Incorporated</th>
                    </tr>
                    <tr v-for="sb in sbs" :key="sb.service_bulleti_name + sb.part">
                        <td>{{ sb.service_bulleti_name }}</td>
                        <td>{{ sb.part }}</td>
                        <td><input v-if="sb.status == 'APPLICABLE'" type="checkbox" onclick="return false;" checked readonly><input v-else type="checkbox" onclick="return false;" readonly></td>
                        <td><input v-if="sb.status != 'APPLICABLE' && sb.status != 'INCORP' && sb.status != 'INCORPORATED' && sb.status != 'INCOPORATED'" type="checkbox" onclick="return false;" checked readonly><input v-else type="checkbox" onclick="return false;" readonly></td>
                        <td><input v-if="sb.status == 'INCORP' || sb.status == 'INCORPORATED' || sb.status == 'INCOPORATED'" type="checkbox" onclick="return false;" checked readonly><input v-else type="checkbox" onclick="return false;" readonly></td>
                    </tr>
                </table>
            </div>    
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { eventBus } from '@/main';
import ReturnChassis from '@/components/ReturnChassis.vue';

export default {
    
    data() {
        return {
            sbs: [],
            searchTerm: '',
            ApplicableFilter: true,
            NotApplicableFilter: true,
            IncorporatedFilter: true,
            sbsApplicable: [],
            sbsNotApplicable: [],
            sbsIncorporated: [],
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
        
        this.filterApplicable();
        this.filterNotApplicable();
        this.filterIncorporated();
    },

  watch: {
    ApplicableFilter: function() {
      this.filterApplicable();
    },

    NotApplicableFilter: function() {
      this.filterNotApplicable();
    },

    IncorporatedFilter: function() {
      this.filterIncorporated();
    },

  },
    
    methods: {
        async getSbs() {
            const chassis = this.$route.params.chassis;

            const response = await axios.get('http://localhost:8080/bulletins/listar/' + chassis);
            this.sbs = response.data.map((item: String) => ({ 
                service_bulleti_name: item.service_bulleti_name,
                status: item.status,
                part: item.part === 'UNICO' ? 'UNIQUE' : item.part
            }));

        },

        filterApplicable() {
            if (!this.ApplicableFilter) {
                this.sbsApplicable = this.sbs.filter(item => String(item.status) === 'APPLICABLE');
                this.sbs = this.sbs.filter(item => String(item.status) !== 'APPLICABLE');
                console.log(this.sbsApplicable);
            } else {
               this.sbs.push(...this.sbsApplicable);
               
               
            }
        },

        filterNotApplicable() {
            if (!this.NotApplicableFilter) {
                this.sbsNotApplicable = this.sbs.filter(item => String(item.status) !== 'APPLICABLE' && String(item.status) !== 'INCORP' && 
                                                   String(item.status) !== 'INCORPORATED' && String(item.status) !== 'INCOPORATED'); 
                this.sbs = this.sbs.filter(item => String(item.status) === 'APPLICABLE' || String(item.status) || 'INCORP' || 
                                                   String(item.status) === 'INCORPORATED' || String(item.status) === 'INCOPORATED');
            } else {
                this.sbs.push(...this.sbsNotApplicable);
            }
        },

        filterIncorporated() {
            if (!this.IncorporatedFilter) {
                this.sbsIncorporated = this.sbs.filter(item => String(item.status) === 'INCORP' || String(item.status) === 'INCORPORATED' || String(item.status) === 'INCOPORATED'); 
                this.sbs = this.sbs.filter(item => String(item.status) !== 'INCORP' && String(item.status) !== 'INCORPORATED' && String(item.status) !== 'INCOPORATED');
            } else {
                this.sbs.push(...this.sbsIncorporated);
            }
        },

    },

    computed: {
        filteredApplicable() {
        return this.sbs;
        },

        filteredNotApplicable() {
        return this.sbs;
        },

        filteredIncorporated() {
        return this.sbs;
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