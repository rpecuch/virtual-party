var weatherCard = document.querySelector('#weather-card');

//redirects to weather page
function goToWeather(event) {
    event.preventDefault();
    location.assign('./weather.html');
    
}

weatherCard.addEventListener('click', goToWeather);


//redirects to joke page
var jokeCard = document.querySelector('#joke-card');

function goToJoke(event) {
    event.preventDefault();
    location.assign('./jokegen.html');
    
}

jokeCard.addEventListener('click', goToJoke);

var cahCard = document.querySelector('#cah-card');


//redirects to CAH homepage
function goToCah(event) {
    event.preventDefault();
    location.assign('./cah.html');
    
}

cahCard.addEventListener('click', goToCah);

var wyrCard = document.querySelector('#wyr-card');


//redirects to WYR page
function goToWyr(event) {
    event.preventDefault();
    location.assign('./wyr.html');
    
}

wyrCard.addEventListener('click', goToWyr);

var outsideCard = document.querySelector('#outside-card');

//redirects to outside activities page
function goToOutside(event) {
    event.preventDefault();
    location.assign('./listactivities.html');
}

outsideCard.addEventListener('click', goToOutside);
