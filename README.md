# Contact Management Application

## Project Overview
The Contact Management Application is designed to help users manage their contacts efficiently. In addition to basic contact management functionalities, the application also provides features like Maps and Charts to visualize COVID-19 data.

## Features
1. **Contact Management:**
    - Add new contacts with first name, last name, and status (active/inactive).
    - Edit or delete existing contacts.
2. **Maps:**
    - Display a map with markers for different countries.
    - Each marker represents a country and shows COVID-19 data like active cases, recovered cases, and deaths.
3. **Charts:**
    - Visualize COVID-19 data trends using line charts.
    - Includes historical information on cases, deaths, and recoveries.

## Technology Stack
- **Frontend:** React.js, Redux Toolkit, React-Query, React Router, Tailwind CSS.
- **Map Visualization:** Leaflet.js for mapping library.
- **Chart Visualization:** Chart.js for charting library.
- **API:** Uses disease.sh API to fetch COVID-19 data.

## API Endpoint Explanation
The application interacts with the disease.sh API to fetch COVID-19 data and display it to the users. Here's how the API endpoints are utilized in your project:

1. **World Data:**
    - **Endpoint:** `https://disease.sh/v3/covid-19/all`
    - **Description:** This endpoint provides the total COVID-19 statistics worldwide, including total cases, active cases, recovered cases, and total deaths. The application fetches this data to display an overview of the global situation.
2. **Country Data:**
    - **Endpoint:** `https://disease.sh/v3/covid-19/countries`
    - **Description:** This endpoint retrieves COVID-19 data for each country, including active cases, recovered cases, and deaths. The application utilizes this data to plot markers on the map for each country and display relevant information when users interact with the markers.
3. **Graph Data:**
    - **Endpoint:** `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
    - **Description:** This endpoint provides historical COVID-19 data, including cases, deaths, and recoveries, for all countries. The application uses this data to generate line charts, allowing users to visualize the trends and analyze the progression of the pandemic over time.
