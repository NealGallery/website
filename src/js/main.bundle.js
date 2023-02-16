/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var switchNav = document.querySelector('#switchNav');
var mbNav = document.querySelector('#mbNav');
var hideNav = document.querySelector('#hideNav');
console.log(switchNav);
switchNav.onclick = function () {
  // mbNav.classList.remove('hidden')
  // mbNav.classList.remove('w-0')
  // mbNav.classList.add('!w-2/3')
  mbNav.style = 'width:80%';
};
hideNav.onclick = function () {
  mbNav.style = 'width:0';
};
/******/ })()
;