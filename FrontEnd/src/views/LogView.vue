<template>
    <div>
        <div class="div-header">
            <h1 class="title">List of Logs</h1>
            <div class="div-btn-download">
                    <button class="btn-download" @click.prevent="downloadPDF">
                        <i class="fa-solid fa-file-arrow-down"></i>
                        <i class="txt-btn-download">Download PDF</i>
                    </button>
            </div>
        </div>
        <div class="search-container">
            <input class="search-term" type="text" placeholder="Search a register..." v-model="searchTerm">
        </div>
        <div class="table-wrapper">
            <table cellspacing="0">
                <thead>
                    <tr class="table-header">
                        <th>User</th>
                        <th>Role</th>
                        <th>Date Register</th>
                        <th>Operation</th>
                        <th>Old Register</th>
                        <th>New Register</th>
                    </tr>
                </thead>    
                <tbody>
                    <tr v-if="searchTerm.length < 3" v-for="l in logs" :key="l.id">
                        <td>{{ l.username }}</td>
                        <td>{{ l.role }}</td>
                        <td>{{ l.date_register }}</td>
                        <td>{{ l.operation }}</td>
                        <td>{{ l.oldRegister }}</td>
                        <td>{{ l.newRegister }}</td>
                    </tr>
                    <tr v-if="searchTerm.length >= 3" v-for="l in filteredLogs" :key="l.id">
                        <td>{{ l.username }}</td>
                        <td>{{ l.role }}</td>
                        <td>{{ l.date_register }}</td>
                        <td>{{ l.operation }}</td>
                        <td>{{ l.oldRegister }}</td>
                        <td>{{ l.newRegister }}</td>
                    </tr>
                </tbody>
            </table>
        </div>            
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { eventBus } from '@/main';
import globalData from '@/globals';
import FileSaver from 'file-saver';

export default {

    data() {
        return {
            searchTerm: '',
            logs: [],
            g: globalData,
        }
    },

    mounted() {
        
        this.getLogs();

    },

    methods: {

        async getLogs() {

            if (this.g.userRole === 'ADMIN') {

                const response = await axios.get('http://localhost:8080/list-all-logs-admin');

                this.logs = response.data.map((item: String) => ({ 
                    id: item.id,
                    username: item.username,
                    role: item.role,
                    date_register: item.dtRegister,
                    operation: item.operation,
                    oldRegister: item.oldRegister,
                    newRegister: item.newRegister
                }));

            };


            if (this.g.userRole === 'EDITOR') {

                const response = await axios.get('http://localhost:8080/list-all-logs-editor');

                this.logs = response.data.map((item: String) => ({ 
                    id: item.id,
                    username: item.username,
                    role: item.role,
                    date_register: item.DtRegister,
                    operation: item.operation,
                    oldRegister: item.oldRegister,
                    newRegister: item.newRegister
                }));
            
            };

        },

        async downloadPDF() {

            // Faz a requisição para o método do Spring Boot

            if (this.g.userRole === 'ADMIN') {

                const response = await axios.get('http://localhost:8080/report-owners/', {
                responseType: 'blob' // Define o tipo de resposta como Blob
                });

            }

            if (this.g.userRole === 'EDITOR') {

                const response = await axios.get('http://localhost:8080/report-owners/', {
                responseType: 'blob' // Define o tipo de resposta como Blob
                });

            }

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

    computed: {
        filteredLogs() {
            return this.logs.filter(log => {
                for (let key in log) {
                    if (typeof log[key] === 'string' && log[key].toLowerCase().includes(this.searchTerm.toLowerCase())) {
                        return true;
                    }
                }
                return false;
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

.status-owner {
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
    position: fixed;
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