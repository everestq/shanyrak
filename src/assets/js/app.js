import objectFitImages from 'object-fit-images'
import {burgerBtn} from './burger.js'
import {popupWindow} from './popup.js'

burgerBtn('#burger')
popupWindow('[data-id="callback-btn"]', '#callback-form')
objectFitImages()

import Swiper, { EffectFlip } from 'swiper';

// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/core';


if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const heroSwiper = new Swiper('.swiper-container', {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  speed: 1000,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})
