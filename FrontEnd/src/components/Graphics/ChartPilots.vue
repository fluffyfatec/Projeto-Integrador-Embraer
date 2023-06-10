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
            let backgroundColor = ['#739DD7', '#04381D', '#2F1547', '#1DDCF5', '#69A3F5', '#904101', '#10233D',
                                    '#6AD19C', '#9D66D0', '#44B3C2', '#7993B7', '#C7793A', '#0F438C', '#098746', 
                                  '#632C96', '#87ECFA', '#B0CEF9', '#30B1C7', '#155BBD', '#0DB85F', '#8339C7', 
                                '#0E6C78', '#345078', '#C76414', '#1497A8', '#4870A8']
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
    height: 300px;
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
  }
  
  .button-pdf {
    text-align: center;

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
    margin-top: 10%;
  }

  .chart-container{
  padding: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  }

  .chart1{
    height: 200px;
    width: 400px;
  }

  .container-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .card b{
    font-size: 15px;
    padding-top: 2px;
  }
}
  
  
  </style>