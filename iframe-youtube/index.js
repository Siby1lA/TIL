const Btn = document.querySelector(".btn1");
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('trailer-movies__movie', {
        height: '620',
        width: '1100',
        videoId: 'by4SYYWlhEs'
    });
}
function change() {
    player.loadVideoById('1Nv-vPBA0fI');
}

function init(){
    Btn.addEventListener('click', change);
}

init();