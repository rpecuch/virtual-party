var backBtn = document.querySelector('#home-btn');

//redirects to website homepage
function goHome(event) {
    event.preventDefault();
    location.assign('./index.html');
    
}

backBtn.addEventListener('click', goHome);