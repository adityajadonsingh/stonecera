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

const stoneCollections = new Swiper(".stoneCollections", {
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

// Popular Products Slider

const popularProducts = new Swiper(".popularProducts", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".products-slider-btn.swiper-button-next",
        prevEl: ".products-slider-btn.swiper-button-prev",
    },
    // pagination: {
    //   el: ".stoneCollections .swiper-pagination",
    //   clickable: true,
    // },
});

// Blogs Slider

const blogsSection = new Swiper(".homeBlogs", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".blogs-slider-btn.swiper-button-next",
        prevEl: ".blogs-slider-btn.swiper-button-prev",
    },
    pagination: {
      el: ".blogs-section .blog-pagi",
      clickable: true,
    },
});

// Testimonial Slider

const testimonial = new Swiper(".testimonial", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: ".testi-slider-btn.swiper-button-next",
        prevEl: ".testi-slider-btn.swiper-button-prev",
    },
    pagination: {
      el: ".blogs-section .blog-pagi",
      clickable: true,
    },
});