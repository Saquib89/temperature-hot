// api.openweathermap.org/data/2.5/weather?q={City Name}&units=metric&appid={API Key}
const api = {
    key: 'c3bb6757c5958f6fd254a47f4a973dd7',
    base: 'https://api.openweathermap.org/data/2.5/weather'
}
    

const updateUI = data => {
    document.getElementById('show_city').innerText = data.name || "Unknown Location!";
    document.getElementById('show_temparature').innerText = data.main.temp;
    document.getElementById('weather_status').innerText = data.weather[0].main;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('city').value = "";
}

const getWeatherData = city => {
    fetch(`${api.base}?q=${city}&units=metric&appid=${api.key}`)
    .then(response => response.json())
    .then(data => updateUI(data))
}

const searchBtn = document.getElementById('search_button');

searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById('city').value;
    getWeatherData(inputCity)
})

// By Default Location
getWeatherData("Dhaka")