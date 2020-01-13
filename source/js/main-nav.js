var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');
var pageHeader = document.querySelector('.page-header');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('page-header__toggle--nojs');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('page-header__toggle--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--closed');
    navToggle.classList.add('page-header__toggle--opened');
    pageHeader.classList.add('page-header--scroll');
  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    navToggle.classList.remove('page-header__toggle--opened');
    navToggle.classList.add('page-header__toggle--closed');
    pageHeader.classList.remove('page-header--scroll');
  }
});
