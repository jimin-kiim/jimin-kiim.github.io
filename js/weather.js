const API_KEY="6917f8053aacc7744a4a7ec27aca5e6e";

function onGeoOK(position){
    const lat= position.coords.latitude;
    const lon=position.coords.longitude;
    console.log("you live in ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then(response=>response.json())//fetch is a promise so it takes time. So we have to use 'then' ; "after you fetched the reponse then do it"
    .then(data=> {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        city.innerText= data.name;
        weather.innerText= `${data.weather[0].main}/${data.main.temp}`;
    });//ask for a response to the url even though I don't go surf into the website directly. JS gets the response instead of us.
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);