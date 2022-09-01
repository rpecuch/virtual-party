var newGameBtn = document.querySelector(".new-game-btn");
var genCard = document.querySelector('#gen-card');
var cardContainer =$('.wcard-set-container');

//redirects to website home page
var backBtn = document.querySelector('#home-btn');

function goHome(event) {
    event.preventDefault();
    location.assign('./index.html');
    
}

backBtn.addEventListener('click', goHome);

//redirects to CAH home page
function newGame(event) {
    event.preventDefault();
    console.log("hi");
    location.assign('./cah.html');
}

newGameBtn.addEventListener('click', newGame);

const WhiteCardOp = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '19317016bamsha52be237f77e205p1d1869jsn28e96131bdde',
		'X-RapidAPI-Host': 'cards-against-humanity.p.rapidapi.com'
	}
};

//collects randomly selected set of white cards (player cards) from CAH API
function getWhiteCard() {
    var whiteCardUrl = 'https://cards-against-humanity.p.rapidapi.com/white/5';
    fetch(whiteCardUrl,WhiteCardOp )
        .then(function(response) {
            if(response.ok) {
                response.json()
                .then(function(data) {
                    var card1= data[0].text;
                    var card2= data[1].text;
                    var card3= data[2].text;
                    var card4= data[3].text;
                    var card5= data[4].text;
                    displayCard(card1, card2, card3, card4, card5);
                })
            }
        })
}

//displays text from randomly selected cards
function displayCard(card1, card2, card3, card4, card5) {
    var cardText1 = document.querySelector('#card1-text');
    var cardText2 = document.querySelector('#card2-text');
    var cardText3 = document.querySelector('#card3-text');
    var cardText4 = document.querySelector('#card4-text');
    var cardText5 = document.querySelector('#card5-text');
    cardText1.textContent = card1;
    cardText2.textContent = card2;
    cardText3.textContent = card3;
    cardText4.textContent = card4;
    cardText5.textContent = card5;
}

//allows user to click on the card they want to play and have the rest of their hand remain hidden
function hidecards (event){
    event.preventDefault();
    var choosenCard = event.target;
    var allCards = document.querySelectorAll('.wcard')
    for ( var i = 0; i < allCards.length; i++) {
        allCards[i].classList.toggle('toggled');
    }
    choosenCard.style.background = 'white';
    var xIcon = document.createElement('i');
    xIcon.classList.add('fa-solid' ,'fa-circle-xmark', 'fa-2xl');
    choosenCard.append(xIcon);
    //when x icon on card is clicked
    xIcon.addEventListener("click", clearCard);
}

// clears a card from hand so that it cannot be played again
function clearCard(event) {
    var clickedIcon = event.target;
    var clearedCard = clickedIcon.parentNode;
    clickedIcon.style.display = 'none';
    var clearedCardText = clearedCard.children[0];
    clearedCardText.textContent = "Cards Against Humanity.";
    clearedCardText.style.textAlign = "center";
    clearedCardText.style.padding = "15%";
    clearedCardText.style.fontSize = "40px";
}

cardContainer.on('click','.wcard' , hidecards)
genCard.addEventListener('click', getWhiteCard)