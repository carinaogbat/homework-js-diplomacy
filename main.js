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