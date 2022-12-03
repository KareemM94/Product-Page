const burgerMenuBox = document.querySelector('.box2');
const burgerMenu = document.querySelector('.burger-menu');
const signInIcon = document.querySelector('.icon');


burgerMenu.addEventListener('click', () => {
  if (burgerMenuBox.classList.contains('active')) {
   burgerMenuBox.classList.remove('active')
  } else {

    burgerMenuBox.classList.add('active');
  }
})

signInIcon.addEventListener('click', () => {
  if (burgerMenuBox.classList.contains('active')) {
   burgerMenuBox.classList.remove('active')
  } 
})





