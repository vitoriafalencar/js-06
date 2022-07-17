const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");
const btnPlay = document.querySelector("#btnPlay");
const Resultado = document.querySelector("#Resultado");
const audioAlarme = document.querySelector("#audioAlarme");

let alarmeSetinterval;
let contadorMinutos;
let contadorSegundos;

for (let contador = 0; contador < 60; contador += 1) {
    minutos.innerHTML += `<option value="${contador}">${contador}</option>`;
    segundos.innerHTML += `<option value="${contador}">${contador}</option>`;

}

btnPlay.addEventListener("click", () => {
    contadorMinutos = minutos.value;
    contadorSegundos = segundos.value;
    if (btnPlay.textContent == "play") {
        btnPlay.textContent = "stop";
        alarmeSetinterval = setInterval(alarme, 1000);

    } else {
        btnPlay.textContent = "play";
        clearInterval(alarmeSetinterval);
    }




})

function alarme() {
    if (contadorSegundos === 0 && contadorMinutos > 0) {
        contadorSegundos = 59;
        contadorMinutos -= 1;

    } else if (contadorSegundos > 0) {
        contadorSegundos -= 1;
    }

    Resultado.textContent = `${contadorMinutos}:${contadorSegundos}`;

    if (contadorSegundos < 1 && contadorMinutos < 1) {
        audioAlarme.play();
        clearInterval(alarmeSetinterval);
        Resultado.textContent = `Seu tempo acabou`;

    }


}



