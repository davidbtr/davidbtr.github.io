function reproducirMP3() {
    var audio = new Audio('laugh.mp3');
    audio.play();
}
function playSound() {
    var sound = document.getElementById("hoverSound");
    if (!sound.paused) {
        sound.pause(); 
        sound.currentTime = 0; 
    }
    sound.play();
}
function door(){
    let contadorClics = 0;
    let tiempoUltimoClic = 0;
    let esperaRedireccion;
    
    function resetearContador() {
        contadorClics = 0;
        tiempoUltimoClic = 0;
    }
    
    const sound = document.getElementById("clickSound");
    const imagen = document.getElementById("door");
    sound.currentTime = 0;
    sound.play();
    imagen.addEventListener("click", function() {
        const tiempoActual = new Date().getTime();
        if (tiempoActual - tiempoUltimoClic < 5000) { 
            contadorClics++;
            if (contadorClics === 2) {
                clearTimeout(esperaRedireccion);
                esperaRedireccion = setTimeout(() => {
                    window.location.href = "https://elparca.com/door.html";
                }, 400);
            } else {
                clearTimeout(esperaRedireccion);
            }
        } else {
            resetearContador(); 
            clearTimeout(esperaRedireccion);
        }
        
        tiempoUltimoClic = tiempoActual;
    });
}
