const csvData = [
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "4.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "4.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "4.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "4.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "3.9"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "4.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "4.9"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "3.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "5.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "3.6"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "4.9"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "3.6"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "5.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "4.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "4.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "3.8"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "4.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "5.5"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "6.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "5.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "4.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "4.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "4.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "6.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "6.8"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "5.5"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "6.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "4.5"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "6.5"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "5.9"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "5.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "6"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "6.5"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "5.2"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "4.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "5.6"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "7.5"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "5.8"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "8.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "6.5"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "4.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "5.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "5.8"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "5.6"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "4.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "4.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "5.8"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "7.4"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "5"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "7.8"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "7.8"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "4.8"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "6"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "4.9"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "4.8"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "6"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "6.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "4.8"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "5.6"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "7.3"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "6.8"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "6.6"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "6.7"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "5.1"
  },
  {
    "week_end": "2023-01-07",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "5.4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "3.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "3.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "4.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "3.9"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "4.1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "4.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "4.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "4.1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "4.5"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "4.7"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "4.9"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "3.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "4.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "4.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "4.5"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "4.1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "5.7"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "3.7"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "4.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "3.9"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "3.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "4.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "5.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "5.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "4.1"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "3.8"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "4.6"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "3.9"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "4.4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "4.7"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "4.4"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-01-14",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "4.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "3.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "4.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "3.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "3.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "4.3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "4.9"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "3.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "3.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "4.3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "3.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "3.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "4.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "5"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "3.9"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "4.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "4.2"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-21",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "3.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "3.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "3.8"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "3.9"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "3.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "3.9"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "4.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "4.6"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "3.8"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-01-28",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "3.6"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "3.7"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "3.9"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "3.8"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "4.9"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "4.2"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-04",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "3.8"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "3.7"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "4.5"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-11",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "3.6"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "3.6"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "4.3"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-18",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "3.7"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "3.6"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-02-25",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-04",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-11",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-18",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-03-25",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "3.8"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-04-01",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "4.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-04-08",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-15",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-22",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-04-29",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-06",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-13",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-20",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-05-27",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-03",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-10",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-17",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-06-24",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-01",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-08",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-15",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-22",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "4.3"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-07-29",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "3.7"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "4.7"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-08-05",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "3.8"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "4"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "4.9"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-08-12",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "3.8"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "3.7"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "4.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "3.6"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "4.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "4.4"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "5.5"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "3.7"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "4"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-19",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "5"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "4.5"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "4.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "4.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "3.9"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "3.6"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "5.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "5.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "5.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "4.5"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "3.7"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "4.2"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-08-26",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "4.3"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "4.2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "3.9"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "3.8"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "4.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "3.8"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "4.8"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "5.2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "5"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "4.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "4.5"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "4.3"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-09-02",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "3.9"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "3.6"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "4"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "3.7"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "4.4"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "5.3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "3.9"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "3.9"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "3.7"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-09-09",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "5"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "3.8"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-09-16",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "3.6"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "4.9"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "3.2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-23",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "4.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "5"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-09-30",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "4"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "3.5"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "5.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-07",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "3.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "3.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "4.5"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "5.8"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "3.8"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "5.9"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "3.4"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-14",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "3.6"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "4.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "California",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Colorado",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Connecticut",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Delaware",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "District of Columbia",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Florida",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Georgia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Hawaii",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Illinois",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Indiana",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Kentucky",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Louisiana",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Maryland",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Massachusetts",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Minnesota",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Mississippi",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Montana",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "United States",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Nebraska",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Nevada",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "New Jersey",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "New Mexico",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "New York",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "North Carolina",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Ohio",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Oklahoma",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Pennsylvania",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "South Carolina",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Tennessee",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Texas",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Utah",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Virginia",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "West Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Influenza",
    "geography": "Wyoming",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Alabama",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Alaska",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Arizona",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Arkansas",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "California",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Colorado",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Connecticut",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Delaware",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "District of Columbia",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Florida",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Georgia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Hawaii",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Idaho",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Illinois",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Indiana",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Iowa",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Kansas",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Kentucky",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Louisiana",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Maine",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Maryland",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Massachusetts",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Michigan",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Minnesota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Mississippi",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Montana",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "United States",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Nebraska",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Nevada",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "New Jersey",
    "percent_visits": "0.3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "New Mexico",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "New York",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "North Carolina",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "North Dakota",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Ohio",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Oklahoma",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Oregon",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Pennsylvania",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Rhode Island",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "South Carolina",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Tennessee",
    "percent_visits": "0.8"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Texas",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Utah",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Vermont",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Virginia",
    "percent_visits": "0.5"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "West Virginia",
    "percent_visits": "0.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Wisconsin",
    "percent_visits": "0.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "RSV",
    "geography": "Wyoming",
    "percent_visits": "0"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Alabama",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Alaska",
    "percent_visits": "5.8"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Arizona",
    "percent_visits": "3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Arkansas",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "California",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Colorado",
    "percent_visits": "2.9"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Connecticut",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Delaware",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "District of Columbia",
    "percent_visits": "2.8"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Florida",
    "percent_visits": "4.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Georgia",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Hawaii",
    "percent_visits": "5.5"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Idaho",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Illinois",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Indiana",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Iowa",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Kansas",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Kentucky",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Louisiana",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Maine",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Maryland",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Massachusetts",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Michigan",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Minnesota",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Mississippi",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Montana",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "United States",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Nebraska",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Nevada",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "New Jersey",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "New Mexico",
    "percent_visits": "4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "New York",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "North Carolina",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "North Dakota",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Ohio",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Oklahoma",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Oregon",
    "percent_visits": "2.2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Pennsylvania",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Rhode Island",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "South Carolina",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Tennessee",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Texas",
    "percent_visits": "2.6"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Utah",
    "percent_visits": "2.3"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Vermont",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Virginia",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "West Virginia",
    "percent_visits": "2.7"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Wisconsin",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-21",
    "pathogen": "Combined",
    "geography": "Wyoming",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Alabama",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Alaska",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Arizona",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Arkansas",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "California",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Colorado",
    "percent_visits": "2.4"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Connecticut",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Delaware",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "District of Columbia",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Florida",
    "percent_visits": "0.9"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Georgia",
    "percent_visits": "0.7"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Hawaii",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Idaho",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Illinois",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Indiana",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Iowa",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Kansas",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Kentucky",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Louisiana",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Maine",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Maryland",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Massachusetts",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Michigan",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Minnesota",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Mississippi",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Montana",
    "percent_visits": "2"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "United States",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Nebraska",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Nevada",
    "percent_visits": "1.7"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "New Jersey",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "New Mexico",
    "percent_visits": "4.3"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "New York",
    "percent_visits": "1.1"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "North Carolina",
    "percent_visits": "1.5"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "North Dakota",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Ohio",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Oklahoma",
    "percent_visits": "1.6"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Oregon",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Pennsylvania",
    "percent_visits": "1.3"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Rhode Island",
    "percent_visits": "1"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "South Carolina",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Tennessee",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Texas",
    "percent_visits": "1.2"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Utah",
    "percent_visits": "1.9"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Vermont",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Virginia",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "West Virginia",
    "percent_visits": "2.5"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Wisconsin",
    "percent_visits": "1.8"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "COVID-19",
    "geography": "Wyoming",
    "percent_visits": "2.1"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "Influenza",
    "geography": "Alabama",
    "percent_visits": "1.4"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "Influenza",
    "geography": "Alaska",
    "percent_visits": "5.4"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "Influenza",
    "geography": "Arizona",
    "percent_visits": "0.4"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "Influenza",
    "geography": "Arkansas",
    "percent_visits": "0.6"
  },
  {
    "week_end": "2023-10-28",
    "pathogen": "Influenza",
    "geography": "California",
  },
  {