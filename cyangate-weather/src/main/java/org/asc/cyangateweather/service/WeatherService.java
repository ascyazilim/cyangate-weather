package org.asc.cyangateweather.service;

import org.asc.cyangateweather.entity.WeatherData;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {

    private final RestTemplate restTemplate;
    private final String apiKey;
    private final String baseUrl = "http://api.openweathermap.org/data/2.5/weather";

    public WeatherService(RestTemplate restTemplate,
                          @Value("${openweather.api.key}") String apiKey) {
        this.restTemplate = restTemplate;
        this.apiKey = apiKey;
    }

    public WeatherData getWeatherForCity(String city) {
        String url = String.format("%s?q=%s&appid=%s&units=metric", baseUrl, city, apiKey);
        try{
            return restTemplate.getForObject(url, WeatherData.class);
        } catch (HttpClientErrorException e) {
            System.err.println("Failed to retrieve data from API: " +e.getMessage());
            return null;
        }
    }
}
