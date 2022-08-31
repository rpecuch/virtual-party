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
                    console.log(data.text)
                    console.log(data.setup);
                    console.log(data.punchline);
                })
            }
        })
}

// getBlackCard();

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

var backBtn = document.querySelector('#home-btn');

function goHome(event) {
    event.preventDefault();
    location.assign('./index.html');
    
}

backBtn.addEventListener('click', goHome);