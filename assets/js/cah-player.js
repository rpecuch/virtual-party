var newGameBtn = document.querySelector(".new-game-btn");

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
    var whiteCardUrl = 'https://cards-against-humanity.p.rapidapi.com/white/3';
    fetch(whiteCardUrl,WhiteCardOp )
        .then(function(response) {
            if(response.ok) {
                response.json()
                .then(function(data) {
                    console.log(data[0].text);
                    console.log(data[1].text);
                    console.log(data[2].text);
                })
            }
        })
}

// getWhiteCard();