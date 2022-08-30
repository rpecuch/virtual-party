var inputEl = document.querySelector("#city-input");
var formEl = document.querySelector("#search-city-form");
var weatherContentEl = document.querySelector("#weather-container");


//extract current weather data
function getCoords(event) {
    event.preventDefault();
    var cityQuery = inputEl.value;
    console.log(cityQuery);
    var coordsUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityQuery + "&appid=69f30a43ab68091abf44ef0a8bf5b7d9&units=imperial"
    fetch(coordsUrl)
        .then(function(response) {
            if(response.ok) {
                response.json()
                .then(function(data) {
                    console.log(data);
                    console.log(data.weather[0].description);
                    var description = data.weather[0].description;
                    console.log(data.main.temp);
                    var temp = data.main.temp;
                    console.log(data.weather[0].icon);
                    var icon = data.weather[0].icon;
                    console.log(data.main.humidity);
                    var humid = data.main.humidity;
                    console.log(data.wind.speed);
                    var wind = data.wind.speed;
                    displayWeather(description, temp, icon, humid, wind);
                })
            }
        })
}

formEl.addEventListener("submit", getCoords);

function displayWeather(description, temp, icon, humid, wind) {
    var resultContainer = document.createElement("div");
    resultContainer.classList.add("card", "my-3", "p-3");
    var resultBody = document.createElement("div");
    resultContainer.append(resultBody);
    var dateEl = document.createElement("h3");
    var formatDate = moment().format("MMM Do YYYY");
    dateEl.textContent = formatDate;
    var iconEl = document.createElement("img");
    var iconLink = "https://openweathermap.org/img/w/" + icon + ".png";
    iconEl.setAttribute("src", iconLink);
    var resultsList = document.createElement("ul");
    resultBody.appendChild(resultsList);
    var descrResult = document.createElement("li");
    descrResult.textContent = "Current conditions: " + description;
    var tempResult = document.createElement("li");
    tempResult.textContent = "Temp: " + temp + " ℉";
    var windResult = document.createElement("li");
    windResult.textContent = "Wind: " + wind + " MPH";
    var humidResult = document.createElement("li");
    humidResult.textContent = "Humidity: " + humid + " %";
    resultsList.append(dateEl, iconEl, descrResult, tempResult, windResult, humidResult);
    weatherContentEl.append(resultContainer);

}

var backBtn = document.querySelector('#home-btn');

function goHome(event) {
    event.preventDefault();
    location.assign('./index.html');
    
}

backBtn.addEventListener('click', goHome);