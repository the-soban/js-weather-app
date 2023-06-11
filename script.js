const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector('#search-btn');
const weather = document.querySelector('.weather');
const errorMsg = document.querySelector('.error-msg');
const weatherImg = document.querySelector(".weather-img");
const tempValue = document.querySelector(".temp");
const descValue = document.querySelector(".desc");
const weatherDetails = document.querySelector(".weather-details");
const humidityValue = document.querySelector(".humidity-value");
const windValue = document.querySelector(".wind-value");

getWeather = async (city) => {
    try{
    const apiKey = "1806cf657cd37ca082b9cdde31ea8870";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    tempValue.innerHTML = "<p style='font-size: 1.1rem;'>wait for response...</p>";
    descValue.innerHTML = "<p style='font-size: 1rem;'>loading...</p>";
    const weatherData = await fetch(`${apiUrl}`).then(response => response.json());

    if(weatherData.cod === `404`){
        errorMsg.style.display = "flex";
        weatherImg.src = "./images/404.png";
        weatherDetails.style.display = "none";
        tempValue.innerHTML = ``;
        descValue.innerHTML = ``;
        return;
    }
    weather.style.display = "flex";    
    tempValue.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}<sup>°C</sup>`;
    descValue.innerHTML = `${weatherData.weather[0].description}`;
    humidityValue.innerHTML = `${weatherData.main.humidity}%`;
    windValue.innerHTML = `${Math.round(weatherData.wind.speed)} km/H`;

    switch(weatherData.weather[0].main){
        case 'Clouds':
            weatherImg.src = "./images/cloud.png";
            break;
        case 'Broken Clouds':
            weatherImg.src = "./images/cloud.png";
            break;
        case 'Clear':
            weatherImg.src = "./images/clear.png";
            break;
        case 'Rain':
            weatherImg.src = "./images/rain.png";
            break;
        case 'Mist':
            weatherImg.src = "./images/mist.png";
            break;
        case 'Snow':
            weatherImg.src = "./images/snow.png";
            break;
        case 'Thunderstorm':
            weatherImg.src = "./images/snow.png";
            break;

    }


        } catch(error){
    console.log(error);
    }
}

searchBtn.addEventListener('click', ()=>{
    getWeather(searchBox.value);

});