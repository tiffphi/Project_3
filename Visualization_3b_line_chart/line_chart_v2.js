// chart.js

// Initialize areaChart variable
let areaChart;

// Move the script for populating the dropdown to the head section
document.addEventListener('DOMContentLoaded', function () {
  const stateSelect = document.getElementById('stateSelect');

  // Extract unique geographies from the data
  const uniqueGeographies = [...new Set(window.data.map(item => item.geography))];

  // Populate the dropdown with geography options
  uniqueGeographies.forEach(geo => {
    const option = document.createElement('option');
    option.value = geo;
    option.textContent = geo;
    stateSelect.appendChild(option);
  });
});

// Function to update the chart based on selected geography
function updateChart(selectedGeography) {
  // Filter data based on the selected geography
  const filteredData = window.data.filter(item => item.geography === selectedGeography);

  // Extract unique months
  const uniqueMonths = [...new Set(filteredData.map(item => item.week_end.substring(5, 7)))];

  // Prepare datasets for Chart.js
  const datasets = [];

  // Create a dataset for each pathogen
  const uniquePathogens = [...new Set(filteredData.map(item => item.pathogen))];
  uniquePathogens.forEach(pathogen => {
    const dataForPathogen = filteredData.filter(item => item.pathogen === pathogen);

    const dataset = {
      label: pathogen,
      data: uniqueMonths.map(month => {
        const monthData = dataForPathogen.filter(item => item.week_end.substring(5, 7) === month);
        const totalVisits = monthData.reduce((sum, item) => sum + parseFloat(item.percent_visits), 0);
        return totalVisits || 0;
      }),
      backgroundColor: getRandomColor(),
      borderColor: getRandomColor(), // Border color for the line
      borderWidth: 1,
      fill: true, // Fill the area under the line
    };

    datasets.push(dataset);
  });

  let labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  // Chart configuration
  const config = {
    type: 'line',
    data: {
      labels: labels,
      datasets: datasets,
    },
    options: {
      scales: {
        x: { stacked: true },
        y: { stacked: true },
      },
      plugins: {
        title: {
          display: false,
          text: 'Respiratory Infection Percentages by Month',
          font: {
            size: 16,
          },
        },
      },
    },
  };

  // Get the canvas element
  const ctx = document.getElementById('areaChart').getContext('2d');

  // Destroy existing chart (if any) to avoid conflicts
  if (areaChart) {
    areaChart.destroy();
  }

  // Create new chart and assign to areaChart variable
  areaChart = new Chart(ctx, config);
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
