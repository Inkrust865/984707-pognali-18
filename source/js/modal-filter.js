var filter = document.querySelector('.filter__modal');
var buttonFilter = document.querySelector('.filter__button');
var buttonName = document.querySelector('.filter__button-name');
var filterClose = document.querySelector('.filter__modal-close');

filter.classList.remove('filter__modal-nojs');

buttonFilter.addEventListener('click', function() {
  if (filter.classList.contains('filter__modal--closed')) {
    filter.classList.remove('filter__modal--closed');
    filter.classList.add('filter__modal--opened');
    this.classList.remove('filter__button--closed');
    this.classList.add('filter__button--opened');
  } else {
    filter.classList.remove('filter__modal--opened');
    filter.classList.add('filter__modal--closed');
    this.classList.remove('filter__button--opened');
    this.classList.add('filter__button--closed');
  }
})

filterClose.addEventListener('click', function() {
  filter.classList.remove('filter__modal--opened');
  filter.classList.add('filter__modal--closed');
  buttonFilter.classList.remove('filter__button--opened');
  buttonFilter.classList.add('filter__button--closed');
})
