const wROp = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '19317016bamsha52be237f77e205p1d1869jsn28e96131bdde',
		'X-RapidAPI-Host': 'would-you-rather.p.rapidapi.com'
	}
};



function getWCard () {
    var wCardUrl = 'https://would-you-rather.p.rapidapi.com/wyr/random';
    fetch(wCardUrl,wROp )
        .then(function(response) {
            if(response.ok) {
                response.json()
                .then(function(data) {
                    console.log(data)
                    // console.log(data[0].question)
                    // console.log(data[0].text);
                    // console.log(data[1].text);
                    // console.log(data[2].text);
                })
            }
        })
}

// getWCard();

var backBtn = document.querySelector('#home-btn');

function goHome(event) {
    event.preventDefault();
    location.assign('./index.html');
    
}

backBtn.addEventListener('click', goHome);