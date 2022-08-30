var cityQuery = "cleveland";//replace this with input value


//extract current weather data
function getCoords(cityQuery) {
    var coordsUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityQuery + "&appid=69f30a43ab68091abf44ef0a8bf5b7d9&units=imperial"
    fetch(coordsUrl)
        .then(function(response) {
            if(response.ok) {
                response.json()
                .then(function(data) {
                    console.log(data);
                    console.log(data.weather[0].description);
                    console.log(data.main.temp);
                    console.log(data.weather[0].icon);
                    console.log(data.main.humidity);
                    console.log(data.wind.speed);
                })
            }
        })
}

getCoords(cityQuery);

var backBtn = document.querySelector('#home-btn');

function goHome(event) {
    event.preventDefault();
    location.assign('./index.html');
    
}

backBtn.addEventListener('click', goHome);