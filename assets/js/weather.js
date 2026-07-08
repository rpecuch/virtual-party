var cityInputEl = document.querySelector("#city-weather-input");
var stateInputEl = document.querySelector("#state-weather-input");
var countryInputEl = document.querySelector("#country-weather-input");

var formEl = document.querySelector("#search-city-form");
var weatherContentEl = document.querySelector("#weather-container");


//extract current weather data from API
function getCoords(event) {
    event.preventDefault();
    var cityQuery = cityInputEl.value;
    var stateQuery = stateInputEl.value;
    var countryQuery = countryInputEl.value;
    var coordsUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityQuery + ',' + stateQuery + ',' + countryQuery + '&appid=69f30a43ab68091abf44ef0a8bf5b7d9';

    fetch(coordsUrl)
        .then(function(response) {
            if(response.ok) {
                response.json()
                .then(function(data) {
                    console.log(data);
                    var lat = data[0].lat;
                    var lon = data[0].lon;
                    getForecast(lat, lon, cityQuery);
                })
            }
        })
}

formEl.addEventListener("submit", getCoords);

//displays current weather conditions on page
function getForecast(lat, lon ,cityQuery) {
    var requestUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=69f30a43ab68091abf44ef0a8bf5b7d9";
    fetch(requestUrl)
        .then(function(response) {
            if(response.ok) {
                response.json()
                .then(function(data) {
                    console.log(data);

                    var resultContainer = document.createElement("div");
                    resultContainer.classList.add("card", "my-3", "p-3");
                    var resultBody = document.createElement("div");
                    resultContainer.append(resultBody);
                    var cityNameEl = document.createElement('h2')

                    //capitalizes first letter of city name
                    var cityArray = cityQuery.split("");
                    var capitalLetter = cityArray[0].toUpperCase();
                    cityArray.shift();
                    cityArray.unshift(capitalLetter);
                    var searchResultText = cityArray.join("");
                    cityNameEl.textContent = searchResultText;

                    //displays data points

                    //date
                    var dateEl = document.createElement("h3");
                    var formatDate = moment().format("MMM Do YYYY");
                    dateEl.textContent = formatDate;
                    // icon
                    var icon = data.current.weather[0].icon;
                    var iconEl = document.createElement("img");
                    var iconLink = "https://openweathermap.org/img/w/" + icon + ".png";
                    iconEl.setAttribute("src", iconLink);

                    // conditions
                    var resultsList = document.createElement("ul");
                    resultBody.appendChild(resultsList);
                    var descrResult = document.createElement("li");
                    descrResult.textContent = "Current conditions: " + data.current.weather[0].description;
                    
                    var tempResult = document.createElement("li");
                    tempResult.textContent = "Temp: " + data.current.temp + " ℉";

                    var windResult = document.createElement("li");
                    windResult.textContent = "Wind: " + data.current.wind_speed + " MPH";

                    var humidResult = document.createElement("li");
                    humidResult.textContent = "Humidity: " + data.current.humidity + " %";

                    resultsList.append(cityNameEl,dateEl, iconEl, descrResult, tempResult, windResult, humidResult);
                    weatherContentEl.append(resultContainer);
                })
            }
        })

    //clears search input fields
    cityInputEl.value = '';
    stateInputEl.value = '';
    countryInputEl.value = '';
}


var backBtn = document.querySelector('#home-btn');

//redirects to website homepage
function goHome(event) {
    event.preventDefault();
    location.assign('./index.html');
    
}

backBtn.addEventListener('click', goHome);

var outdoorBtn = document.querySelector('#outdoor-btn');

//redirects to outdoor activities
function goOutside(event) {
    event.preventDefault();
    location.assign('./listactivities.html');
    
}

outdoorBtn.addEventListener('click', goOutside);