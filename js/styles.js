var burger = document.querySelector('.header__burger')
var modal = document.querySelector('.header__modal')

burger.addEventListener('click' , function(){
 modal.classList.toggle('burger')
})