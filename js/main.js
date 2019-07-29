'use strict';

const input = document.querySelector('.play__instructions-gap_number');
const button = document.querySelector('.play__button');
const feedback = document.querySelector('.play__feedback');
const counter = document.querySelector('.play__counter');


// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  
  // Anda, chacho, píntame en la consola un número random hasta 100;
  const myRandomNumber = getRandomNumber(100);
  
  console.log(`Mi número aleatorio es ${myRandomNumber}`);

  

function NumberComp () {
    console.log(input.value);
}


button.addEventListener('click', NumberComp);

console.log('hola');