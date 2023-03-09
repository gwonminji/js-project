const API_KEY = "709f5607f8a5ca080b808be074287929";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
    // https://api.openweathermap.org/data/2.5/weather?lat=37.481851&lon=126.8949998&appid=709f5607f8a5ca080b808be074287929
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        const weather = document.querySelector(".weather span:first-child");
        const city = document.querySelector(".weather span:last-child");

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
