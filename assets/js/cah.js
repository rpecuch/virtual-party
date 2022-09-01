var judgeBtn = document.querySelector('#judge-btn');

//redirects to judging page 
function goJudge(event) {
    event.preventDefault();
    location.assign('./cah_judge.html');
    
}

judgeBtn.addEventListener('click', goJudge);

var playerBtn = document.querySelector('#player-btn');

//redirects to player page
function goPlayer(event) {
    event.preventDefault();
    location.assign('./cah_player.html');
    
}

playerBtn.addEventListener('click', goPlayer);

var backBtn = document.querySelector('#home-btn');

//redirects to website homepage
function goHome(event) {
    event.preventDefault();
    location.assign('./index.html');
    
}

backBtn.addEventListener('click', goHome);