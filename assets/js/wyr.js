var pickCard = document.querySelector("#wyr-btn");
var cardContentEl = document.querySelector("#card-display-container");

const wROp = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '19317016bamsha52be237f77e205p1d1869jsn28e96131bdde',
		'X-RapidAPI-Host': 'would-you-rather.p.rapidapi.com'
	}
};


//retrieves random WYR card from API
function getWCard () {
    cardContentEl.innerHTML = "";
    var wCardUrl = 'https://would-you-rather.p.rapidapi.com/wyr/random';
    fetch(wCardUrl,wROp )
        .then(function(response) {
            if(response.ok) {
                response.json()
                .then(function(data) {
                    console.log(data);
                    var wyrCard = data[0].question;
                    displayCard(wyrCard);
                })
            }
        })
}

pickCard.addEventListener("click", getWCard);

//displays WYR card 
function displayCard(wyrCard) {
    console.log("display");
    var cardContainer = document.createElement("div");
    cardContainer.classList.add("card", "my-3", "p-3");
    var cardText = document.createElement("p");
    cardText.textContent = wyrCard;
    cardContainer.appendChild(cardText);
    cardContentEl.appendChild(cardContainer);
}

var backBtn = document.querySelector('#home-btn');

//redirects to website homepage
function goHome(event) {
    event.preventDefault();
    location.assign('./index.html');
    
}

backBtn.addEventListener('click', goHome);