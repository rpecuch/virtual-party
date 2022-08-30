var inputEl = document.querySelector("#joke-input");
// var jokeType = inputEl.value;
var jokeFormEl = document.querySelector("#joke-form");
var jokeContentEl = document.querySelector("#joke-display");

jokeFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    var jokeType = inputEl.value;
    console.log(jokeType);
    if(jokeType === "manatee") {
        getManJoke();
    }
    else if(jokeType === "programming") {
        getProgrammingJoke();
    }
    else if(jokeType === "dad-jokes") {
        getDadJoke();
    }
})


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
                    var setup = data.setup;
                    var delivery = data.delivery;
                    displayJoke(setup, delivery);
                })
            }
        })
}

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
                    var setup = data.setup;
                    var delivery = data.punchline;
                    displayJoke(setup, delivery);
                })
            }
        })
}

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
                    var setup = data.items[randomNumber].headline;
                    var delivery = data.items[randomNumber].punchline;
                    displayJoke(setup, delivery);
                })
            }
        })
}

var backBtn = document.querySelector('#home-btn');

function displayJoke(setup, delivery) {
    var jokeContainer = document.createElement("div");
    jokeContainer.classList.add("card", "my-3", "p-3");
    var jokeBody = document.createElement("div");
    jokeContainer.append(jokeBody);
    var setupEl = document.createElement("p");
    setupEl.textContent = setup;
    var deliveryEl = document.createElement("p");
    deliveryEl.textContent = delivery;
    var likeButton = document.createElement("button");
    var likeIcon = document.createElement("i");
    likeIcon.classList.add("fa-solid", "fa-thumbs-up", "fa-2xl")
    likeButton.style.padding = "5%";
    likeButton.append(likeIcon);
    var dislikeButton = document.createElement("button");
    dislikeButton.style.padding = "5%";
    var dislikeIcon = document.createElement("i");
    dislikeIcon.classList.add("fa-solid", "fa-thumbs-down", "fa-2xl")
    dislikeButton.append(dislikeIcon);
    jokeBody.append(setupEl, deliveryEl, likeButton, dislikeButton);
    jokeContentEl.append(jokeContainer);
    //when user clicks like of dislike
    dislikeIcon.addEventListener("click", function() {
        jokeContentEl.style.display = "none";
    })
    likeIcon.addEventListener("click", function() {
        // saveJoke(setup, delivery);
        jokeContentEl.style.display = "none";
    })
}

function saveJoke(setup, delivery) {
    
}

function goHome(event) {
    event.preventDefault();
    location.assign('./index.html');
    
}

backBtn.addEventListener('click', goHome);