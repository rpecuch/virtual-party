var pickCardBtn = document.querySelector("#bcard-btn");
var newGameBtn = document.querySelector(".new-game-btn");
var formEl = document.querySelector("#new-player-form");
var playerInput = document.querySelector("#new-player-input");
var scoreboard = document.querySelector("#display-scores");
var scoresList = $('#player-list');
var playerList = [];

const blackCardOp = {
	method: 'GET',
	headers: {
		"X-RapidAPI-Key": "19317016bamsha52be237f77e205p1d1869jsn28e96131bdde",
		'X-RapidAPI-Host': 'cards-against-humanity.p.rapidapi.com'
	}
};

//retrieves a random black card(judges card) from CAH API
function getBlackCard() {
    var blackCardUrl = 'https://cards-against-humanity.p.rapidapi.com/black';
    fetch(blackCardUrl, blackCardOp)
        .then(function(response) {
            if(response.ok) {
                response.json()
                .then(function(data) {
                    console.log(data);
                    var cardText = data.text;
                    displayCard(cardText);
                })
            }
        })
}

//displays text from randomly selected card
function displayCard(cardText) {
    var textDisplay = document.querySelector("#text-here");
    textDisplay.textContent = cardText;
    textDisplay.style.color = "white";
}

pickCardBtn.addEventListener("click", getBlackCard);

//redirects to CAH home page when game is over 
function newGame(event) {
    console.log('hi')
    event.preventDefault();
    
    location.assign('./cah.html');
    
}

newGameBtn.addEventListener('click', newGame);

//redirects to website home page
var backBtn = document.querySelector('#home-btn');

function goHome(event) {
    event.preventDefault();
    location.assign('./index.html');
    
}

backBtn.addEventListener('click', goHome);


// collects player name from form
function handleFormSubmit(event) {
    event.preventDefault();
    var winningPlayer = playerInput.value;
    displayScoreboard(winningPlayer);
}

//displays players and enables adding points to each player's score
function displayScoreboard(winningPlayer) {
    var playerLi = document.createElement("li");
    var initial = 1;
    playerLi.textContent = winningPlayer + "  ";
    playerLi.style.listStyleType = 'none';
    var plusBtn = document.createElement("button");
    plusBtn.innerHTML ="1 point   " + "<i class='fa-solid fa-circle-plus'></i>";
    plusBtn.value = initial;
    plusBtn.style.position = 'relative'
    plusBtn.style.left = '85px';
    var icon = document.createElement("i");
    plusBtn.append(icon);

    playerLi.append(plusBtn);
    scoresList.append(playerLi);
    playerInput.value = '';
    plusBtn.addEventListener("click", function() {
        var count = initial + 1;
        plusBtn.value = count;
        plusBtn.innerHTML = count + " points   " + "<i class='fa-solid fa-circle-plus'></i>";
        initial++;
    }) 
}

formEl.addEventListener("submit", handleFormSubmit);