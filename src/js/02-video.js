import Player from '@vimeo/player';
import throttle from "lodash.throttle";

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


player.on('timeupdate', throttle(function(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}, 1000));

const currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

if (currentTime) { 
    player.setCurrentTime(currentTime.seconds);
};