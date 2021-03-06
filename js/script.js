'use strict'

var loginBlock = document.querySelector('.log-block__login');
var userBlock = document.querySelector('.log-block__logout');
var loginBtn = document.querySelector('.log-block__login-btn');
var logoutBtn = document.querySelector('.log-block__logout-link');

var modalOverlay = document.querySelector('.modal-overlay');

if (document.getElementById('index')) {
  // slider
  var buttonsSLidesArray = document.querySelectorAll('.slider__paginator-button');
  var slidesArray = document.querySelectorAll('.slider__slide');
  var nextSlideBtn = document.getElementById('nextSlide');
  var prevSlideBtn = document.getElementById('prevSlide');
  var currentSlide = 0;
  
  var servSlidesArray = document.querySelectorAll('.vertical-slides__slide');
  var servSliderBtnsArray = document.querySelectorAll('.vertical-slides__btn');
  
  // popup
  var popupBtn = document.querySelector('.contacts__btn');
  var popup = document.querySelector('.modal');
  var modalCloseBtn = document.getElementById('formClose');
  var inputName = popup.querySelector('#userName');
  var inputEmail = popup.querySelector('#userEmail');
  var inputMessage =popup.querySelector('#userMessage');
  var modalForm = popup.querySelector('#modalForm');
  var isStorage = true;
  var storageName = '';
  var storageEmail = '';
  
  // map
  var popupMap = document.querySelector('#Ymap');
  var popupMapBtn = document.querySelector('.map__link');
  var popupMapClose = document.getElementById('mapClose');

  // оживление сладйера
  var mainSliderParam = {
    btnsClassActive: 'slider__paginator-button--current',
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
    btnsClassActive: 'vertical-slides__btn--active',
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
    modalShow(popup, evt);
    popup.classList.add('modal--show');
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
    modalClose(popup, evt);
    popup.classList.remove('modal--show');
    popup.classList.remove('modal--error');
  });
  
  modalForm.addEventListener('submit', function(evt) {
    inputName.classList.remove('modal__input--invalid');
    inputEmail.classList.remove('modal__input--invalid');
    inputMessage.classList.remove('modal__input--invalid');
    if (!inputName.value || !inputEmail.value || !inputMessage.value) {
      evt.preventDefault();
      popup.classList.remove('modal--error');
      void popup.offsetWidth;
      popup.classList.add('modal--error');
      if (!inputName.value) {
        inputName.classList.remove('modal__input--invalid');
        void inputName.offsetWidth;
        inputName.classList.add('modal__input--invalid');
      }
      if (!inputEmail.value) {
        inputEmail.classList.remove('modal__input--invalid');
        void inputEmail.offsetWidth;
        inputEmail.classList.add('modal__input--invalid');
      }
      if (!inputMessage.value) {
        inputMessage.classList.remove('modal__input--invalid');
        void inputMessage.offsetWidth;
        inputMessage.classList.add('modal__input--invalid');
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
      if (!popup.classList.contains('display-none')) {
        modalClose(popup,evt);
        popup.classList.remove('modal--error');
      }
      if (!popupMap.classList.contains('display-none')) {
        modalClose(popupMap,evt);
      }
    }
  });

  modalOverlay.addEventListener('click', function(evt) {
    if (!popup.classList.contains('display-none')) {
      modalClose(popup, evt);
      popup.classList.remove('modal--error');
    }
    if (!popupMap.classList.contains('display-none')) {
      modalClose(popup, evt);
    }
  });

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
    modalShow(popupMap, evt);
  });
  
  popupMapClose.addEventListener('click', function(evt) {
    modalClose(popupMap, evt);
  });
}

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


// buy modal
var itemBuyButtons = document.querySelectorAll('.items-list__link--buy');
var modalBuy = document.querySelector('.modal-buy');
var modalBuyClose = document.getElementById('modalBuyClose');
var continueBtn = document.querySelector('.modal-buy__continue');



//модалка добавления товара в корзину
[].forEach.call(itemBuyButtons, function(el, i) {
  el.addEventListener('click', function(evt) {
    modalShow(modalBuy, evt);
  }.bind(i));
});

modalOverlay.addEventListener('click', function(evt) {
  if (!modalBuy.classList.contains('display-none')) {
    modalClose(modalBuy, evt);
  }
});

modalBuyClose.addEventListener('click', function(evt) {
  modalClose(modalBuy, evt);
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27 && !modalBuy.classList.contains('display-none')) {
    modalClose(modalBuy, evt);
  }
});

continueBtn.addEventListener('click', function(evt) {
  modalClose(modalBuy, evt);
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
  slidesArray[currentSlide].className = 'slider__slide display-none';
  buttonsSLidesArray[currentSlide].classList.remove('slider__paginator-button--current');
  currentSlide = (n + slidesArray.length) % slidesArray.length;
  slidesArray[currentSlide].className = 'slider__slide';
  buttonsSLidesArray[currentSlide].classList.add('slider__paginator-button--current');
}

function modalClose(modal, evt) {
  evt.preventDefault();
  modal.classList.add('display-none');
  modalOverlay.classList.add('display-none');
}

function modalShow(modal, evt) {
  evt.preventDefault();
  modal.classList.remove('display-none');
  modalOverlay.classList.remove('display-none');
}
