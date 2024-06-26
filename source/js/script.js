let site = document.querySelector('.page');
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let modal = document.querySelector('.modal');
let modalToggle = document.querySelectorAll('.button--modal');
let modalOverlay = document.querySelector('.modal__overlay');
let page = document.querySelector('.page__body');

site.classList.remove('nojs');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--is-closed');
  navMain.classList.toggle('main-nav--is-open')
});

modalToggle.forEach((element) => element.addEventListener('click', function (e) {
  e.preventDefault();
  if (modal.classList.contains('modal--is-closed')) {
    modal.classList.remove('modal--is-closed');
    modal.classList.add('modal--is-open');
    page.classList.add('page__body--no-overflow');
  }
}));

modalOverlay.addEventListener('click', function () {
  if (modal.classList.contains('modal--is-open')) {
    modal.classList.remove('modal--is-open');
    modal.classList.add('modal--is-closed');
    page.classList.remove('page__body--no-overflow');
  }
});
