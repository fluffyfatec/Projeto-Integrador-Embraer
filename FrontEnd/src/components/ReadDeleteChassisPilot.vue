<template>
    <div>
        <div class="div-header">
            <h1 class="title">List of Chassis Pilots</h1>
            <div class="div-btn-download">
                        <button class="btn-download" @click.prevent="showPdfOptions = true">
                            <i class="fa-solid fa-file-arrow-down"></i>
                            <i class="txt-btn-download">Download PDF</i>
                        </button>
            </div>
            <div v-if="showPdfOptions" class="filter-download">
                    <h3>Choose what you want in the report</h3>

                    <input type="checkbox" v-model="pdf.active" :value="true">
                    <label>Show Active</label>

                    <input type="checkbox" v-model="pdf.inactive" :value="true">
                    <label>Show Inactive</label>

                    <button v-if="pdf.active !== false || pdf.inactive !== false" 
                            @click.prevent="downloadPDF">Confirm</button>
                    <button @click.prevent="showPdfOptions = false">Cancel</button>        
            </div>
        </div>
        <div class="search-container">
            <input class="search-term" type="text" placeholder="Search a pilot..." v-model="searchTerm">
        </div>
        <div class="table-wrapper">
            <table cellspacing="0">
                <thead>
                    <tr class="table-header">
                        <th>Owner</th>
                        <th>Chassis</th>
                        <th>Pilot</th>
                        <th>Date Register</th>
                        <th>Status</th>
                        <th>Options</th>
                    </tr>
                </thead>    
                <tbody>
                    <tr v-if="searchTerm.length < 3" v-for="p in pilots" :key="p.id">
                        <td>{{ p.owner }}</td>
                        <td>{{ p.chassis }}</td>
                        <td>{{ p.pilot }}</td>
                        <td>{{ p.date_register }}</td>
                        <td class="status-pilot" @click="pilotUpdateStatus(p.id, p.status)"
                        :style="p.status === 'Active' ? 'color: #548644' : 'color: #AE2A32'">{{ p.status }}</td>
                        <td class="edit-item">
                            <button @click.prevent="deletePilot(p.id)">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>   
                        </td>
                    </tr>
                    <tr v-if="searchTerm.length >= 3" v-for="p in filteredPilots" :key="p.id">
                        <td>{{ p.owner }}</td>
                        <td>{{ p.chassis }}</td>
                        <td>{{ p.pilot }}</td>
                        <td>{{ p.date_register }}</td>
                        <td class="status-pilot" @click="pilotUpdateStatus(p.id, p.status)"
                        :style="p.status === 'Active' ? 'color: #548644' : 'color: #AE2A32'">{{ p.status }}</td>
                        <td class="edit-item">
                            <button @click.prevent="deletePilot(p.id)">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>   
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>            
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { eventBus } from '@/main';
import FileSaver from 'file-saver';

export default {

    data() {
        return {
            searchTerm: '',
            pilots: [],
            pdf: {
                active: false,
                inactive: false,
            },
            showPdfOptions: false,
        }
    },

    mounted() {
        
        this.getPilots();

    },

    methods: {

        async deletePilot(id: number) {

            await axios.get('http://localhost:8080/delete-chassis-pilot/' + id);

            this.getPilots();
        },

        async getPilots() {

            const response = await axios.get('http://localhost:8080/list-all-chassis-pilots');

            this.pilots = response.data.map((item: String) => ({ 
                id: item.id,
                owner: item.owner,
                pilot: item.pilot,
                chassis: item.chassis,
                date_register: item.date_register,
                status: item.status
            }));

            for (let i = 0; i < this.pilots.length; i++) {
                if (this.pilots[i].status === 'A') {
                    this.pilots[i].status = 'Active';
                }

                if (this.pilots[i].status === 'I') {
                    this.pilots[i].status = 'Inactive';
                }
            };    

        },

        async pilotUpdateStatus(id: String, status: String) {
            await axios.get('http://localhost:8080/update-pilot-status/' + id + '/' + status);

            this.getPilots();
        },

        async downloadPDF() {

            // Faz a requisição para o método do Spring Boot
            const response = await axios.get('http://localhost:8080/report-pilots/' + this.pdf.active + '/' + this.pdf.inactive, {
                responseType: 'blob' // Define o tipo de resposta como Blob
            });

            // Obtém o nome do arquivo a partir do cabeçalho Content-Disposition
            const contentDispositionHeader = response.headers['content-disposition'];
            const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
            const matches = filenameRegex.exec(contentDispositionHeader);
            const filename = matches != null && matches[1] ? matches[1].replace(/['"]/g, '') : 'report.pdf';

            // Cria um objeto Blob com a resposta recebida do servidor
            const blob = new Blob([response.data], { type: 'application/pdf' });

            // Salva o arquivo com o nome obtido do cabeçalho Content-Disposition
            FileSaver.saveAs(blob, filename);

        },

    },

    created() {
        eventBus.$on('update-getPilots', (edition: boolean) => {
            this.getPilots();
        });
    },

    computed: {
        filteredPilots() {
            return this.pilots.filter(pilot => {
                return pilot.pilot.toLowerCase().includes(this.searchTerm.toLowerCase());
                });
            },
    },

}

</script>

<style scoped>
@import "../assets/base.css";
.table-new-line{

    margin: 0;
    padding: 0;
}
.full-width {
  width: 100%;
  
}


button{

    color: aliceblue;
    background-color: var(--azul-principal);
    width: 30px;
    height: 30px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
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

tr:nth-child(even)    { background-color: rgba(224, 224, 225, 0.5);}

.status-pilot {
    cursor: pointer;
}

.edit-item {
    height: fit-content;
}

.search-container{
    display: flex;
    justify-content: center;
}

.filter-download {
    position: absolute;
    background-color: var(--white);
    border-radius: 10px;
    text-align: center;
    width: 60%;
    padding-top: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-left: 25px;
    margin-right: 25px;
    padding: 40px;
    box-shadow: 2px 2px 20px 5px var(--silver);
    transition: 2s;
    z-index: 9999;
}

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

    th {
        padding: 25px;
    }

    td {
        padding: 10px;
    }

    .search-container input{
        width: 45%;
        height: auto;
        font-size: 22px;
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

    th {
        padding: 25px;
    }

    td {
        padding: 10px;
    }

    .search-container input{
        width: 60%;
        height: auto;
        font-size: 20px;
    }

}    
</style>