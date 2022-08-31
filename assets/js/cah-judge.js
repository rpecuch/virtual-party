//link to html

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