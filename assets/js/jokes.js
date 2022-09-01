var inputEl = document.querySelector("#joke-input");
var jokeFormEl = document.querySelector("#joke-form");
var jokeContentEl = document.querySelector("#joke-display");
var likedJokes = [];
var jokeRatingContainer = document.querySelector('#joke-ratings');

//collects input information from drop down menu of form
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

//retrieves random programming joke from API
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

//retrieves random joke from Manatee jokes API
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

//retrieves random joke from dad jokes API
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

//displays joke that was retrieved from API
function displayJoke(setup, delivery) {
    var jokeContainer = document.createElement("div");
    jokeContainer.classList.add("card", "my-3", "p-3");
    var jokeBody = document.createElement("div");
    jokeContainer.append(jokeBody);
    var setupEl = document.createElement("p");
    setupEl.textContent = setup;
    var deliveryEl = document.createElement("p");
    deliveryEl.textContent = delivery;
    //adds a like and dislike button to each card 
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
    //when user clicks dislike button
    dislikeIcon.addEventListener("click", function() {
        location.reload();
    })
    //when user clicks like button
    likeIcon.addEventListener("click", function() {
        saveJoke(setup, delivery);
        location.reload();
    })
}

//saves liked jokes to local storage
function saveJoke(setup, delivery) {
   console.log('hi')
    let currentJoke = [ {
        Que: setup ,
        Aye: delivery
    }
    ]
    let storedJokes = JSON.parse(localStorage.getItem("likedJokes"));
    if (storedJokes !== null) {
        storedJokes.push(currentJoke[0]);
    }
    else {
        storedJokes = currentJoke;
    }
    localStorage.setItem("likedJokes", JSON.stringify(storedJokes));
}

//retrieves jokes liked by user from local storage and displays them
function displayLikedJokes() {
    var headerSection = document.createElement('h2');
    headerSection.textContent = 'Your favorite jokes:';
    headerSection.style.paddingTop= '1%';
    jokeRatingContainer.appendChild(headerSection)
    jokeRatingContainer.style.border = '2px solid black'
    jokeRatingContainer.style.borderRadius = '10px'
    jokeRatingContainer.style.marginTop = '2%'
    jokeRatingContainer.style.padding = '1%'
    let storedJokes = JSON.parse(localStorage.getItem("likedJokes"));
    if (storedJokes === null) {
        jokeRatingContainer.style.display = 'none'
    }
    if(storedJokes !== null) {
        for(var i=0; i<storedJokes.length; i++) {
            var pastJoke = storedJokes[i];
            var displayP = document.createElement("li");
            displayP.textContent = pastJoke.Que + " " + pastJoke.Aye;
            displayP.style.paddingLeft = '2%'
            jokeRatingContainer.appendChild(displayP);
        }
        var clearedJokes = document.createElement('button')
        clearedJokes.textContent = 'Clear List';
        jokeRatingContainer.appendChild(clearedJokes)
        clearedJokes.style.backgroundColor = ' #535d80';
        clearedJokes.style.color =  'white';
        clearedJokes.style.padding = '5px';
        clearedJokes.style.borderRadius = '10%';
        clearedJokes.style.margin= '2%'
        clearedJokes.addEventListener('click', function(){
            localStorage.clear();
            location.reload();
        }) 
    }
}

displayLikedJokes();

//redirects to website homepage
function goHome(event) {
    event.preventDefault();
    location.assign('./index.html');
    
}

backBtn.addEventListener('click', goHome);