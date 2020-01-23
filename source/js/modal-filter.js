var filter = document.querySelector('.js-filter');
var buttonFilter = document.querySelector('.js-fbutton');
var filterClose = document.querySelector('.js-fclose');
var body = document.querySelector('.js-body');

body.classList.remove('body--nojs');

buttonFilter.addEventListener('click', function() {
  filter.classList.toggle('filter__modal--opened');
  this.classList.toggle('filter__button--opened');
});

filterClose.addEventListener('click', function() {
  filter.classList.toggle('filter__modal--opened');
  buttonFilter.classList.toggle('filter__button--opened');
})
