<template>
    <div>
        <div class="chart-container">
        <h1>Item status in chassis <b>{{ itemSelected }}</b></h1>
        <div class="grid-row">
            <select v-model="SelectPlaceholder">
            <option class="select-placeholder" disabled :value="null">Select a chassis...</option>
            <option v-for="c in chassis" :key="c.chassi_id" @click.prevent="getDataOfGraphicOne(c.chassi_id)">{{ c.chassi_id }}</option>
            </select>
            <div class="chart1">
            <img v-if="loading" src="../../assets/loading.gif" alt="Carregando...">
            <canvas ref="chart"></canvas>
            <div v-if="chartInstance !== null" class="button-pdf">
                <button @click="exportToPdf">Export to PDF <i class="fa-solid fa-file-lines"></i></button>
            </div>
            </div>
        </div>
        <div v-if="items_incorporated.length >= 1 || items_applicable.length >= 1 || items_not_applicable.length >= 1" 
            class="open-dropdown" @click.prevent="moreInformation = !moreInformation">
            <h4 v-if="!moreInformation">See more information <i class="fa-solid fa-chevron-down"></i></h4>
            <h4 v-else>Close more information <i class="fa-solid fa-chevron-up"></i></h4>
        </div> 
        <div v-if="moreInformation" class="container-card">
            <div class="card" v-for="inc in items_incorporated">{{ inc.name_item }} <br> <b style="background-color: #548644;">INCORPORATED</b></div>
            <div class="card" v-for="app in items_applicable">{{ app.name_item }} <br> <b style="background-color: #7CF0BD;">APPLICABLE</b></div>
            <div class="card" v-for="notApp in items_not_applicable">{{ notApp.name_item }} <br> <b style="background-color: #AE2A32;">NOT APPLICABLE</b></div>
        </div>
        </div>

        <div class="chart-container">
        <h1>Sb status in chassis <b>{{ itemSelected2 }}</b></h1>
        <div class="grid-row">
            <select v-model="SelectPlaceholder2">
            <option class="select-placeholder" disabled :value="null">Select a chassis...</option>
            <option v-for="c in chassis" :key="c.chassi_id" @click.prevent="getDataOfGraphicTwo(c.chassi_id)">{{ c.chassi_id }}</option>
            </select>
            <div class="chart1">
            <img v-if="loading2" src="../../assets/loading.gif" alt="Carregando...">
            <canvas ref="chart2"></canvas>
            <div v-if="chartInstance2 !== null" class="button-pdf">
                <button @click="exportToPdf2">Export to PDF <i class="fa-solid fa-file-lines"></i></button>
            </div>
            </div>
        </div>
        <div v-if="sbs.length >= 1" 
            class="open-dropdown" @click.prevent="moreInformation2 = !moreInformation2">
            <h4 v-if="!moreInformation2">See more information <i class="fa-solid fa-chevron-down"></i></h4>
            <h4 v-else>Close more information <i class="fa-solid fa-chevron-up"></i></h4>
        </div> 
        <div v-if="moreInformation2" class="container-card">
            <div class="card" v-for="inc in sbs.filter(sb => String(sb.status) === 'INCORPORATED')">{{ inc.sb_name }} {{ inc.part }} <br> <b style="background-color: #548644;">INCORPORATED</b></div>
            <div class="card" v-for="app in sbs.filter(sb => String(sb.status) === 'APPLICABLE')">{{ app.sb_name }} {{ app.part }} <br> <b style="background-color: #7CF0BD;">APPLICABLE</b></div>
            <div class="card" v-for="notApp in sbs.filter(sb => String(sb.status) === 'NOT APPLICABLE')">{{ notApp.sb_name }} {{ notApp.part }} <br> <b style="background-color: #AE2A32;">NOT APPLICABLE</b></div>
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
        itemSelected: null,
        chartInstance: null,
        chassis: [],
        items_incorporated: [],
        items_applicable: [],
        items_not_applicable: [],
        data_incorporated: null,
        data_applicable: null,
        data_not_applicable: null,
        moreInformation: false,
        loading: false,
        g: globalData,

        loading2: false,
        chartInstance2: null,
        moreInformation2: false,
        data_incorporated2: null,
        data_applicable2: null,
        data_not_applicable2: null,
        itemSelected2: null,
        SelectPlaceholder2: null,
        sbs: [],
      }
    },
  
  
    mounted() {
  
      this.getChassis();
  
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
  
          async getChassis() {

            if (this.g.userRole == 'ADMIN') {
            const response = await axios.get('http://localhost:8080/chassi/list');
            this.chassis = response.data.map((item: String) => ({ chassi_id: item.chassi_id }));
            };

            if (this.g.userRole == 'EDITOR') {
                const response = await axios.get('http://localhost:8080/chassi/list/editor');
                this.chassis = response.data.map((item: String) => ({ chassi_id: item.chassi_id }));
            };

            if (this.g.userRole == 'PILOT') {
                const response = await axios.get('http://localhost:8080/chassi/list/' + this.g.userUserName);
                this.chassis = response.data.map((item: String) => ({ chassi_id: item.chassi_id }));
            };

          },

          async getDataOfGraphicOne(chassiId: Number) {
  
            // Se existir, destrua o antigo gráfico
            if (this.chartInstance !== null) {
                  this.chartInstance.destroy();
                  this.chartInstance = null;
                };
  
            this.items_incorporated = [];
            this.items_applicable = [];
            this.items_not_applicable = [];    
            this.moreInformation = false;
  
            this.loading = true;
  
            this.itemSelected = chassiId;
  
            const response = await axios.get('http://localhost:8080/items/list/' + chassiId);
              const { incorporated, applicable, not_applicable } = response.data;
  
              this.items_incorporated = incorporated.map((item: { name_item: string, chassis: Number }) => ({
                  name_item: item.name_item,
                  chassis: item.chassis
              }));
  
              this.items_applicable = applicable.map((item: { name_item: string, chassis: Number }) => ({
                  name_item: item.name_item,
                  chassis: item.chassis
              }));
  
              this.items_not_applicable = not_applicable.map((item: { name_item: string, chassis: Number }) => ({
                  name_item: item.name_item,
                  chassis: item.chassis
              }));
              
              this.data_incorporated = this.items_incorporated.length;
  
              this.data_applicable = this.items_applicable.length;
  
              this.data_not_applicable = this.items_not_applicable.length;
  
  
              this.loading = false;
  
  
              // Registra os plugins do Chart.js que deseja utilizar
              Chart.register(...registerables);
  
              // Cria uma instância do gráfico
              const ctx = this.$refs.chart as HTMLCanvasElement;
              this.chartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                  labels: ['Chassis ' + this.SelectPlaceholder],
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
                  }]
                }
              });
  
          },

          async getDataOfGraphicTwo(chassiId: Number) {
  
            // Se existir, destrua o antigo gráfico
            if (this.chartInstance2 !== null) {
                    this.chartInstance2.destroy();
                    this.chartInstance2 = null;
                };

            this.sbs = [];    
            this.moreInformation2 = false;

            this.loading2 = true;

            this.itemSelected2 = chassiId;

            const response = await axios.get('http://localhost:8080/bulletins/listar/' + chassiId);
            this.sbs = response.data.map((item: String) => ({ 
                sb_name: item.service_bulleti_name,
                status: item.status,
                part: item.part === 'UNICO' ? 'UNIQUE' : item.part,
            }));

                this.data_incorporated2 = this.sbs.filter(sb => String(sb.status) === 'INCORPORATED').length

                this.data_applicable2 = this.sbs.filter(sb => String(sb.status) === 'APPLICABLE').length

                this.data_not_applicable2 = this.sbs.filter(sb => String(sb.status) === 'NOT APPLICABLE').length


                this.loading2 = false;


                // Registra os plugins do Chart.js que deseja utilizar
                Chart.register(...registerables);

                // Cria uma instância do gráfico
                const ctx = this.$refs.chart2 as HTMLCanvasElement;
                this.chartInstance2 = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Chassis ' + this.SelectPlaceholder2],
                    datasets: [{
                    label: 'Incorporated',  
                    data: [this.data_incorporated2],
                    backgroundColor: ['#548644']
                    },
                    {
                    label: 'Applicable',  
                    data: [this.data_applicable2],
                    backgroundColor: ['#7CF0BD']
                    },
                    {
                    label: 'Not Applicable',  
                    data: [this.data_not_applicable2],
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
    })
  </script>
  
  <style scoped>
  @import "../../assets/base.css";
  
  .chart1{
    height: 400px;
  }
  
  .chart1 img {
    height: 350px;
    margin-left: 100px;
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
    margin-top: 100px;
  }
  
  .button-pdf {
    text-align: center;
    padding: 40px;
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
    margin-top: 15px;
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
  
  .chart1 img {
    width: 40%;
    height: 40%;
    margin-left: 30%;
    margin-top: 30%;

  }
}
  
  
  </style>