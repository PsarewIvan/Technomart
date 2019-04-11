'use strict'

var loginBlock = document.querySelector('.header-user-logout');
var userBlock = document.querySelector('.header-user-login');
var loginBtn = document.querySelector('.header-login-button');
var logoutBtn = document.querySelector('.header-user-logout-link');

// slider
var buttonsSLidesArray = document.querySelectorAll('.paginator-button');
var slidesArray = document.querySelectorAll('.slide');
var nextSlideBtn = document.querySelector('.slider-next-btn');
var prevSlideBtn = document.querySelector('.slider-prev-btn');
var currentSlide = 0;

var servSlidesArray = document.querySelectorAll('.services-slide');
var servSliderBtnsArray = document.querySelectorAll('.services-btn');

// popup
var popupBtn = document.querySelector('.info-contact-link');
var popup = document.querySelector('.modal');
var modalCloseBtn = popup.querySelector('.modal-close');
var inputName = popup.querySelector('#userName');
var inputEmail = popup.querySelector('#userEmail');
var inputMessage =popup.querySelector('#userMessage');
var modalForm = popup.querySelector('#modalForm');
var modalOverlay = document.querySelector('.modal-overlay');
var isStorage = true;
var storageName = '';
var storageEmail = '';

// map
var popupMap = document.querySelector('#Ymap');
var popupMapBtn = document.querySelector('.map-link');
var popupMapClose = popupMap.querySelector('.close-map-btn');

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

// модалка
try {
  storageName = localStorage.getItem('login');
  storageEmail = localStorage.getItem('email');
} catch(err) {
  isStorage = false;
}

popupBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('display-none');
  popup.classList.add('modal-show');
  modalOverlay.classList.remove('display-none');
  if (storageName && storageEmail) {
    inputName.value = storageName;
    inputEmail.value = storageEmail;
    inputMessage.focus();
  } else if (storageEmail) {
    inputEmail.value = storageEmail;
    inputName.focus();
  } else if (storageName) {
    inputName.value = storageName;
    inputEmail.focus();
  } else {
    inputName.focus();
  }
});

modalCloseBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('display-none');
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
  modalOverlay.classList.add('display-none');
});

modalForm.addEventListener('submit', function(evt) {
  inputName.classList.remove('modal-input-invalid');
  inputEmail.classList.remove('modal-input-invalid');
  inputMessage.classList.remove('modal-input-invalid');
  if (!inputName.value || !inputEmail.value || !inputMessage.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    void popup.offsetWidth;
    popup.classList.add('modal-error');
    if (!inputName.value) {
      inputName.classList.remove('modal-input-invalid');
      void inputName.offsetWidth;
      inputName.classList.add('modal-input-invalid');
    }
    if (!inputEmail.value) {
      inputEmail.classList.remove('modal-input-invalid');
      void inputEmail.offsetWidth;
      inputEmail.classList.add('modal-input-invalid');
    }
    if (!inputMessage.value) {
      inputMessage.classList.remove('modal-input-invalid');
      void inputMessage.offsetWidth;
      inputMessage.classList.add('modal-input-invalid');
    }
  } else {
    if (isStorage) {
      localStorage.setItem('login', inputName.value);
      localStorage.setItem('email', inputEmail.value);
    }
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!popup.classList.contains('display-none')) {
      popup.classList.add('display-none');
      popup.classList.remove('modal-error');
      modalOverlay.classList.add('display-none');
    }
    if (!popupMap.classList.contains('display-none')) {
      popupMap.classList.add('display-none');
      modalOverlay.classList.add('display-none');
    }
  }
});

modalOverlay.addEventListener('click', function(evt) {
  if (!popup.classList.contains('display-none')) {
    evt.preventDefault();
    popup.classList.add('display-none');
    popup.classList.remove('modal-error');
    modalOverlay.classList.add('display-none');
  }
  if (!popupMap.classList.contains('display-none')) {
    evt.preventDefault();
    popupMap.classList.add('display-none');
    modalOverlay.classList.add('display-none');
  }
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

// yandex map
ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("Ymap", {
    center: [59.939029, 30.315818],
    zoom: 16,
    controls: ['typeSelector', 'zoomControl']
  }, {
    typeSelectorFloat: 'left'
  });
  var placemark = new ymaps.Placemark([59.938631, 30.323055], {
    hintContent: 'Большая Конюшенная ул., 19'
  });
  myMap.geoObjects.add(placemark);
}

popupMapBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupMap.classList.remove('display-none');
  popupMap.classList.add('modal-show');
  modalOverlay.classList.remove('display-none');
});

popupMapClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupMap.classList.add('display-none');
  popupMap.classList.remove('modal-show');
  modalOverlay.classList.add('display-none');
});
