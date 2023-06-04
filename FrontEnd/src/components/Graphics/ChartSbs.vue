<template>
    <div>
        <div class="chart-container">
        <h1>Service Bulletin status in all chassis <b>{{ itemSelected }}</b></h1>
        <div class="grid-row">
            <div class="select-container">
                <select v-model="SelectPlaceholder">
                    <option class="select-placeholder" disabled :value="null">Select a sb...</option>
                    <option v-for="sb in sbs_options" :key="sb.sb_name" :value="sb.sb_name">{{ sb.sb_name }}</option>
                </select>
                <select v-if="SelectPlaceholder !== null" v-model="partSelected">
                    <option class="select-placeholder" disabled :value="null">Select a part...</option>
                    <option v-for="p in filteredParts" :value="p.part">{{ p.part }}</option>
                </select>
                <button v-if="SelectPlaceholder !== null && partSelected !== null" @click.prevent="getDataOfGraphic(SelectPlaceholder, partSelected)"class="btn-submit">Submit</button>
            </div>
            <div class="chart1">
            <img v-if="loading" src="../../assets/loading.gif" alt="Carregando...">
            <canvas ref="chart"></canvas>
            </div>
        </div>
        <div v-if="chartInstance !== null" class="button-pdf">
                <button @click="exportToPdf">Export to PDF <i class="fa-solid fa-file-lines"></i></button>
        </div>
        <div v-if="planes.length >= 1" 
            class="open-dropdown" @click.prevent="moreInformation = !moreInformation">
            <h4 v-if="!moreInformation">See more information <i class="fa-solid fa-chevron-down"></i></h4>
            <h4 v-else>Close more information <i class="fa-solid fa-chevron-up"></i></h4>
        </div> 
        <div v-if="moreInformation" class="container-card">
            <div class="card" v-for="inc in planes.filter(item =>  String(item.status) === 'INCORPORATED')">Chassis {{ inc.chassi }} <br> <b style="background-color: #548644;">INCORPORATED</b></div>
            <div class="card" v-for="app in planes.filter(item =>  String(item.status) === 'APPLICABLE')">Chassis {{ app.chassi }} <br> <b style="background-color: #7CF0BD;">APPLICABLE</b></div>
            <div class="card" v-for="notApp in planes.filter(item =>  String(item.status) === 'NOT APPLICABLE')">Chassis {{ notApp.chassi }} <br> <b style="background-color: #AE2A32;">NOT APPLICABLE</b></div>
        </div>
        </div>

        <div class="chart-container">
            <h1>Macro Sb status in all chassis for all Sbs</h1>
            <div class="grid-row2">
                <div class="chart1">
                <img v-if="loading2" src="../../assets/loading.gif" alt="Carregando...">
                <canvas ref="chart2"></canvas>
                </div>
                <div v-if="chartInstance2 !== null" class="button-pdf">
                    <button @click="exportToPdf2">Export to PDF <i class="fa-solid fa-file-lines"></i></button>
                </div>
            </div>
        </div>
  </div>
    </div>    
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { Chart, registerables } from 'chart.js';
  import html2canvas from 'html2canvas';
  import jsPDF from 'jspdf';
  import axios from 'axios';
  import globalData from '@/globals';

  
  export default defineComponent({
  
    data() {
      return {
        SelectPlaceholder: null,
        SelectPlaceholder2: null,
        itemSelected: null,
        chartInstance: null,
        planes: [],
        sbs_options: [],
        filteredParts: [],
        partSelected: null,
        data_incorporated: null,
        data_applicable: null,
        data_not_applicable: null,
        data_dont_have: null,
        moreInformation: false,
        loading: false,
        g: globalData,

        loading2: false,
        chartInstance2: null,
        dataMacro_incorporated: null,
        dataMacro_applicable: null,
        dataMacro_not_applicable: null,
      }
    },
  
  
    mounted() {
  
      this.getSbs();
      this.getDataOfMacroGraphic();
  
    },
  
    methods: {
          exportToPdf() {
              const chartContainer = this.$refs.chart.parentElement;
  
              html2canvas(chartContainer).then((canvas) => {
                const imageData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('landscape'); // Definir o formato do PDF como paisagem

              const pdfWidth = pdf.internal.pageSize.getWidth(); // Largura do PDF
              const pdfHeight = pdf.internal.pageSize.getHeight(); // Altura do PDF

              const chartWidth = canvas.width; // Largura da imagem do gráfico
              const chartHeight = canvas.height; // Altura da imagem do gráfico

              const aspectRatio = chartWidth / chartHeight; // Proporção de aspecto da imagem do gráfico

              let finalWidth, finalHeight;
              if (aspectRatio > 1) {
                // Imagem mais larga do que alta
                finalWidth = pdfWidth;
                finalHeight = pdfWidth / aspectRatio;
              } else {
                // Imagem mais alta do que larga (ou quadrada)
                finalWidth = pdfHeight * aspectRatio;
                finalHeight = pdfHeight;
              }

              const xPos = (pdfWidth - finalWidth + 50) / 2; // Posição horizontal da imagem no PDF
              const yPos = (pdfHeight - finalHeight) / 2; // Posição vertical da imagem no PDF

              pdf.addImage(imageData, 'PNG', xPos, yPos, finalWidth, finalHeight);
              pdf.save('chart.pdf');
               });
          },
  
          async getSbs() {
            const response = await axios.get('http://localhost:8080/bulletin/list/all');
            this.sbs_options = response.data.map((item: String) => ({ 
                sb_name: item.service_bulletin_name, 
                part: item.service_bulletin_part === 'UNICO' ? 'UNIQUE' : item.service_bulletin_part }));
        },

        filteredPartsBySb1() {
            this.filteredParts = this.sbs_options.filter(item => String(item.sb_name) === this.SelectPlaceholder);
        },

          async getDataOfGraphic(sb_name: String, part: String) {
  
            // Se existir, destrua o antigo gráfico
            if (this.chartInstance !== null) {
                  this.chartInstance.destroy();
                  this.chartInstance = null;
                };
  
            this.moreInformation = false;
  
            this.loading = true;
  
            this.itemSelected = 'of ' + sb_name + ' ' + part;

            if (part === 'UNIQUE') { 
                part = 'UNICO';
            };
  
            if (this.g.userRole === 'ADMIN') {
            const response = await axios.get('http://localhost:8080/chassi/sb/' + sb_name + '/' + part);
            this.planes = response.data.map((item: String) => ({
                chassi: item.chassi,
                status: item.sb_status,
                }));
            };

            if (this.g.userRole === 'EDITOR') {
            const response = await axios.get('http://localhost:8080/chassi/sb/editor/' + sb_name + '/' + part);
            this.planes = response.data.map((item: String) => ({
                chassi: item.chassi,
                status: item.sb_status,
                }));
            };

            if (part === 'UNICO') { 
                part = 'UNIQUE';
            };

              
              this.data_incorporated = this.planes.filter(item =>  String(item.status) === 'INCORPORATED').length;
  
              this.data_applicable = this.planes.filter(item =>  String(item.status) === 'APPLICABLE').length;
  
              this.data_not_applicable = this.planes.filter(item =>  String(item.status) === 'NOT APPLICABLE').length;

              this.data_dont_have = 17 - this.data_incorporated - this.data_applicable - this.data_not_applicable;
  
  
              this.loading = false;
  
  
              // Registra os plugins do Chart.js que deseja utilizar
              Chart.register(...registerables);
  
              // Cria uma instância do gráfico
              const ctx = this.$refs.chart as HTMLCanvasElement;
              this.chartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                  labels: [sb_name + ' ' + part],
                  datasets: [{
                    label: 'Incorporated',  
                    data: [this.data_incorporated],
                    backgroundColor: ['#548644']
                  },
                  {
                    label: 'Applicable',  
                    data: [this.data_applicable],
                    backgroundColor: ['#7CF0BD']
                  },
                  {
                    label: 'Not Applicable',  
                    data: [this.data_not_applicable],
                    backgroundColor: ['#AE2A32']
                  },
                  {
                    label: "Don't have",  
                    data: [this.data_dont_have],
                    backgroundColor: ['#C0C0C0']
                  }]
                }
              });
  
          },

            async getDataOfMacroGraphic() {

                // Se existir, destrua o antigo gráfico
                if (this.chartInstance2 !== null) {
                    this.chartInstance2.destroy();
                    this.chartInstance2 = null;
                    };

                this.loading2 = true;

                const response = await axios.get('http://localhost:8080/data-graphic-macro-sb-status');

                this.dataMacro_incorporated = response.data.data_incorporated;

                this.dataMacro_applicable = response.data.data_applicable;

                this.dataMacro_not_applicable = response.data.data_not_applicable;


                this.loading2 = false;


                // Registra os plugins do Chart.js que deseja utilizar
                Chart.register(...registerables);

                // Cria uma instância do gráfico
                const ctx = this.$refs.chart2 as HTMLCanvasElement;
                this.chartInstance2 = new Chart(ctx, {
                    type: 'bar',
                    data: {
                    labels: ['All items'],
                    datasets: [{
                        label: 'Incorporated',  
                        data: [this.dataMacro_incorporated],
                        backgroundColor: ['#548644']
                    },
                    {
                        label: 'Applicable',  
                        data: [this.dataMacro_applicable],
                        backgroundColor: ['#7CF0BD']
                    },
                    {
                        label: 'Not Applicable',  
                        data: [this.dataMacro_not_applicable],
                        backgroundColor: ['#AE2A32']
                    }]
                    }
                });

            },

                exportToPdf2() {
                const chartContainer = this.$refs.chart2.parentElement;

                html2canvas(chartContainer).then((canvas) => {
                    const imageData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF('landscape'); // Definir o formato do PDF como paisagem

              const pdfWidth = pdf.internal.pageSize.getWidth(); // Largura do PDF
              const pdfHeight = pdf.internal.pageSize.getHeight(); // Altura do PDF

              const chartWidth = canvas.width; // Largura da imagem do gráfico
              const chartHeight = canvas.height; // Altura da imagem do gráfico

              const aspectRatio = chartWidth / chartHeight; // Proporção de aspecto da imagem do gráfico

              let finalWidth, finalHeight;
              if (aspectRatio > 1) {
                // Imagem mais larga do que alta
                finalWidth = pdfWidth;
                finalHeight = pdfWidth / aspectRatio;
              } else {
                // Imagem mais alta do que larga (ou quadrada)
                finalWidth = pdfHeight * aspectRatio;
                finalHeight = pdfHeight;
              }

              const xPos = (pdfWidth - finalWidth + 50) / 2; // Posição horizontal da imagem no PDF
              const yPos = (pdfHeight - finalHeight) / 2; // Posição vertical da imagem no PDF

              pdf.addImage(imageData, 'PNG', xPos, yPos, finalWidth, finalHeight);
              pdf.save('chart.pdf');
                });
            },
        
    },    


      watch: {

        'SelectPlaceholder': function () {
            this.filteredPartsBySb1();
        },
      
    },  

    })
  </script>
  
  <style scoped>
  @import "../../assets/base.css";
  
  .chart1{
    height: 400px;
  }
  
  .chart1 img {
    height: 350px;
    margin-left: 150px;
  }
  
  .chart-container {
    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 20px 5px var(--silver);
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 25px;
    margin-top: 25px;
    padding-top: 5px;
  }
  
  h1 {
    margin-left: 25px;
    margin-top: 25px;
  
    color: var(--azul-principal);
  }
  
  h1 b {
    color: var(--azul-embraer-light);
  }
  
  .grid-row {
    display: grid;
    grid-template-columns: 0.5fr 1.5fr;
    justify-content: center;
    gap: 50px;
    margin-left: 25px;
    margin-right: 10px;
  }
  
  h4 {
    color: var(--azul-embraer-light);
    padding: 10px;
    text-align: center;
  }
  
  .button-pdf {
    text-align: center;
    padding-bottom: 10px;
  }
  
  .button-pdf i {
    font-size: 18px;
    margin-left: 5px;
  }
  
  .container-card {
      display: grid;
      grid-template-columns: 24% 24% 24% 24%;
      grid-gap: 10px;
      margin-left: 30px;
      margin-right: 15px;
      margin-top: 25px;
      margin-bottom: 25px;
      padding-bottom: 25px;
  }
  
  .card {
      background-color: var(--white);
      border-radius: 10px;
      padding: 20px;
      text-align: center;
      color: var(--azul-principal);
      font-weight: var(--light);
      box-shadow: 2px 2px 20px 5px var(--silver);
  }
  
  .card b {
    border-radius: 15px;
    color: white;
    padding: 7px;
    font-size: 21px;
    padding-top: 2px;

  }
  .btn-submit{
    margin-left: 60px;
  }


/* Style for graphic two */
    .grid-row2 {
        display: grid;
        grid-template-columns: 60%;
        justify-content: center;
        gap: 30px;
        margin-left: 25px;
        margin-right: 10px;
    }
    .select-container select{
    margin-bottom: 10px;
  }

    /* Estilos para mobile */
@media only screen and (max-width: 767px) {
  .grid-row{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .grid-row2{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .select-container select{
    margin-bottom: 10px;
  }
  .btn-submit{
    margin-left: 5rem;
  }

  .container-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card b{
    font-size: 12px;
  }

  
  .chart1 img {
    width: 40%;
    height: 40%;
    margin-left: 30%;
    margin-top: 30%;

  }
  .chart1{
    height: 200px;
  }
}
  
  
  </style>