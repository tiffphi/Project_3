import pandas as pd
import json

# Read CSV file into a DataFrame
csv_file = 'satewise_data.csv'  # Replace with the path to your CSV file
df = pd.read_csv(csv_file)

# Convert DataFrame to JSON
data_json = df.to_json(orient='records')

# Write JSON data to a JavaScript file (data.js)
with open('satewise_data.js', 'w') as file:
    file.write(f'const jsonData = {data_json};')

print('data.js file created successfully.')