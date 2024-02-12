const tecladoKeys = document.querySelectorAll('.teclado-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheck = document.querySelector('.keys-check input');

let mapedKeyCodes = ['Semicolon', ];

let audio = new Audio(`./src/tunes/a.wav`);
function playTune(key) {
    audio.src = `./src/tunes/${key}.wav`;
    audio.play();
    
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove("active")
}, 200);
}

tecladoKeys.forEach((key) => {
    mapedKeyCodes.push(key.dataset.key);
    key.addEventListener('click', () => { playTune(key.dataset.key) });
});

document.addEventListener('keydown', (event) => {
    if (!mapedKeyCodes.includes(event.code)) return;
    if (event.code === 'Semicolon') {
        playTune('Slash');
    } else {
        playTune(event.code);
    }
});

function handleVolume() {
    audio.volume = volumeSlider.value;
}

function showHideKeys() {
    tecladoKeys.forEach(key => key.classList.toggle('hide'));
}

volumeSlider.addEventListener('input', handleVolume);
keysCheck.addEventListener('click', showHideKeys);