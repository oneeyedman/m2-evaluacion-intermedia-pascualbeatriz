'use strict';

const input = document.querySelector('.play__instructions-gap_number');
const button = document.querySelector('.play__button');
const feedback = document.querySelector('.play__feedback');
const counter = document.querySelector('.play__counter');



function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  

  const myRandomNumber = getRandomNumber(100);
  console.log(`Mi número aleatorio es ${myRandomNumber}`);
  let numCounter = 0;

function NumberComp () {

    let content = `<p>¡HAS GANADO, CAMPEONA!</p>`
    numCounter += 1;
    counter.innerHTML = numCounter;

    const newNumber = parseInt(input.value);
    console.log(newNumber);

    if (isNaN(newNumber) === true){
        console.log('tu puta madre');
        content = `<p>Introduce un número cara 🥦</p>`;
        feedback.innerHTML = content;
    } else if ((newNumber > 100) || (newNumber < 0)) {
        content = `<p>Este número no vale, tiene que ser un número entre 0-100</p>`
        feedback.innerHTML = content;
    } else if  (myRandomNumber === newNumber){
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

