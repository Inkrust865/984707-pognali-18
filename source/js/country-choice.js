var choiceWrapper = document.querySelector('.js-choice-wrapper');
var choiceInput = document.querySelector('.js-choice-input');
var choiceButton = document.querySelector('.js-choice-button');
var choiceClose = document.querySelector('.js-choice-close');
var choiceModal = document.querySelector('.js-choice-modal');
var body = document.querySelector('.js-body');

body.classList.remove('body--nojs');

choiceButton.addEventListener('click', function() {
  choiceModal.classList.toggle('country-choice__modal--opened');
  choiceClose.classList.toggle('country-choice__button-close--hidden');
  choiceButton.classList.toggle('country-choice__button--choose-opened');
  choiceInput.classList.toggle('country-choice__select--choose-opened');
});
