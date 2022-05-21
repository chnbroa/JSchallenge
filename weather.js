const API_KEY = "6f5f1b27aed0d53fc8b443f2689768b0";

function onGeoOk(position)
{
const lat = position.coords.latitude;
const lon = position.coords.longitude;
console.log("You Live in", lat, lon);
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
//크롬 확장 Json viewer 설치
fetch(url).then((response) => response.json()).then((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText= data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
});
}
function onGeoError()
{
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);