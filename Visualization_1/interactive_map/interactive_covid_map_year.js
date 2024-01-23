// fetchAndJoinData.js
// const jsonData = [
//     { pathogen: 'Influenza', geography: 'Alabama', sum: 64.6 },
//     { pathogen: 'RSV', geography: 'Alabama', sum: 15.6 },
//     { pathogen: 'Combined', geography: 'Alabama', sum: 166.2 },
//     { pathogen: 'COVID-19', geography: 'Alabama', sum: 87.4 }
//     // Add more data as needed
// ];

const jsonData = [{"pathogen":"Influenza","geography":"Idaho","sum":23.2},{"pathogen":"Influenza","geography":"Oregon","sum":13.6},{"pathogen":"Combined","geography":"New Jersey","sum":104.7},{"pathogen":"Influenza","geography":"South Carolina","sum":70.3},{"pathogen":"COVID-19","geography":"Alaska","sum":91.5},{"pathogen":"Influenza","geography":"Alaska","sum":63.1},{"pathogen":"Combined","geography":"Oregon","sum":110.3},{"pathogen":"Combined","geography":"Oklahoma","sum":99.4},{"pathogen":"Combined","geography":"Montana","sum":123.0},{"pathogen":"RSV","geography":"Nevada","sum":8.1},{"pathogen":"Combined","geography":"Louisiana","sum":165.8},{"pathogen":"RSV","geography":"Virginia","sum":11.4},{"pathogen":"RSV","geography":"Wyoming","sum":10.5},{"pathogen":"COVID-19","geography":"Texas","sum":75.9},{"pathogen":"COVID-19","geography":"Iowa","sum":112.4},{"pathogen":"COVID-19","geography":"Ohio","sum":75.5},{"pathogen":"RSV","geography":"Kentucky","sum":18.1},{"pathogen":"RSV","geography":"Massachusetts","sum":14.1},{"pathogen":"COVID-19","geography":"Wyoming","sum":88.3},{"pathogen":"RSV","geography":"Maine","sum":4.3},{"pathogen":"RSV","geography":"Florida","sum":13.7},{"pathogen":"COVID-19","geography":"Virginia","sum":89.0},{"pathogen":"COVID-19","geography":"New Mexico","sum":112.1},{"pathogen":"Combined","geography":"Alaska","sum":174.9},{"pathogen":"RSV","geography":"Kansas","sum":8.0},{"pathogen":"COVID-19","geography":"United States","sum":77.6},{"pathogen":"RSV","geography":"Arkansas","sum":18.2},{"pathogen":"Influenza","geography":"Arizona","sum":45.4},{"pathogen":"Influenza","geography":"Alabama","sum":64.6},{"pathogen":"RSV","geography":"Alabama","sum":15.6},{"pathogen":"Influenza","geography":"Mississippi","sum":61.2},{"pathogen":"Influenza","geography":"Colorado","sum":34.6},{"pathogen":"Influenza","geography":"Rhode Island","sum":18.8},{"pathogen":"COVID-19","geography":"Hawaii","sum":120.1},{"pathogen":"Influenza","geography":"New York","sum":24.4},{"pathogen":"Combined","geography":"Nebraska","sum":83.7},{"pathogen":"Combined","geography":"North Carolina","sum":177.7},{"pathogen":"Influenza","geography":"New Jersey","sum":30.1},{"pathogen":"Influenza","geography":"Massachusetts","sum":24.1},{"pathogen":"COVID-19","geography":"Massachusetts","sum":85.2},{"pathogen":"RSV","geography":"Minnesota","sum":14.2},{"pathogen":"RSV","geography":"Michigan","sum":8.8},{"pathogen":"RSV","geography":"Illinois","sum":13.2},{"pathogen":"COVID-19","geography":"North Dakota","sum":83.5},{"pathogen":"Combined","geography":"Pennsylvania","sum":94.8},{"pathogen":"Combined","geography":"Massachusetts","sum":122.2},{"pathogen":"Combined","geography":"South Carolina","sum":168.0},{"pathogen":"RSV","geography":"Montana","sum":8.9},{"pathogen":"Influenza","geography":"Kentucky","sum":25.4},{"pathogen":"RSV","geography":"Hawaii","sum":9.2},{"pathogen":"Influenza","geography":"Wisconsin","sum":20.0},{"pathogen":"RSV","geography":"United States","sum":11.1},{"pathogen":"Combined","geography":"Alabama","sum":166.2},{"pathogen":"Combined","geography":"Rhode Island","sum":91.5},{"pathogen":"Influenza","geography":"Connecticut","sum":19.3},{"pathogen":"Combined","geography":"Wisconsin","sum":105.8},{"pathogen":"Combined","geography":"Nevada","sum":106.4},{"pathogen":"Influenza","geography":"Montana","sum":28.7},{"pathogen":"COVID-19","geography":"North Carolina","sum":91.8},{"pathogen":"RSV","geography":"Connecticut","sum":7.4},{"pathogen":"Influenza","geography":"Virginia","sum":38.0},{"pathogen":"COVID-19","geography":"Arkansas","sum":64.5},{"pathogen":"Combined","geography":"Georgia","sum":107.7},{"pathogen":"COVID-19","geography":"Tennessee","sum":73.3},{"pathogen":"RSV","geography":"Wisconsin","sum":8.2},{"pathogen":"Influenza","geography":"Tennessee","sum":41.1},{"pathogen":"RSV","geography":"Indiana","sum":10.4},{"pathogen":"Influenza","geography":"Nebraska","sum":13.2},{"pathogen":"Combined","geography":"Iowa","sum":151.2},{"pathogen":"RSV","geography":"New Mexico","sum":15.2},{"pathogen":"Combined","geography":"Idaho","sum":111.1},{"pathogen":"RSV","geography":"Vermont","sum":10.1},{"pathogen":"Influenza","geography":"Florida","sum":82.4},{"pathogen":"Combined","geography":"Colorado","sum":116.8},{"pathogen":"COVID-19","geography":"Maine","sum":87.7},{"pathogen":"COVID-19","geography":"Nevada","sum":67.4},{"pathogen":"COVID-19","geography":"Colorado","sum":74.4},{"pathogen":"COVID-19","geography":"Nebraska","sum":64.4},{"pathogen":"Influenza","geography":"North Dakota","sum":28.3},{"pathogen":"Combined","geography":"New Mexico","sum":166.4},{"pathogen":"Combined","geography":"Indiana","sum":114.2},{"pathogen":"Influenza","geography":"Utah","sum":38.0},{"pathogen":"COVID-19","geography":"Michigan","sum":83.9},{"pathogen":"Combined","geography":"Vermont","sum":116.2},{"pathogen":"Influenza","geography":"Michigan","sum":21.7},{"pathogen":"Combined","geography":"United States","sum":126.9},{"pathogen":"RSV","geography":"Pennsylvania","sum":9.0},{"pathogen":"Combined","geography":"Tennessee","sum":129.6},{"pathogen":"RSV","geography":"Oregon","sum":9.7},{"pathogen":"COVID-19","geography":"New Jersey","sum":66.0},{"pathogen":"Influenza","geography":"Wyoming","sum":33.2},{"pathogen":"Influenza","geography":"Pennsylvania","sum":22.8},{"pathogen":"COVID-19","geography":"California","sum":68.4},{"pathogen":"RSV","geography":"Tennessee","sum":17.3},{"pathogen":"COVID-19","geography":"Kansas","sum":69.2},{"pathogen":"Combined","geography":"Mississippi","sum":149.7},{"pathogen":"RSV","geography":"Alaska","sum":22.0},{"pathogen":"COVID-19","geography":"Montana","sum":86.4},{"pathogen":"Influenza","geography":"United States","sum":39.2},{"pathogen":"RSV","geography":"Mississippi","sum":15.2},{"pathogen":"Influenza","geography":"Maine","sum":15.7},{"pathogen":"Influenza","geography":"Vermont","sum":17.4},{"pathogen":"Influenza","geography":"District of Columbia","sum":22.6},{"pathogen":"RSV","geography":"Maryland","sum":14.6},{"pathogen":"Combined","geography":"Kentucky","sum":127.2},{"pathogen":"Combined","geography":"Florida","sum":183.5},{"pathogen":"COVID-19","geography":"Illinois","sum":87.0},{"pathogen":"Influenza","geography":"Ohio","sum":19.1},{"pathogen":"RSV","geography":"Ohio","sum":6.6},{"pathogen":"RSV","geography":"North Carolina","sum":13.2},{"pathogen":"Combined","geography":"North Dakota","sum":119.7},{"pathogen":"Influenza","geography":"California","sum":23.3},{"pathogen":"Combined","geography":"Illinois","sum":125.1},{"pathogen":"COVID-19","geography":"Florida","sum":89.8},{"pathogen":"Combined","geography":"Delaware","sum":114.2},{"pathogen":"Influenza","geography":"Texas","sum":51.5},{"pathogen":"RSV","geography":"District of Columbia","sum":19.0},{"pathogen":"RSV","geography":"Delaware","sum":19.8},{"pathogen":"Combined","geography":"Hawaii","sum":210.9},{"pathogen":"RSV","geography":"West Virginia","sum":16.3},{"pathogen":"Influenza","geography":"Indiana","sum":27.1},{"pathogen":"Combined","geography":"Minnesota","sum":127.3},{"pathogen":"COVID-19","geography":"Alabama","sum":87.4},{"pathogen":"COVID-19","geography":"Pennsylvania","sum":63.6},{"pathogen":"COVID-19","geography":"Vermont","sum":89.1},{"pathogen":"Influenza","geography":"Oklahoma","sum":15.4},{"pathogen":"Combined","geography":"Maryland","sum":116.3},{"pathogen":"COVID-19","geography":"Oklahoma","sum":71.8},{"pathogen":"Influenza","geography":"West Virginia","sum":21.2},{"pathogen":"COVID-19","geography":"West Virginia","sum":99.9},{"pathogen":"Combined","geography":"California","sum":100.3},{"pathogen":"Combined","geography":"West Virginia","sum":135.8},{"pathogen":"RSV","geography":"Iowa","sum":13.2},{"pathogen":"RSV","geography":"Georgia","sum":9.6},{"pathogen":"COVID-19","geography":"Utah","sum":82.2},{"pathogen":"COVID-19","geography":"South Carolina","sum":86.9},{"pathogen":"RSV","geography":"Idaho","sum":8.7},{"pathogen":"Influenza","geography":"Kansas","sum":17.2},{"pathogen":"RSV","geography":"North Dakota","sum":8.8},{"pathogen":"Influenza","geography":"North Carolina","sum":76.4},{"pathogen":"Combined","geography":"Michigan","sum":113.5},{"pathogen":"Influenza","geography":"Delaware","sum":22.0},{"pathogen":"RSV","geography":"New Jersey","sum":9.1},{"pathogen":"Combined","geography":"Virginia","sum":137.0},{"pathogen":"RSV","geography":"Texas","sum":17.3},{"pathogen":"COVID-19","geography":"Kentucky","sum":84.9},{"pathogen":"Combined","geography":"Arkansas","sum":111.9},{"pathogen":"RSV","geography":"Colorado","sum":9.0},{"pathogen":"Influenza","geography":"Illinois","sum":26.6},{"pathogen":"Combined","geography":"Utah","sum":128.5},{"pathogen":"COVID-19","geography":"Idaho","sum":80.2},{"pathogen":"RSV","geography":"Utah","sum":8.8},{"pathogen":"RSV","geography":"California","sum":8.7},{"pathogen":"Influenza","geography":"Nevada","sum":32.3},{"pathogen":"Combined","geography":"Maine","sum":108.0},{"pathogen":"Combined","geography":"Arizona","sum":141.3},{"pathogen":"RSV","geography":"Nebraska","sum":6.4},{"pathogen":"COVID-19","geography":"Oregon","sum":87.9},{"pathogen":"Combined","geography":"Connecticut","sum":110.2},{"pathogen":"RSV","geography":"Arizona","sum":6.8},{"pathogen":"Influenza","geography":"Arkansas","sum":30.8},{"pathogen":"COVID-19","geography":"Mississippi","sum":75.6},{"pathogen":"RSV","geography":"Louisiana","sum":13.8},{"pathogen":"Combined","geography":"Wyoming","sum":130.0},{"pathogen":"COVID-19","geography":"Maryland","sum":74.4},{"pathogen":"Influenza","geography":"Maryland","sum":27.3},{"pathogen":"Influenza","geography":"Iowa","sum":28.6},{"pathogen":"COVID-19","geography":"New York","sum":62.0},{"pathogen":"COVID-19","geography":"Minnesota","sum":91.0},{"pathogen":"RSV","geography":"Rhode Island","sum":9.4},{"pathogen":"Combined","geography":"Texas","sum":142.4},{"pathogen":"Combined","geography":"Ohio","sum":101.2},{"pathogen":"Influenza","geography":"New Mexico","sum":40.9},{"pathogen":"COVID-19","geography":"Louisiana","sum":86.7},{"pathogen":"COVID-19","geography":"Connecticut","sum":83.0},{"pathogen":"COVID-19","geography":"Georgia","sum":51.2},{"pathogen":"RSV","geography":"South Carolina","sum":11.5},{"pathogen":"RSV","geography":"Oklahoma","sum":12.5},{"pathogen":"Influenza","geography":"Georgia","sum":48.1},{"pathogen":"Influenza","geography":"Louisiana","sum":65.8},{"pathogen":"RSV","geography":"New York","sum":8.0},{"pathogen":"COVID-19","geography":"Rhode Island","sum":63.9},{"pathogen":"Combined","geography":"Kansas","sum":94.3},{"pathogen":"Combined","geography":"New York","sum":94.1},{"pathogen":"COVID-19","geography":"Arizona","sum":90.0},{"pathogen":"Influenza","geography":"Minnesota","sum":22.6},{"pathogen":"COVID-19","geography":"Wisconsin","sum":77.5},{"pathogen":"COVID-19","geography":"Indiana","sum":77.0},{"pathogen":"COVID-19","geography":"Delaware","sum":72.4},{"pathogen":"Influenza","geography":"Hawaii","sum":83.5},{"pathogen":"Combined","geography":"District of Columbia","sum":106.9},{"pathogen":"COVID-19","geography":"District of Columbia","sum":66.9}];

