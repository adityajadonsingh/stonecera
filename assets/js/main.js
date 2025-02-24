// Home Banner Slider

const homeBanner = new Swiper(".homeBanner", {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    speed: 800,
    pagination: {
        el: ".homeBanner .swiper-pagination",
    },
});

// Stone Collection Slider

const swiper = new Swiper(".stoneCollections", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".stone-slider-btn.swiper-button-next",
        prevEl: ".stone-slider-btn.swiper-button-prev",
      },
    // pagination: {
    //   el: ".stoneCollections .swiper-pagination",
    //   clickable: true,
    // },
  });