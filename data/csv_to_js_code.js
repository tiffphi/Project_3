const fs = require('fs');
const csv = require('csv-parser');

// Read the CSV file
const csvFilePath = '/Users/tiffanyphipps/Desktop/Project_3/2023_Respiratory_Virus_Response_-_NSSP_Emergency_Department_Visits_-_COVID-19__Flu__RSV__Combined_20240110.csv';
const dataArray = [];

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    // Process each row of the CSV
    dataArray.push(row);
  })
  .on('end', () => {
    // Write the parsed data to a JavaScript file
    const jsFileContent = `const csvData = ${JSON.stringify(dataArray, null, 2)};\nmodule.exports = csvData;`;

    fs.writeFileSync('output.js', jsFileContent);

    console.log('Conversion completed. Data written to output.js');
  });