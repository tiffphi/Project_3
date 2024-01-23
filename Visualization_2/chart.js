// chart.js

// Initialize barChart variable
let barChart;

// Function to update the chart based on selected week_end
function updateChart(selectedWeek) {
  // Filter data based on the selected week
  const filteredData = window.data.filter(item => item.week_end === selectedWeek);

  // Extract unique geographies
  const uniqueGeographies = [...new Set(filteredData.map(item => item.geography))];

  // Prepare datasets for Chart.js
  const datasets = [];

  // Create a dataset for each pathogen
  const uniquePathogens = [...new Set(filteredData.map(item => item.pathogen))];
  uniquePathogens.forEach(pathogen => {
    const dataForPathogen = filteredData.filter(item => item.pathogen === pathogen);

    const dataset = {
      label: pathogen,
      data: uniqueGeographies.map(geo => {
        const geoData = dataForPathogen.find(item => item.geography === geo);
        return geoData ? parseFloat(geoData.percent_visits) : 0;
      }),
      backgroundColor: getRandomColor(), // Function to generate random colors
      borderWidth: 1,
    };

    datasets.push(dataset);
  });

  // Chart configuration
  const config = {
    type: 'bar',
    data: {
      labels: uniqueGeographies,
      datasets: datasets,
    },
    options: {
      scales: {
        x: { stacked: true },
        y: { stacked: true },
      },
      plugins: {
        title: {
          display: false, // Disable default title display
          text: 'Respiratory Infection Percentages by State', // Title text
          font: {
            size: 16,
          },
        },
      },
    },
  };

  // Get the canvas element
  const ctx = document.getElementById('barChart').getContext('2d');

  // Destroy existing chart (if any) to avoid conflicts
  if (barChart) {
    barChart.destroy();
  }

  // Create new chart and assign to barChart variable
  barChart = new Chart(ctx, config);
}

// Function to generate random colors for chart datasets
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


