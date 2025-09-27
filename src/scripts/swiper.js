const swiper = new Swiper(".cards-mobile", {
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
  },
  spaceBetween: -20,
  breakpoints: {
    400: {
      spaceBetween: -120,
    },
    360: {
      spaceBetween: -100,
    },
    320: {
      spaceBetween: -70,
    },
    260: {
      spaceBetween: -10,
    }
  }
});