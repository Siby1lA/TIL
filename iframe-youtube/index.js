var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'by4SYYWlhEs'
    });
}
function change() {
    player.loadVideoById('1Nv-vPBA0fI');
}

