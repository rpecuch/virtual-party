//may need to adjust id names for both of these
var pickCardBtn = document.querySelector("#pick-card");
var newGameBtn = document.querySelector("#new-game");
var formEl = document.querySelector("#form");
var playerInput = document.querySelector("#player-input");
//define variables for scoreboard container and ul element, again may need to adjust ids
var scoreboard = document.querySelector("#scoreboard");
var scoresList = document.createElement("ul");
scoreboard.appendChild(scoresList);
var count = 1;

const blackCardOp = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '499c79d270mshbc1dbeea01486d2p1f1152jsn1f6f849e3ee4',
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
    event.preventDefault();
    location.assign('./cah.html');
    
}

newGameBtn.addEventListener('click', newGame);

function handleFormSubmit(event) {
    event.preventDefault();
    var winningPlayer = playerInput.value;
    displayScoreboard(winningPlayer);
}

function displayScoreboard(winningPlayer) {
    var playerLi = document.createElement("li");
    playerLi.textContent = winningPlayer + count;
    var addBtn = document.createElement("icon");
    addBtn.classList.add("fa-solid", "fa-plus");
    scoresList.appendChild(playerLi, addBtn);
}

formEl.addEventListener("submit", handleFormSubmit);

function addPoint(event) {
    event.preventDefault();
    var win = event.target;
    var newScore = count++;
    var parent = win.parentElement;
    var firstChild = parent.children[0];
    var playerName = firstChild.textContent;
    firstChild.textContent = playerName + newScore;
}

scoresList.on("click", "fa-plus", addPoint);