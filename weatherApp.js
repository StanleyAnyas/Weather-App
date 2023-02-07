/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */
let cityInput = document.getElementById("city-input");
let minTemp = document.getElementById("min-temp");
let maxTemp = document.getElementById("max-temp");
let temp = document.getElementById("temp");
let weatherType = document.getElementById("weather-type")
let cityName = document.getElementById("city-name")

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const fullURL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
    return fetch(fullURL)
    .then((response) => {
       response.json()
       console.log(response.main.temp);
        console.log(response.weather[0].main);

    }).catch((error) => {
        console.log(error);
        console.log("Something went wrong while fetching the weather data");
      });
    //CODE GOES HERE
    // return getWeatherData()
}

const searchCity = () => {
    getWeatherData(cityInput)
        .then((res) => {
            showWeatherData(res)
        })
        .catch((error) => {
            console.error(error)
            console.log("Something went wrong while searching for the city")
        })
    // CODE GOES HERE

}
const showWeatherData = (weatherData) => {
    if(!weatherData) {
        console.error("No weather data found")
        return;
    }
    //CODE GOES HERE
    minTemp.innerHTML = weatherData.main.temp_min
    maxTemp.innerHTML = weatherData.main.temp_max
    temp.innerHTML = weatherData.main.temp
    weatherType.innerHTML = weatherData.weather[0].main
    cityName.innerHTML = weatherData.name

}

