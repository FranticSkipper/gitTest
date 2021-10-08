const counter = document.querySelector('.counter')
const buttonbuttonCounter = document.querySelector('.buttonCounter')
const buttonRed = document.querySelector('.buttonRed')

document.addEventListener("DOMContentLoaded", () => {
    console.log('page has been loaded/)');
});

buttonbuttonCounter.addEventListener('click', () => {
    counter.innerHTML = 'werwer'
})

buttonRed.addEventListener('click', () => {
    counter.style.color = 'red'
})