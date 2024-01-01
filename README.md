# Live Weather Application

This project is a live weather application built using Spring Boot for the backend and React for the frontend. It utilizes the OpenWeather API to fetch current weather data for a specified city.

## Backend - Spring Boot

### Structure

- **WeatherData Entity**: Represents the structure of the weather data fetched from the OpenWeather API.
- **WeatherService Service**: Contains the logic to call the OpenWeather API using `RestTemplate`.
- **WeatherController Controller**: Provides an endpoint to retrieve weather data for a given city.

### Configuration

The application uses `application.properties` to store the OpenWeather API key and default city information.

### Endpoints

- **GET `/weather`**: Accepts a city parameter and returns the current weather data for that city.

## Frontend - React

### Structure

- **Weather Component**: A React component to interact with the backend service. It includes a dropdown to select a city and a display area for the weather information.

### Features

- **City Selection**: Users can select a city from a dropdown list to view its current weather.
- **Weather Display**: Displays the city name, country, temperature, and weather description.

### Interaction with Backend

The frontend makes REST calls to the backend service to fetch weather data. The frequency of these calls can be customized.

## Installation and Setup

### Backend

1. **Clone the repository**: `git clone <repository-url>`
2. **Navigate to the backend directory**: `cd path-to-backend`
3. **Install dependencies**: Run `mvn install` to install Java dependencies.
4. **Set up application properties**: 
   - Open `src/main/resources/application.properties`.
   - Set the `openweather.api.key` to your OpenWeather API key.
   - Optionally, change the default city and country.
5. **Run the application**: Execute `mvn spring-boot:run`.

### Frontend

1. **Navigate to the frontend directory**: `cd path-to-frontend`.
2. **Install dependencies**: Run `npm install`.
3. **Run the application**: Execute `npm start`.
4. **Access the application**: Open `http://localhost:3000` in your browser.

## Usage

- **Select a City**: Use the dropdown menu to select a city.
- **View Weather Data**: The application will display the current weather information, including temperature, humidity, and a brief description.

## Technologies Used

- **Backend**: Spring Boot, Java
- **Frontend**: React, JavaScript, Bootstrap (for styling)
- **API**: OpenWeather API for live weather data

## Contributing

Contributions to the project are welcome. Please follow the standard GitHub pull request process to propose changes.
