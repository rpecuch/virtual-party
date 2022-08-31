var judgeBtn = document.querySelector('#judge-btn');
//may need to adjust id name

//may need to adjust file name
function goJudge(event) {
    event.preventDefault();
    location.assign('./cah-judge.html');
    
}

judgeBtn.addEventListener('click', goJudge);

var playerBtn = document.querySelector('#player-btn');
//may need to adjust id name

//may need to adjust file name
function goPlayer(event) {
    event.preventDefault();
    location.assign('./cah-player.html');
    
}

playerBtn.addEventListener('click', goPlayer);

var backBtn = document.querySelector('#home-btn');

function goHome(event) {
    event.preventDefault();
    location.assign('./index.html');
    
}

backBtn.addEventListener('click', goHome);