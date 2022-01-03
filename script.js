const playButton = document.querySelectorAll('.play-button');
const pause = document.querySelectorAll('.pause-button');
const playList = document.querySelector('#play-list');
const listenNow = document.querySelector('#listen');
let clickCounter = 0;
function playlisten(e) {
    let id = e.currentTarget.id;
    const Listen = listenNow.querySelector(`[aria-labelledby = '${id}']`);
    Listen.play();
    clickCounter++;
    if (clickCounter % 2 === 0) {
        Listen.pause();
    }

}

playButton.forEach(button => button.addEventListener('click', function (e) {
    let id = e.currentTarget.id;
    const start = playList.querySelector(`[aria-labelledby = '${id}']`);
    const songs = playList.querySelector(`[role='${id}']`);
    if (id = start) {
        songs.classList.remove('hidden');
        button.classList.add('hidden');
        start.play();
    }
    songs.addEventListener('click', function () {
        songs.classList.add('hidden');
        button.classList.remove('hidden');
        start.pause();

    });
}));


