// Testimonials Swiper
const swiperTestimonials = new Swiper(".swiper-testimonials", {
  loop: true,
  autoHeight: false,
  pagination: {
    el: ".swiper-pagination-t",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-t",
    prevEl: ".swiper-button-prev-t",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});

// Hero Swiper
const swiperHeroSection = new Swiper(".swiper-hero-section", {
  loop: true,
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination-h",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-h",
    prevEl: ".swiper-button-prev-h",
  },
  slidesPerView: 1,
  spaceBetween: 10,
});
