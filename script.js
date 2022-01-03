const playButton = document.querySelectorAll('.play-button');
const pause = document.querySelectorAll('.pause-button');
const playList = document.querySelector('#play-list');


playButton.forEach(button => button.addEventListener('click', function (e) {
    const id = e.currentTarget.id;
    const start = playList.querySelector(`[aria-labelledby = '${id}']`);
    const songs = playList.querySelector(`[role='${id}']`);
    if (!button.classList.add('hidden')) {
        songs.classList.remove('hidden');
        button.classList.add('hidden');
        start.play();
        const audioContext = new AudioContext();
        const element = document.querySelectorAll('audio');
     /*   const source = audioContext.createMediaElementSource(element);
        source.connect(audioContext.destination)*/

    }
    songs.addEventListener('click', function () {
        start.pause();
        songs.classList.add('hidden');
        button.classList.remove('hidden');
    });
}));

