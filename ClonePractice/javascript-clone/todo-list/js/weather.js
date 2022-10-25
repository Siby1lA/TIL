const weather = document.querySelector(".js-weather");

const API_KEY = "ede2ff467b135c892900eba1c281479e";
const COORDS = "coords";

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
        });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Cant accese ge location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCodrds = localStorage.getItem(COORDS);
    if(loadedCodrds === null){
        askForCoords();
    }else{
        const parseedCoords = JSON.parse(loadedCodrds);
        getWeather(parseedCoords.latitude, parseedCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();