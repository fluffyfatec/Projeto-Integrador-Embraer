<template>
    <div>
        <ReturnSbs v-if="searchTerm"></ReturnSbs>
        <div v-else>
            <h1 class="title">Chassis of {{ $route.params.sb }} ({{ $route.params.part === 'UNICO' ? 'UNIQUE' : $route.params.part }})</h1>
            <div class="filter">
                <div class="micro-container">
                    <input type="checkbox" v-model="ApplicableFilter">
                    <label>Applicable</label>
                </div>
                <div class="micro-container">
                    <input type="checkbox" v-model="NotApplicableFilter">
                    <label>Not Applicable</label>
                </div>
                <div class="micro-container">
                    <input type="checkbox" v-model="IncorporatedFilter">
                    <label>Incorporated</label>
                </div>               
            </div> 
            <div class="table-wrapper">
                <table cellspacing="0">
                    <tr class="table-header">
                        <th>Chassis</th>
                        <th>Applicable</th>
                        <th>Not Applicable</th>
                        <th>Incorporated</th>
                    </tr>
                    <tr v-for="plane in planes" :key="plane.chassi">
                        <td>{{ plane.chassi }}</td>
                        <td><input v-if="plane.status == 'APPLICABLE'" type="checkbox" onclick="return false;" checked readonly><input v-else type="checkbox" onclick="return false;" readonly></td>
                        <td><input v-if="plane.status != 'APPLICABLE' && plane.status != 'INCORP' && plane.status != 'INCORPORATED' && plane.status != 'INCOPORATED'" type="checkbox" onclick="return false;" checked readonly><input v-else type="checkbox" onclick="return false;" readonly></td>
                        <td><input v-if="plane.status == 'INCORP' || plane.status == 'INCORPORATED' || plane.status == 'INCOPORATED'" type="checkbox" onclick="return false;" checked readonly><input v-else type="checkbox" onclick="return false;" readonly></td>
                    </tr>
                </table>
            </div>    
        </div>    
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { eventBus } from '@/main';
import ReturnSbs from '@/components/ReturnSbs.vue';
import globalData from '@/globals'

export default {
    
    data() {
        return {
            planes: [],
            searchTerm: '',
            ApplicableFilter: true,
            NotApplicableFilter: true,
            IncorporatedFilter: true,
            planesApplicable: [],
            planesNotApplicable: [],
            planesIncorporated: [],
            g: globalData,
        }
    },

    mounted() {
        this.getPlanes();

        if (this.g.userRole == "EDITOR" || this.g.userRole == "ADMIN") {
            return
        } else {
            this.$router.push('/items');
        };
    },

    created() {
        
        eventBus.$on('search-term-updated', (searchTerm: string) => {
            this.searchTerm = searchTerm
        });
        
        eventBus.$on('click-event-url', (searchTerm: string) => {
            this.searchTerm = '';
            this.getPlanes();
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

    updated() {

    },
    
    methods: {
        async getPlanes() {
            const sb = this.$route.params.sb;
            const part = this.$route.params.part;

            const response = await axios.get('http://localhost:8080/chassi/sb/' + sb + '/' + part);
            this.planes = response.data.map((item: String) => ({
                chassi: item.chassi,
                status: item.sb_status
            }));
        },

        filterApplicable() {
            if (!this.ApplicableFilter) {
                this.planesApplicable = this.planes.filter(item => String(item.status) === 'APPLICABLE');
                this.planes = this.planes.filter(item => String(item.status) !== 'APPLICABLE');
                console.log(this.planesApplicable);
            } else {
               this.planes.push(...this.planesApplicable);
               
               
            }
        },

        filterNotApplicable() {
            if (!this.NotApplicableFilter) {
                this.planesNotApplicable = this.planes.filter(item => String(item.status) !== 'APPLICABLE' && String(item.status) !== 'INCORP' && 
                                                   String(item.status) !== 'INCORPORATED' && String(item.status) !== 'INCOPORATED'); 
                this.planes = this.planes.filter(item => String(item.status) === 'APPLICABLE' || String(item.status) || 'INCORP' || 
                                                   String(item.status) === 'INCORPORATED' || String(item.status) === 'INCOPORATED');
            } else {
                this.planes.push(...this.planesNotApplicable);
            }
        },

        filterIncorporated() {
            if (!this.IncorporatedFilter) {
                this.planesIncorporated = this.planes.filter(item => String(item.status) === 'INCORP' || String(item.status) === 'INCORPORATED' || String(item.status) === 'INCOPORATED'); 
                this.planes = this.planes.filter(item => String(item.status) !== 'INCORP' && String(item.status) !== 'INCORPORATED' && String(item.status) !== 'INCOPORATED');
            } else {
                this.planes.push(...this.planesIncorporated);
            }
        },

   
    },

    computed: {
        filteredApplicable() {
        return this.planes;
        },

        filteredNotApplicable() {
        return this.planes;
        },

        filteredIncorporated() {
        return this.planes;
        },

    },


    components: {
        ReturnSbs,
    },
}
</script>

<style scoped>
@import "../assets/base.css";
.filter{
    display: flex;  
    justify-content: center;
}
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
        border: 1px solid var(--silver);
        width: 15px;
        height: 15px;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
        -ms-transform: scale(1.5); /* IE */
        -moz-transform: scale(1.5); /* FF */
        -webkit-transform: scale(1.5); /* Safari and Chrome */
        -o-transform: scale(1.5); /* Opera */
        transform: scale(1.5);
        margin: 10px;
    }

    input[type="checkbox"]:checked {
        background-color: var(--azul-principal) !important; /* define a cor vermelha para o checkbox quando selecionado */
        border-color: var(--azul-claro);
    }
    label{
        color: var(--azul-principal);
    }
    .micro-container{
    border: 1px solid;
    border-color: var(--azul-principal);
    border-radius: 5px;
    background-color: var(--platinum);
    margin-right: 20px;
    padding: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
   
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