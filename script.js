let darkButton = document.getElementById("dark-Button");
const lightButton = document.getElementById("light-Button");
let body = document.querySelector('body');
let h1Elements = document.querySelectorAll('h1');
let pElements = document.querySelectorAll('p');
let containers = document.querySelectorAll('.container');
let blueSquaresLarge = document.querySelectorAll('.blue-square-large');
let textContainers = document.querySelectorAll('.text-container');

function darkMode() {
    body.style.backgroundColor = 'black';

    containers.forEach(container => {
        container.style.backgroundColor = 'black';
        container.style.color = 'white';
    });
    blueSquaresLarge.forEach(square => {
  
        square.style.color= 'white';
    });

    textContainers.forEach(textContainer => {
        textContainer.style.color = 'white';
    } );
    h1Elements.forEach(h1 => {
        h1.style.color = 'white';
    });
    pElements.forEach(p => {
        p.style.color = 'white';
    });
}

function lightMode() {
    body.style.backgroundColor = 'white';

    containers.forEach(container => {
        container.style.backgroundColor = 'white';
        container.style.color = 'black';
    });
    blueSquaresLarge.forEach(square => {
   
        square.style.color = 'black';
    });
  
    textContainers.forEach(textContainer => {
        textContainer.style.color = 'black';
    } );
    h1Elements.forEach(h1 => {
        h1.style.color = 'black';
    });
    pElements.forEach(p => {
        p.style.color = 'black';
    } );
}

darkButton.onclick = darkMode;
lightButton.onclick = lightMode;

//animation for ai component
document.addEventListener('DOMContentLoaded', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
  
    fadeInElements.forEach(element => {
      observer.observe(element);
    });
  });