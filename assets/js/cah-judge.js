//may need to adjust id names for both of these
var pickCardBtn = document.querySelector("#bcard-btn");
var newGameBtn = document.querySelector(".new-game-btn");
var formEl = document.querySelector("#new-player-form");
var playerInput = document.querySelector("#new-player-input");
var scoreboard = document.querySelector("#display-scores");
var scoresList = $('#player-list');
var count = 1;

const blackCardOp = {
	method: 'GET',
	headers: {
		"X-RapidAPI-Key": "19317016bamsha52be237f77e205p1d1869jsn28e96131bdde",
		'X-RapidAPI-Host': 'cards-against-humanity.p.rapidapi.com'
	}
};

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

function displayCard(cardText) {
    //may need to adjust id name
    var textDisplay = document.querySelector("#text-here");
    textDisplay.textContent = cardText;
    textDisplay.style.color = "white";
}

pickCardBtn.addEventListener("click", getBlackCard);

function newGame(event) {
    console.log('hi')
    event.preventDefault();
    
    location.assign('./cah.html');
    
}

newGameBtn.addEventListener('click', newGame);

var backBtn = document.querySelector('#home-btn');

function goHome(event) {
    event.preventDefault();
    location.assign('./index.html');
    
}

backBtn.addEventListener('click', goHome);

// when enter to input clear search bar 
function handleFormSubmit(event) {
    event.preventDefault();
    var winningPlayer = playerInput.value;
    displayScoreboard(winningPlayer);
    // console.log(winningPlayer)
}

function displayScoreboard(winningPlayer) {
    var playerLi = document.createElement("li");
    playerLi.innerHTML = winningPlayer + '; ' + count + ' Point' + ' <i class="fa-solid fa-circle-plus"></i>';
    scoresList.append(playerLi);
    
}

formEl.addEventListener("submit", handleFormSubmit);

function addPoint(event) {
    event.preventDefault();
    console.log('hi')
    // var win = event.target;
    // var newScore = count++;
    // var parent = win.parentElement;
    // var firstChild = parent.children[0];
    // var playerName = firstChild.textContent;
    // firstChild.textContent = playerName + newScore;
}

scoresList.on("click", ".fa-circle-plus", addPoint);