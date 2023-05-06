<template>
    <div>
        <ReturnChassis v-if="searchTerm"></ReturnChassis>
        <div v-else>
            <div class="div-header">
                <h1 class="title">SBs of chassis {{ $route.params.chassis }}</h1>
                <div class="div-btn-download">
                    <button class="btn-download">
                        <i class="fa-solid fa-file-arrow-down"></i>
                        <i class="txt-btn-download">Download PDF</i>
                    </button>
                </div>
            </div>
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
                <div v-if="!createNew" class="new-sb">
                    <button @click.prevent="createNew = true">
                        <i class="fa-solid fa-plus"></i> New Service Bulletin
                    </button>
                </div>
                
            </div>  
            <div class="table-wrapper">
                <table cellspacing="0">
                    <tr class="table-header">
                        <th>Service Bulletin</th>
                        <th>Part</th>
                        <th>Applicable</th>
                        <th>Not Applicable</th>
                        <th>Incorporated</th>
                        <th>Options</th>
                    </tr>
                    <tr v-if="createNew">
                        <td colspan="6" class="full-width">
                            <form @submit.prevent="registerNew" class="center">
                                <div class="create-container">
                                    <div class="sb-name-part">
                                        <input type="text" v-model="newSb.name" placeholder="Insert a SB name...">
                                        <select v-model="newSb.part">
                                            <option>UNIQUE</option>
                                            <option>PART 1</option>
                                            <option>PART 2</option>
                                            <option>PART 3</option>
                                            <option>PART 4</option>
                                            <option>PART 5</option>
                                        </select>
                                    </div>
                                    <div class="sb-status">
                                        <select v-model="newSb.status">
                                            <option>APPLICABLE</option>
                                            <option>NOT APPLICABLE</option>
                                            <option>INCORPORATED</option>
                                        </select>
                                    </div>
                                    <div class="button-submit">
                                        <button v-if="newSb.name.length > 5 && newSb.part !== null && newSb.status !== null" type="submit" class="submit">
                                            <i class="fa-solid fa-check"></i>            
                                        </button>
                                    </div>
                                    <div class="button-cancel">
                                        <button @click.prevent="createNew = false">
                                            <i class="fa-solid fa-xmark"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>    
                        </td>
                    </tr>
                    <tr v-for="sb in sbs" :key="sb.service_bulleti_name + sb.part">
                        <td>{{ sb.service_bulleti_name }}</td>
                        <td>{{ sb.part }}</td>
                        <td>
                            <input v-if="!sb.edition" type="checkbox" :class="{ 'disabled': !edition }" v-model="sb.checkbox1" value="APPLICABLE" :checked="sb.status == 'APPLICABLE' ? sb.checkbox1 = true : sb.checkbox1 = false">
                            <input v-else type="checkbox" :value="sb.id" :checked="sb.selectedStatus === 'APPLICABLE'" @change="sb.selectedStatus = 'APPLICABLE'">
                        </td>
                        <td>
                            <input v-if="!sb.edition" type="checkbox" :class="{ 'disabled': !edition }" v-model="sb.checkbox2" value="NOT APPLICABLE" :checked="sb.status != 'APPLICABLE' && sb.status != 'INCORP' && sb.status != 'INCORPORATED' && sb.status != 'INCOPORATED' ? sb.checkbox2 = true : sb.checkbox2 = false">
                            <input v-else type="checkbox" :value="sb.id" :checked="sb.selectedStatus === 'NOT APPLICABLE'" @change="sb.selectedStatus = 'NOT APPLICABLE'">
                        </td>
                        <td>
                            <input v-if="!sb.edition" type="checkbox" :class="{ 'disabled': !edition }" v-model="sb.checkbox3" value="INCORPORATED" :checked="sb.status == 'INCORP' || sb.status == 'INCORPORATED' || sb.status == 'INCOPORATED' ? sb.checkbox3 = true : sb.checkbox3 = false">
                            <input v-else type="checkbox" :value="sb.id" :checked="sb.selectedStatus === 'INCORPORATED'" @change="sb.selectedStatus = 'INCORPORATED'">
                        </td>                    
                        <td>
                            <button v-if="!sb.edition" @click.prevent="sb.edition = true">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button v-if="sb.edition" @click.prevent="saveNewStatus(sb.service_bulleti_name, sb.part, sb.selectedStatus); sb.edition = false">
                                <i class="fa-solid fa-check"></i>
                            </button>
                            <button v-if="sb.edition" @click.prevent="sb.edition = false">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </td>
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
import globalData from '@/globals'

export default {
    
    data() {
        return {
            createNew: false,
            sbs: [],
            searchTerm: '',
            ApplicableFilter: true,
            NotApplicableFilter: true,
            IncorporatedFilter: true,
            sbsApplicable: [],
            sbsNotApplicable: [],
            sbsIncorporated: [],
            g: globalData,
            newSb: {
                name: '',
                part: null,
                status: null,
                chassis: this.$route.params.chassis,
            },
        }
    },

    mounted() {
        this.getSbs();

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
            this.sbs = response.data.map((item: String, index: number) => ({ 
                id: index,
                service_bulleti_name: item.service_bulleti_name,
                status: item.status,
                part: item.part === 'UNICO' ? 'UNIQUE' : item.part,
                checkbox1: false,
                checkbox2: false,
                checkbox3: false,
                edition: false,
                selectedStatus: null,
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

        async saveNewStatus(sb: string, part: string, status: string) {
            
            if (part === 'UNIQUE') {
                part = 'UNICO';
            };

            const chassis = this.$route.params.chassis;
            
            await axios.get('http://localhost:8080/edit-sb-status/' + sb + '/' + part + '/' + chassis + '/' + status);

            this.getSbs();
        },

        async registerNew() {

            if (this.newSb.part === 'UNIQUE') {
                this.newSb.part = 'UNICO';
            };

            await axios.post('http://localhost:8080/register-new-sb-or-chassi', this.newSb, {
                    headers: {
                    'Content-Type': 'application/json'
                    }

                });

            this.getSbs();    

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

input[type=checkbox].disabled {
    pointer-events: none;
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