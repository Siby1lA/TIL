const Btn = document.querySelector(".btn1");
const Btn2 = document.querySelector(".btn2");
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

function change2() {
    player.loadVideoById('v7BY5m2wYx4');
}

function init(){
    Btn.addEventListener('click', change);
    Btn2.addEventListener('click', change2);
}

init();