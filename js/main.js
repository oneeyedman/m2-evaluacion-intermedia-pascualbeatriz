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
  let numCounter = 0;

function NumberComp () {

    const newNumber = parseInt(input.value);
    console.log(newNumber);

    let content = `<p>¡HAS GANADO, CAMPEONA!</p>`
    numCounter += 1;
    counter.innerHTML = numCounter;



    if (myRandomNumber === newNumber){
        feedback.innerHTML = content;
    } else if (myRandomNumber < newNumber){
        content = `<p>El número es demasiado alto</p>`
        feedback.innerHTML = content;
    } else {
        content = `<p>El número es demasiado bajo</p>`
        feedback.innerHTML = content;
    }

}




button.addEventListener('click', NumberComp);

console.log('hola');