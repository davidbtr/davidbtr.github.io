function reproducirMP3() {
    var audio = new Audio('laugh.mp3');
    audio.play();
}

function playSound() {
    var sound = document.getElementById("hoverSound");
    if (!sound.paused) {
        sound.pause(); // Pausar el sonido actual
        sound.currentTime = 0; // Reiniciar el sonido actual
    }
    sound.play();
}
document.getElementById('parca').addEventListener('click', reproducirMP3);