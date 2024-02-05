const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 17,
  freeMode: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
