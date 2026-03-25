const cria = document.getElementById("b");
const PASTEL = document.getElementById("btn");

const estados = {
    normal: "BOLSONARO.png",
    puto: "ELE COMENDO.png",
    morto: "ELE MORTO.png",
    comendo: "ELE COMENDO",
    alimentado: "ELE FELIZ",
}

let contador = 0;
let intervalo = null;
let time_out = null;
let time_click = null;

function controlador() {
    if (intervalo) clearInterval(intervalo)
        intervalo = setInterval(() =>{
    contador++
    console.log("tempo: ",contador);
            if(contador == 30){
                cria.src = estados.puto;
            } 
            if(contador == 60) {
                cria.src = estados.morto;
            }

        }, 1000)
}

controlador();