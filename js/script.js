'use strict'

var loginBlock = document.querySelector('.header-user-logout');
var userBlock = document.querySelector('.header-user-login');
var loginBtn = document.querySelector('.header-login-button');
var logoutBtn = document.querySelector('.header-user-logout-link');

var buttonsSLidesArray = document.querySelectorAll('.paginator-button');
var slidesArray = document.querySelectorAll('.slide');
var nextSlideBtn = document.querySelector('.slider-next-btn');
var prevSlideBtn = document.querySelector('.slider-prev-btn');
var currentSlide = 0;

// блок авторизации
loginBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  userBlock.classList.remove('display-none');
  loginBlock.classList.add('display-none');
});

logoutBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  loginBlock.classList.remove('display-none');
  userBlock.classList.add('display-none');
});

// оживление сладйера
[].forEach.call(buttonsSLidesArray, function(el, i) {
  el.addEventListener('click', function(evt) {
    evt.preventDefault();
    slideChange(this.valueOf(), buttonsSLidesArray.length);
  }.bind(i));
});

 nextSlideBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  nextSlide();
 });

 prevSlideBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  previousSlide();
 });

 function slideChange(indexSlideOn, slideLength) {
  if (indexSlideOn >= slideLength) return;
  for (var i = 0; i < slideLength; i++) {
    if (i === indexSlideOn) {
      buttonsSLidesArray[i].classList.add('paginator-button-current');
      slidesArray[i].classList.remove('display-none');
    } else {
      buttonsSLidesArray[i].classList.remove('paginator-button-current');
      slidesArray[i].classList.add('display-none');
    }
  }
}

function nextSlide() {
  currentSlide = findCurrentSLide();
  goToSlide(currentSlide + 1);
}
 
function previousSlide() {
  currentSlide = findCurrentSLide();
  goToSlide(currentSlide - 1);
}

function findCurrentSLide() {
  for(var i = 0; i < slidesArray.length; i++) {
    if (!slidesArray[i].classList.contains('display-none')) {
      return i;
    }
  }
}
 
function goToSlide(n) {
  currentSlide = findCurrentSLide();
  slidesArray[currentSlide].className = 'slide display-none';
  buttonsSLidesArray[currentSlide].classList.remove('paginator-button-current');
  currentSlide = (n + slidesArray.length) % slidesArray.length;
  slidesArray[currentSlide].className = 'slide';
  buttonsSLidesArray[currentSlide].classList.add('paginator-button-current');
}
