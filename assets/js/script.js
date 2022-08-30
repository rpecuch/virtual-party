//add event listeners to this page to direct to the different html files
var weatherCard = document.querySelector('#weather-card');

function goToWeather(event) {
    event.preventDefault();
    location.assign('./weather.html');
    
}

weatherCard.addEventListener('click', goToWeather);

// Joke card

var jokeCard = document.querySelector('#joke-card');

function goToJoke(event) {
    event.preventDefault();
    location.assign('./card5.html');
    
}

jokeCard.addEventListener('click', goToJoke);

var cahCard = document.querySelector('#cah-card');

// CAH

function goToCah(event) {
    event.preventDefault();
    location.assign('./cah.html');
    
}

cahCard.addEventListener('click', goToCah);

var wyrCard = document.querySelector('#wyr-card');

// WYR

function goToWyr(event) {
    event.preventDefault();
    location.assign('./wyr.html');
    
}

wyrCard.addEventListener('click', goToWyr);

// will do later !
// outside-card

// var outsideCard = document.querySelector('#outside-card');

// function goToOutside(event) {
//     event.preventDefault();
//     location.assign('./outside.html');
//     console.log(goToWeather)
// }

// weatherCard.addEventListener('click', goToWeather);
