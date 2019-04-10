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

var servSlidesArray = document.querySelectorAll('.services-slide');
var servSliderBtnsArray = document.querySelectorAll('.services-btn');

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
var mainSliderParam = {
  btnsClassActive: 'paginator-button-current',
  slideOffClass: 'display-none'
};

[].forEach.call(buttonsSLidesArray, function(el, i) {
  el.addEventListener('click', function(evt) {
    evt.preventDefault();
    slideChange(this.valueOf(), buttonsSLidesArray, slidesArray, mainSliderParam);
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

// слайдер сервиса
var servicesSliderParam = {
  btnsClassActive: 'services-btn-active',
  slideOffClass: 'display-none'
};

[].forEach.call(servSliderBtnsArray, function(el, i) {
  el.addEventListener('click', function(evt) {
    evt.preventDefault();
    slideChange(this.valueOf(), servSliderBtnsArray, servSlidesArray, servicesSliderParam);
  }.bind(i));
});

//  функции
 function slideChange(indexSlideOn, btnsOfSlides, slides, param) {
  if (indexSlideOn >= btnsOfSlides.length) return;
  for (var i = 0; i < btnsOfSlides.length; i++) {
    if (i === indexSlideOn) {
      btnsOfSlides[i].classList.add(param.btnsClassActive);
      slides[i].classList.remove(param.slideOffClass);
    } else {
      btnsOfSlides[i].classList.remove(param.btnsClassActive);
      slides[i].classList.add(param.slideOffClass);
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
