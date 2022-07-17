//inport elementos
const imgBomba = document.querySelector("#imgBomba");
const btn = document.querySelector("#btn");
const audioExplosao = document.querySelector("#audioExplosao");
const audioTick = document.querySelector("#audioTick");

let time;
let tempoExplosao;
btn.addEventListener("click", () => {
    imgBomba.src = "img/bombaarmada.png";
     tempoExplosao=60;

    time = setInterval(explosao, 1000);

})

function explosao() {
    audioTick.play();
    if (tempoExplosao === 0) {
        imgBomba.src = "imgbombaexplodindo.png";
        clearInterval(time);
        audioExplosao.play();
    } else {
        tempoExplosao -= 1;
    }
}
imgBomba.addEventListener("click", () => {
    clearInterval(time);
    imgBomba.src = "img/bombadesarmada.png";


})