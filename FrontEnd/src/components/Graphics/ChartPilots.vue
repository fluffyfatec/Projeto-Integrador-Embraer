<template>
    <div class="chart-container">
        <h1>Chassis Owners</h1>
        <div class="grid-row2">
            <div class="chart1">
            <img v-if="loading" src="../../assets/loading.gif" alt="Carregando...">
            <canvas ref="chart"></canvas>
            </div>
            <div v-if="chartInstance !== null" class="button-pdf">
                <button @click="exportToPdf">Export to PDF <i class="fa-solid fa-file-lines"></i></button>
            </div>
        </div>
        <div v-if="data_pilots.length >= 1" 
            class="open-dropdown" @click.prevent="moreInformation = !moreInformation">
            <h4 v-if="!moreInformation">See more information <i class="fa-solid fa-chevron-down"></i></h4>
            <h4 v-else>Close more information <i class="fa-solid fa-chevron-up"></i></h4>
        </div> 
        <div v-if="moreInformation" class="container-card">
            <div class="card" v-for="p in pilots">Chassis {{ p.chassis }} <br> <b style="background-color: #548644;">Pilot {{ p.pilot }}</b></div>
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
        chartInstance: null,
        pilots: [],
        data_pilots: [],
        moreInformation: false,
        loading: false,
        g: globalData,

      }
    },
  
  
    mounted() {
  
      this.getPilots();  
      this.getDataOfGraphic();
  
    },
  
    methods: {
          exportToPdf() {
              const chartContainer = this.$refs.chart.parentElement;
  
              html2canvas(chartContainer).then((canvas) => {
                const imageData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
  
                const width = pdf.internal.pageSize.getWidth();
                const height = pdf.internal.pageSize.getHeight();
  
                pdf.addImage(imageData, 'PNG', 0, 0, width, height);
                pdf.save('chart.pdf');
               });
          },
  
          

          async getDataOfGraphic() {
  
            // Se existir, destrua o antigo gráfico
            if (this.chartInstance !== null) {
                  this.chartInstance.destroy();
                  this.chartInstance = null;
                };
  
            this.data_pilots = []; 
            this.moreInformation = false;
  
            this.loading = true;
  
            const response = await axios.get('http://localhost:8080/data-graphic-pilots');
              
  
              this.data_pilots = response.data.map((item: any) => ({
                id: item.pilot_id,
                data: item.data_pilot,
                name: item.pilot_name
              }));
  
  
              this.loading = false;


            // Use um loop 'for' para iterar sobre this.data_owners
            let backgroundColor = ['#F3C653', '#0916A3', '#1F3C92', '#0A1A5C', '#004AEB', '#005BAF', '#1781E3',
                                    '#00417D', '#F3C653', '#C0C0C0', '#E0E0E1', '#548644', '#7CF0BD', '#AE2A32']
            let datasets = [];

            var n = 0;

            for (let p of this.data_pilots) {

                n++;
            // Crie cada objeto dataset e adicione-o à array datasets
            datasets.push({
                label: p.name,
                data: [p.data],
                backgroundColor: [backgroundColor[n]]
            });
            };
  
  
              // Registra os plugins do Chart.js que deseja utilizar
              Chart.register(...registerables);
  
              // Cria uma instância do gráfico
              const ctx = this.$refs.chart as HTMLCanvasElement;
              this.chartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                  labels: ['All Owners'],
                  datasets: datasets
                }
              });
  
          },

        async getPilots() {

            const response = await axios.get('http://localhost:8080/list-all-chassis-pilots-admin');

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
                    this.pilots.splice(i, 1);
                    i--;
                }
            };    

        
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
  
.grid-row2 {
  display: grid;
  grid-template-columns: 60%;
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
  
  
  
  </style>