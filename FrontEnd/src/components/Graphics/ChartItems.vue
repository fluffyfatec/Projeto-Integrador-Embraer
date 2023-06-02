<template>
  <div>
    <div class="chart-container">
      <h1>Item status in all chassis <b>{{ itemSelected }}</b></h1>
      <div class="grid-row">
        <select v-model="SelectPlaceholder">
          <option class="select-placeholder" disabled :value="null">Select an item...</option>
          <option v-for="i in items" :key="i.id" @click.prevent="getDataOfGraphic(i.id, i.name)">{{ i.name }}</option>
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
        <div class="card" v-for="inc in items_incorporated">Chassis {{ inc.chassis }} <br> <b style="background-color: #548644;">INCORPORATED</b></div>
        <div class="card" v-for="app in items_applicable">Chassis {{ app.chassis }} <br> <b style="background-color: #7CF0BD;">APPLICABLE</b></div>
        <div class="card" v-for="notApp in items_not_applicable">Chassis {{ notApp.chassis }} <br> <b style="background-color: #AE2A32;">NOT APPLICABLE</b></div>
      </div>
    </div>

    <div class="chart-container">
      <h1>Macro Item status in all chassis for all items</h1>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Chart, registerables } from 'chart.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import axios from 'axios';

export default defineComponent({

  data() {
    return {
      SelectPlaceholder: null,
      itemSelected: null,
      chartInstance: null,
      items: [],
      items_incorporated: [],
      items_applicable: [],
      items_not_applicable: [],
      data_incorporated: null,
      data_applicable: null,
      data_not_applicable: null,
      moreInformation: false,
      loading: false,

      loading2: false,
      chartInstance2: null,
      dataMacro_incorporated: null,
      dataMacro_applicable: null,
      dataMacro_not_applicable: null,
    }
  },


  mounted() {

    this.getItems();
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

        async getItems() {
	        
          const response = await axios.get('http://localhost:8080/list-all/items');

          this.items = response.data.map((item: String) => ({ 
              id: item.itemId,
              name: item.itemName
          }));
        },

        async getDataOfGraphic(itemId: Number, itemName: String) {

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

          this.itemSelected = 'of ' + itemName;

          const response = await axios.get('	http://localhost:8080/data-graphic-item-status/' + itemId);
            const { incorporated, applicable, not_applicable } = response.data;

            this.data_incorporated = response.data.data_incorporated;

            this.data_applicable = response.data.data_applicable;

            this.data_not_applicable = response.data.data_not_applicable;


            this.loading = false;


            // Registra os plugins do Chart.js que deseja utilizar
            Chart.register(...registerables);

            // Cria uma instância do gráfico
            const ctx = this.$refs.chart as HTMLCanvasElement;
            this.chartInstance = new Chart(ctx, {
              type: 'bar',
              data: {
                labels: [this.SelectPlaceholder],
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

        },

        async getDataOfMacroGraphic() {

          // Se existir, destrua o antigo gráfico
          if (this.chartInstance2 !== null) {
                this.chartInstance2.destroy();
                this.chartInstance2 = null;
              };

          this.loading2 = true;

          const response = await axios.get('http://localhost:8080/data-graphic-macro-item-status');

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

/* Style for graphic two */
.grid-row2 {
  display: grid;
  grid-template-columns: 60%;
  justify-content: center;
  gap: 50px;
  margin-left: 25px;
  margin-right: 10px;
}



</style>