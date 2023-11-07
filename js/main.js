/*$(document).ready(function(){
    altura=
});*/

/*
const fila = document.querySelector('.carousel');
const curso = document.querySelector('.curso');

const flechaIzquierda = document.getElementById('flechaIzquierda');
const flechaDerecha = document.getElementById('flechaDerecha');

flechaDerecha.addEventListener('click', () => {
    fila.scrollRight += fila.offsetWidth;
});

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});*/

var num=1;

function adelante(){
    num++;

    if( nume>7){
        num=1;
        
    var foto=document.getElementById("foto");
        foto.src="foto"+num+".jpg";
    }
}

function atras(){
    num--;  

    if( nume<1){
        num=7;
        
    var foto=document.getElementById("foto");
        foto.src="foto"+num+".jpg";
    }
}