const geoJsonUrl = 'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/us-state-boundaries/exports/geojson?lang=en&timezone=America%2FNew_York';


// filters of jsonData down to Covid_19 results only
let Covid = [];

function pathogenCovid(item) {
    return item.pathogen === 'COVID-19';
}

// Call the custom function with filter()
let Covid_19 = jsonData.filter(pathogenCovid);

console.log(Covid_19);

//Adjusted this code below to join the data from the Covid_19 array instead of the jsonData Array, new output will only be related to Covid_19
fetch(geoJsonUrl)
    .then(response => response.json())
    .then(geojsonData => {
        var geojsonLookup = {};
        geojsonData.features.forEach(feature => {
            var properties = feature.properties;
            geojsonLookup[properties.name] = properties;
        });

        var joinedData = Covid_19.map(item => ({ ...item, ...geojsonLookup[item.geography] }));

        // Log the joined data to the console for debugging
        console.log(joinedData);

        // Use joinedData as needed
        // displayJoinedData(joinedData);
        createMap(geojsonData, joinedData);
    })
    .catch(error => console.error('Error fetching GeoJSON:', error));

// Function to display joined data
function displayJoinedData(data) {
    var joinedDataList = document.getElementById('joinedDataList');
    data.forEach(item => {
        var listItem = document.createElement('li');
        listItem.textContent = `Pathogen: ${item.pathogen}, Geography: ${item.geography}, Sum: ${item.sum}, State Capital: ${item.capital}, State Population: ${item.population}`;
        joinedDataList.appendChild(listItem);
    });
}

