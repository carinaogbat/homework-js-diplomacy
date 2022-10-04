'use strict';




function changeColor() {
    const colorChanging = document.querySelectorAll('.color-change');
    for (const item of colorChanging){
        item.classList.add('red');
    }
}

document.querySelector('.color-changer').addEventListener('click', changeColor);

// function changeColor() {
//     const colorChangeEls = document.querySelectorAll('.color-change');
  
//     for (const el of colorChangeEls) {
//       el.classList.add('red');
//     }
//   }
  

//   document.querySelector('.color-changer').addEventListener('click', changeColor);

function validateInput(evt){
    evt.preventDefault();
    const formButton = document.querySelector('#number-input');
    const userNumber = Number(numberInput.value);
    const feedbackForm = document.querySelector('#formFeedback');
    if (isNAN(userNumber) || userNumber >= 10) {
    formFeedback.innerText = 'Please enter a smaller number';
    }  else {
        formFeedback.innerText = 'You are good to go!';
    } 
    } 

    document.querySelector('.number-form').addEventListener('submit', validateInput);

// function validateNumber(evt) {
//     evt.preventDefault();
  
//     const numberInput = document.querySelector('#number-input');
//     const userNum = Number(numberInput.value); // typecast to num
  
//     const formFeedback = document.querySelector('#formFeedback');
//     if (isNaN(userNum) || userNum >= 10) {
//       formFeedback.innerText = 'Please enter a smaller number';
//     } else {
//       formFeedback.innerText = 'You are good to go!';
//     }
//   }
  
//   document.querySelector('.number-form').addEventListener('submit', validateNumber);