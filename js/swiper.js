const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  speed: 400,
  loop: true,
  autoHeight: true,
  allowToucMove: true,
  centeredSlides: true,
  centeredSlidesBounds: true,

  pauseOnMouseEnte:true,

  autoplay: {
    delay: 2000,
  },
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    
  },
});