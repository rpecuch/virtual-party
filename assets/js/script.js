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

const progOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '19317016bamsha52be237f77e205p1d1869jsn28e96131bdde',
		'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
	}
};

function getProgrammingJoke() {
    var progJokeUrl = 'https://jokeapi-v2.p.rapidapi.com/joke/Programming?type=twopart&format=json&idRange=0-150&blacklistFlags=nsfw%2Cracist'
    fetch(progJokeUrl, progOptions)
        .then(function(response) {
            if(response.ok) {
                response.json()
                .then(function(data) {
                    console.log(data);
                    console.log(data.setup);
                    console.log(data.delivery);
                })
            }
        })
}

getProgrammingJoke();

const manateeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '19317016bamsha52be237f77e205p1d1869jsn28e96131bdde',
		'X-RapidAPI-Host': 'manatee-jokes.p.rapidapi.com'
	}
};

function getManJoke() {
    var manJokeUrl = 'https://manatee-jokes.p.rapidapi.com/manatees/random';
    fetch(manJokeUrl, manateeOptions)
        .then(function(response) {
            if(response.ok) {
                response.json()
                .then(function(data) {
                    console.log(data);
                    console.log(data.setup);
                    console.log(data.punchline);
                })
            }
        })
}

getManJoke();

const dadOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '19317016bamsha52be237f77e205p1d1869jsn28e96131bdde',
		'X-RapidAPI-Host': 'papajoke.p.rapidapi.com'
	}
};

function getDadJoke() {
    var dadJokeUrl = 'https://papajoke.p.rapidapi.com/api/jokes';
    fetch(dadJokeUrl, dadOptions)
        .then(function(response) {
            if(response.ok) {
                response.json()
                .then(function(data) {
                    console.log(data);
                    var randomNumber = Math.floor(Math.random() * data.items.length);
                    console.log(data.items[randomNumber].headline); 
                    console.log(data.items[randomNumber].punchline); 
                })
            }
        })
}

getDadJoke();


