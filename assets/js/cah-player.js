var newGameBtn = document.querySelector(".new-game-btn");
var genCard = document.querySelector('#gen-card');
var cardContainer =$('.wcard-set-container');


var backBtn = document.querySelector('#home-btn');

function goHome(event) {
    event.preventDefault();
    location.assign('./index.html');
    
}

backBtn.addEventListener('click', goHome);

function newGame(event) {
    event.preventDefault();
    console.log("hi");
    location.assign('./cah.html');
}

newGameBtn.addEventListener('click', newGame);

const WhiteCardOp = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '499c79d270mshbc1dbeea01486d2p1f1152jsn1f6f849e3ee4',
		'X-RapidAPI-Host': 'cards-against-humanity.p.rapidapi.com'
	}
};



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


// come back to bug that will not change the style background cololr back to white;
function hidecards (event){
    event.preventDefault();
    var choosenCard = event.target;
    // console.log(choosenCard);
    var allCards = document.querySelectorAll('.wcard')
    // console.log(allCards)
    for ( var i = 0; i < allCards.length; i++) {
        allCards[i].style.background = 'black';
    }
    choosenCard.style.background = 'white';
    var xIcon = document.createElement('i');
    xIcon.classList.add('fa-solid' ,'fa-circle-xmark', 'fa-2xl');
    choosenCard.append(xIcon);
    xIcon.addEventListener('click' ,function(){
        choosenCard.style.display = 'none';
        for ( var i = 0; i < allCards.length; i++) {
            allCards[i].style.background = 'white';
           
        }
        // choosenCard.style.display = 'none';
    })
}




cardContainer.on('click','.wcard' , hidecards)
 genCard.addEventListener('click', getWhiteCard)