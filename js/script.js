'use strict'

var loginBlock = document.querySelector('.header-user-logout');
var userBlock = document.querySelector('.header-user-login');
var loginBtn = document.querySelector('.header-login-button');
var logoutBtn = document.querySelector('.header-user-logout-link');

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