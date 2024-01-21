// chart.js

// Initialize barChart variable
let barChart;

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
      borderWidth: 1,
    };

    datasets.push(dataset);
  });

  let labels = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  // Chart configuration
  const config = {
    type: 'bar',
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


// chart.js

// Initialize barChart variable
// let barChart;


// // Move the script for populating the dropdown to the head section
// document.addEventListener('DOMContentLoaded', function () {
//   const stateSelect = document.getElementById('stateSelect');

//   // Extract unique week_end values from the data
//   const uniqueStates = [...new Set(window.data.map(item => item.geography))];

//   // Populate the dropdown with week_end options
//   uniqueStates.forEach(state => {
//     const option = document.createElement('option');
//     option.value = state;
//     option.textContent = state;
//     stateSelect.appendChild(option);
//   });
// });


// // Function to update the chart based on selected geography
// function updateChart(pathogenType) {
//   // Filter data based on the selected state
//   const filteredData = window.data.filter(item => item.geography === pathogenType);



//   // Extract unique geographies
//   const uniqueGeographies = [...new Set(filteredData.map(item => item.geography))];

//   // Prepare datasets for Chart.js
//   const datasets = [];

//   // Create a dataset for each pathogen
//   const uniquePathogens = [...new Set(filteredData.map(item => item.pathogen))];
//   uniquePathogens.forEach(pathogen => {
//     const dataForPathogen = filteredData.filter(item => item.pathogen === pathogen);
  

//     const dataset = {
//       label: pathogen,
//       data: uniqueGeographies.map(geo => {
//         const geoData = dataForPathogen.find(item => item.geography === geo);
//         return geoData ? parseFloat(geoData.percent_visits) : 0;
//       }),
//       backgroundColor: getRandomColor(), // Function to generate random colors
//       borderWidth: 1,
//     };

//     datasets.push(dataset);
//     const datasetsByMonth = [];
//     // Loop through months (1 to 12) and filter data for each month
//     for (let month = 1; month <= 12; month++) {
//       const targetMonth = month < 10 ? '0' + month.toString() : month.toString(); // Format as '01', '02', ..., '12'
    
//       // Call the custom function with filter() and pass the target month
//       const Covid_19 = csvData.filter(item => pathogenCovid(item, targetMonth));
    
//       // Create a dataset for the current month
//       const dataset = {
//         label: `Month ${targetMonth}`,
//         data: Covid_19.map(item => parseFloat(item.percent_visits) || 0), // Extract percent_visits and convert to number
//         backgroundColor: getRandomColor(), // Function to generate random colors
//         borderWidth: 1,
//       };
    
//       datasetsByMonth.push(dataset);
//     }

//   });
 
//   // Chart configuration
//   const config = {
//     type: 'bar',
//     data: {
//       labels: uniqueGeographies,
//       datasets: datasets,
//     },
//     options: {
//       scales: {
//         x: { stacked: true },
//         y: { stacked: true },
//       },
//       plugins: {
//         title: {
//           display: false, // Disable default title display
//           text: 'Respiratory Infection Percentages by State', // Title text
//           font: {
//             size: 16,
//           },
//         },
//       },
//     },
//   };

//   // Get the canvas element
//   const ctx = document.getElementById('barChart').getContext('2d');

//   // Destroy existing chart (if any) to avoid conflicts
//   if (barChart) {
//     barChart.destroy();
//   }

//   // Create new chart and assign to barChart variable
//   barChart = new Chart(ctx, config);
// }

// // Function to generate random colors for chart datasets
// function getRandomColor() {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }


