var judgeBtn = document.querySelector('#judge-btn');

function goJudge(event) {
    event.preventDefault();
    location.assign('./cah_judge.html');
    
}

judgeBtn.addEventListener('click', goJudge);

var playerBtn = document.querySelector('#player-btn');

function goPlayer(event) {
    event.preventDefault();
    location.assign('./cah_player.html');
    
}

playerBtn.addEventListener('click', goPlayer);

var backBtn = document.querySelector('#home-btn');

function goHome(event) {
    event.preventDefault();
    location.assign('./index.html');
    
}

backBtn.addEventListener('click', goHome);