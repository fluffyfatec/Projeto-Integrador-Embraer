<template>
  <div>
    <div class="chart1">
      <canvas ref="chart"></canvas>
    </div>
    <div>
      <button @click="exportToPdf">Exportar para PDF</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Chart, registerables } from 'chart.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default defineComponent({
  mounted() {
    // Registra os plugins do Chart.js que deseja utilizar
    Chart.register(...registerables);

    // Cria uma instância do gráfico
    const ctx = this.$refs.chart as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
          label: 'Dataset',
          data: [10, 20, 30],
          backgroundColor: ['red', 'blue', 'green']
        }]
      }
    });
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
    }
  }
});
</script>

<style scoped>
.chart1{
  height: 200px;
}



</style>