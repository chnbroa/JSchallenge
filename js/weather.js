const API_KEY = "6f5f1b27aed0d53fc8b443f2689768b0";
const weatherIconImg = document.querySelector(".CurrIcon");
const weatherTemp = document.querySelector(".weathertemp");
const weatherCity = document.querySelector(".city");

let weatherIcon = {
    '01': 'fas fa-sun',
    '02': 'fas fa-cloud-sun',
    '03': 'fas fa-cloud',
    '04': 'fas fa-cloud-meatball',
    '09': 'fas fa-cloud-sun-rain',
    '10': 'fas fa-cloud-showers-heavy',
    '11': 'fas fa-poo-storm',
    '13': 'far fa-snowflake',
    '50': 'fas fa-smog',
}

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You Live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //크롬 확장 Json viewer 설치
    fetch(url).then((response) => response.json()).then((data) => {
        const Icon = (data.weather[0].icon).substr(0, 2);
        const temp = Math.floor(data.main.temp) + 'º';
        const city = data.name;
        weatherIconImg.innerHTML = '<i class="' + weatherIcon[Icon] + '"></i>';
        weatherTemp.innerText = `${temp}`;
        weatherCity.innerText = `${city}`
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);