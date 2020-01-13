var modal = document.querySelector('.modal');
var buttonTariffs = document.querySelector('.tariffs__button');
var modalClose = document.querySelector('.modal__close');

modal.classList.remove('modal--nojs');

buttonTariffs.addEventListener('click', function() {
  modal.classList.remove('modal--closed');
  modal.classList.add('modal--opened');
});

modalClose.addEventListener('click', function() {
  modal.classList.remove('modal--opened');
  modal.classList.add('modal--closed');
});
