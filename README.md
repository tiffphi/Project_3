# Project_3
Data Visualization Track: Healthcare - CDC 2023 Respiratory Virus Response

Group Members: Tiffany Phipps, Geysha Cabreja, Mohammed Afzal, Shaon Shill

Powerpoint Presentation Link: https://docs.google.com/presentation/d/1rfBRsHRguMmwBgkqh9OJzQ2A67i0JV2v1nn-8K4rGWQ/edit?usp=sharing 

An overview of the project and its purpose:

Our Team has chosen the Data Visualization Track. We’re going to analyze 2023 Respiratory Virus Response data across the United States for a subset of months obtained through the CDC. We will likely merge state population information with the dataset and create visualizations based on some of the project ideas listed below.

We feel our visualizations can help others in various ways. One of which, when traveling, one can look to see which states have higher instances of COVID-19 cases. One can also visualize week to week, which weeks have higher rates, and also visualize, specifically for a state, which months to consider as options if sickness is a concern. 

Instructions on how to use and interact with the project

Visualization 1 - Map Representation Instructions:

- This visualization represents the COVID information for all the States of the United States in a Map representation.
- Run the index.html file and it will run the interactive_covid_map_year.js file
- When it opens, it displays the United States map. This is an interactive map, when the user clicks the state, they can see the COVID details of the selected state.
- The data represents the percent_value of COVID sum of the 2023 year for each state in the year 2023.
- Below is the breakdown :
    - Red - Percent Visits Total greater than 100
    - Orange - Percent Visits Total greater than 75 and less than or equal to 100
    - Yellow - Percent Visits Total greater than 50 and less than or equal to 75


Visualization 2 - Stacked Bar Chart Instructions:

- This visualization represents weekly respiratory infection percentages by state.
- Run the index.html file and it will run the chart.js file.
- Once it opens in the browser, it will display a key at the top with corresponding colors for each pathogen.
- In the dropdown menu, select a week_end date to display a stacked bar chart showing percentages for each of the pathogens during that week.
- If you hover over the bars, depending on what section you're over, it will display the percent of cases for the pathogen and the state.
- You also have the ability to toggle the pathogens on and off by clicking on them in the key. 

Visualization_3a_Chart_2 Instructions:

-	This visualization represents the pathogen information broken down by State, month & pathogen in a stacked view.  
-	Run the index.html file and it will run the chart_v2.js file
-	When it opens, you have the ability to select a state from the dropdown menu. 
-	When you select a state, a bar chart visualization will populate in the browser.
-	A key for pathogens (datasets) represented shows up at the top of the bar chart showing the corresponding color.
-	The data represents the percent_value sum for each pathogen & each month in the year 2023.
-	In this output, you have the ability to do a few things:
o	You can hover over the bars to see the individual pathogen percent_visits sum for the month for that state. 
o	You can also click the individual pathogens in the key for the chart to toggle them on and off the chart. 
o	Lastly, you can change the state to see the same output for any other state within the dataset.

Visualization 3b – Line Chart Instructions: 

-	This visualization represents the pathogen information broken down by State, month & pathogen in a stacked line view.  
-	Run the index.html file and it will run the line_chart_v2.js file
-	When it opens, you have the ability to select a state from the dropdown menu. 
-	When you select a state, a line chart visualization will populate in the browser.
-	A key for pathogens (datasets) represented shows up at the top of the bar chart showing the corresponding color.
-	The data represents the percent_value sum for each pathogen & each month in the year 2023.
-	In this output, you have the ability to do a few things:
o	You can hover over a small dot above each month to see the individual pathogen percent_visits sum for the month for that state. 
o	You can also click the individual pathogens in the key for the chart to toggle them on and off the chart. 
o	Lastly, you can change the state to see the same output for any other state within the dataset.

At least one paragraph summarizing efforts for ethical considerations made in the project:

When dealing with healthcare information, there are a lot of concerns, to name a couple, privacy and data retention come to mind. Some things that we would consider are HIPAA regulations, Data Privacy and other related guidelines. In reviewing our data, we concluded that the CDC did a great job in limiting the data provided in this data set so that these concerns were not top of mind.  Due to actual patient information not being included and any information other than state data and percent_visits, we didn’t have to be too concerned with any of those regulations. 

A few biases we thought of that could be considered but not validated with the data we have are around an understanding of the methods the CDC utilized to acquire the data or the demographics. We are not sure if the data we have represents all the Emergency Departments within each of the states we have within the dataset.  It more than likely does not, therefore because we're not able to fully understand our sample size, our visualization could be skewed depending on those factors. In addition, the missing states and state population could lend itself to a bias. Back when Covid-19 was top of mind for the country, news outlets would share which states were hot zones for the virus. However, with missing state data it's difficult to report on a state that has no information. Those states could have been hot zones or had minimal infections, but if a hot zone it would not have been shared. In addition, because we're looking at percentages, states with lower populations could show higher rates because it's a smaller sample size in comparison to a state with a larger population that may in fact have much more cases. All of these examples could be biased' when considering our data set and could impact someone's decision on travel using the scenario that we listed in our presentation. 


References for the data source(s)

- 2023 Respiratory Virus Response - NSSP Emergency Department Visits - COVID-19, Flu, RSV, Combined
 https://data.cdc.gov/Public-Health-Surveillance/2023-Respiratory-Virus-Response-NSSP-Emergency-Dep/vutn-jzwm/about_data

- https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/us-state-boundaries/exports/geojson?lang=en&timezone=America%2FNew_York

References for any code used that is not your own

- https://www.chartjs.org/docs/latest/getting-started/usage.html
- https://chat.openai.com/
- Code from school activities
