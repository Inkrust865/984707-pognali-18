var modal = document.querySelector('.js-tariffs');
var buttonTariffs = document.querySelector('.js-tbutton');
var modalClose = document.querySelector('.js-tclose');
var body = document.querySelector('.js-body');

body.classList.remove('body--nojs');

buttonTariffs.addEventListener('click', function() {
  modal.classList.toggle('modal--opened');
});

modalClose.addEventListener('click', function() {
  modal.classList.toggle('modal--opened');
});
