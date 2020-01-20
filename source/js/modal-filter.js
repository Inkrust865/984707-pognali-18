var filter = document.querySelector('.js-filter');
var buttonFilter = document.querySelector('.js-fbutton');
var filterClose = document.querySelector('.js-fclose');
var body = document.querySelector('.js-body');

body.classList.remove('body--nojs');

buttonFilter.addEventListener('click', function() {
  filter.classList.toggle('js-filter--opened');
  this.classList.toggle('js-fbutton--opened');
});

filterClose.addEventListener('click', function() {
  filter.classList.toggle('js-filter--opened');
  buttonFilter.classList.toggle('js-fbutton--opened');
})
