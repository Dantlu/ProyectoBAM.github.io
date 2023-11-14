/*const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const integrantes = document.querySelector("#Integrantes");
const discos = document.querySelector("#Discos");
const historia = document.querySelector("#Historia");*/
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
const sectionSlider = document.querySelectorAll(".slider-section");

/*abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

integrantes.addEventListener("click", () => {
    nav.classList.remove("visible");
})

historia.addEventListener("click", () => {
    nav.classList.remove("visible");
})

discos.addEventListener("click", () => {
    nav.classList.remove("visible");
})*/

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 3000);

let operacion = 0;
let widthImg = 100/sectionSlider.length;
let contador= 0;

function moveToRight(){
    if (contador >= sectionSlider.length-1) {
        contador = 0;
        operacion = 0;
        slider.style.transform = `translateX(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    contador++;
    operacion = operacion + widthImg;
    slider.style.transform = `translateX(-${operacion}%)`;
    slider.style.transition = `all ease .6s`;
}

function moveToLeft() {
    contador--;
    if (contador < 0 ) {
        contador = sectionSlider.length-1;
        operacion = widthImg * (sectionSlider.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translateX(-${operacion}%)`;
    slider.style.transition = `all ease .6s`;
}

