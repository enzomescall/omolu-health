<template>
    <div>
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { Chart } from "chart.js";
  
  const chartCanvas = ref<HTMLCanvasElement | null>(null);
  
  onMounted(() => {
    if (chartCanvas.value) {
      new Chart(chartCanvas.value, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar"], // Replace dynamically
          datasets: [
            {
              label: "Cholesterol Level",
              data: [180, 190, 200], // Replace dynamically
              borderColor: "blue",
              fill: false,
            },
          ],
        },
      });
    }
  });
  </script>
  