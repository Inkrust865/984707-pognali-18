var navMain = document.querySelector('.js-nav');
var navToggle = document.querySelector('.js-toggle');
var pageHeader = document.querySelector('.js-header');
var body = document.querySelector('.js-body');

body.classList.remove('body--nojs');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('js-nav--opened');
  navToggle.classList.toggle('js-toggle--opened');
  pageHeader.classList.toggle('js-header--scroll');
});