function chooseColor(stateName, joinedData) {
    const stateData = joinedData.find(item => item.geography === stateName);

    if (stateData) {
        const sum = stateData.sum;
        if (sum <= 75) return "yellow";
        else if (sum <= 100) return "#FFA500"; // dark orange
        else return "red";
    } else {
        // Handle the case where stateData is not found
        return "gray";
    }
}


// Function to create a Leaflet map
function createMap(geojsonData, joinedData) {
    var map = L.map('map').setView([37.8, -96], 4.5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);


    L.geoJson(geojsonData, {
        style: function (feature) {
            return { color: 'gray', 
            weight: 2,
            opacity: .1,
            color: 'black',
            //call the chooseColor() function to decide which color to show
            fillColor: chooseColor(feature.properties.name, joinedData),
            fillOpacity: 0.4 };
        },
        onEachFeature: function (feature, layer) {
            const stateName = feature.properties.name;
            const stateData = joinedData.filter(item => item.geography === stateName);

            // Customize the popup content based on your data
            let popupContent = `<h1>${stateName}</h1><hr>`;

            // Check if stateData is defined and an array
            if (Array.isArray(stateData) && stateData.length > 0) {
                stateData.forEach(pathogenData => {
                    popupContent += `<h2>Pathogen: ${pathogenData.pathogen}</h2>`;
                    popupContent += `<p>Percent Visits Sum: ${pathogenData.sum.toFixed(2)}</p>`;
                });
            } else {
                popupContent += `<p>No pathogen information available</p>`;
            }

            // Giving each feature a popup with customized information
            layer.bindPopup(popupContent);
        }
    }).addTo(map);

    // Create a legend control
const legend = L.control({ position: 'bottomright' });

// Add content to the legend
legend.onAdd = function (map) {
  const div = L.DomUtil.create('div', 'legend');
  // Add legend content here
  div.innerHTML = '<h7>Legend - Percent Visits <hr><h7>Red - Total greater than 100</h9><hr><h9>Orange - Total greater than 75 and less than or equal to 100 </h9><hr><h9>Yellow - Total greater than 50 and less than or equal to 75</h9><hr><h9>Gray - Data Unknown</h9>';
  return div;
};

// Add the legend control to the map
legend.addTo(map);

}


