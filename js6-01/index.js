//inport elementos
const imgBomba = document.querySelector("#imgBomba");
const btn = document.querySelector("#btn");
const audio = document.querySelector("#audio");

let time;
btn.addEventListener("click", () => {
    imgBomba.src = "img/bombaarmada.png";

    time = setTimeout(explosao, 1000 * 10);

})

function explosao() {
    imgBomba.src = "img/bombaexplodindo.png";
    audio.play();
}
imgBomba.addEventListener("click", () => {
    clearTimeout(time);
    imgBomba.src = "img/bombadesarmada.png";
   
})