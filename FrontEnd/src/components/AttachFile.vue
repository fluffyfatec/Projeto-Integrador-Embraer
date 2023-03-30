<template>
    <div class="main">
        <form @submit.prevent="sendData" ref="form">    
            <div
            class="dropzone-container"
            @dragover="dragover"
            @dragleave="dragleave"
            @drop="drop"
            >
            <input
                type="file"
                multiple
                name="file"
                id="fileInput"
                class="hidden-input"
                @change="onChange"
                ref="file"
                accept=".csv,.xlsx"
            />

            <label for="fileInput" class="file-label">
                <div v-if="isDragging">Solte os arquivos aqui</div>
                <div v-else>Arraste arquivos aqui ou <u>clique aqui</u> para baixar</div>
            </label>

            <div class="preview-container mt-4" v-if="files.length">
                <div v-for="file in files" :key="file.name" class="preview-card">
                <div>
                    <img class="preview-img" :src="excel" />
                    <p>
                        {{ file.name }} 
                        ({{ Math.round(file.size / 1000) + "kb" }})
                    </p>
                </div>
                <div>
                    <button
                    class="ml-2"
                    type="button"
                    @click="remove(files.indexOf(file))"
                    title="Remove file"
                    >
                    <b>×</b>
                    </button>
                </div>
                </div>
            </div>
            </div>
            <button type="submit">Enviar</button>
        </form>    
  </div>
</template>

<script lang="js">
import axios from 'axios';

export default {
  data() {
    return {
      isDragging: false,
      files: [],
      filesJSON: [],
      excel: 'src/assets/Excel.png'
    };
  },
  mounted() {
    this.$refs.file.addEventListener('change', event => {
        this.files = Array.from(event.target.files)
    })
  },
  methods: {
    onChange() {
      this.files = this.$refs.file.files;

      for (let i = 0; i < this.files.length; i++) {
        const file = this.files[i];
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const json = XLSX.utils.sheet_to_json(worksheet);

            // objeto de mapeamento de nomes de chave original para o novo nome de chave
            const keyMap = {
                "Boletim de serviço": "bulletin_service",
                "Status": "Status",
            };

            const header = Object.keys(json[0]); // obter as chaves do primeiro objeto como o cabeçalho
            const chassisValue = worksheet['C2'].v; // obter o valor da célula C2 (segunda linha, terceira coluna)
            const newData = [];
            json.forEach((row, index) => {
                // copiar o valor de "Chassis" para todas as linhas
                const newRow = {};
                header.forEach(key => {
                newRow[keyMap[key] || key] = row[key];
                });
                if (index === 0) {
                    // remover a chave "Chassis " com espaço
                    delete newRow["Chassis "];
                    delete newRow["Chassis"];
                }
                newRow["chassis"] = chassisValue;
                newData.push(newRow);
            });
        this.filesJSON.push(newData);
        };
        reader.readAsBinaryString(file);
        };
    
    },
    dragover(e) {
      e.preventDefault();
      this.isDragging = true;
    },
    dragleave() {
      this.isDragging = false;
    },
    drop(e) {
      e.preventDefault();
      this.$refs.file.files = e.dataTransfer.files;
      this.onChange();
      this.isDragging = false;
    },
    remove(i) {
    this.files.splice(i, 1);
    },

    sendData() {
        if (this.files.length > 0) {
            
            this.filesJSON.forEach(data => {
                const jsonData = JSON.stringify(data);

                console.log(jsonData);

                // enviar arquivos para o servidor
                axios.post('http://localhost:8080/register/bulletin', jsonData, {
                    headers: {
                    'Content-Type': 'application/json'
                    }
                });
            });     

            // resetar o valor do input
            this.$refs.file.value = null;
            this.files = [];
            this.filesJSON = [];

            alert("Data sent to database succesfully!");
        }
    },
  },
};
</script>


<style scoped>
.main {
    display: flex;
    flex-grow: 1;
    align-items: center;
    height: 100vh;
    justify-content: center;
    text-align: center;
}

.dropzone-container {
    padding: 4rem;
    background: #f7fafc;
    border: 1px solid #e2e8f0;
}

.hidden-input {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
}

.file-label {
    font-size: 20px;
    display: block;
    cursor: pointer;
}

.preview-container {
    display: flex;
    margin-top: 2rem;
}

.preview-card {
    display: flex;
    border: 1px solid #a2a2a2;
    padding: 5px;
    margin-left: 5px;
}

.preview-img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #a2a2a2;
    background-color: #a2a2a2;
}
</style>
  