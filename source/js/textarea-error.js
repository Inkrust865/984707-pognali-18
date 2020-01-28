var textarea = document.querySelector('.js-textarea');
var sendButton = document.querySelector('.js-button-send');

sendButton.addEventListener('click', function(evt) {
  if (!textarea.value) {
    evt.preventDefault();
    textarea.classList.add('step__country-textarea--error');
  }
});
