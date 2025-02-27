// Header & Main Height Adjustmust

const header = document.querySelector(".header");
const main = document.querySelector(".main-section");

main.style.marginTop = `${header.offsetHeight}px`;
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

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
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".stone-slider-btn.swiper-button-next",
        prevEl: ".stone-slider-btn.swiper-button-prev",
    },
    breakpoints: {
        300: {
          slidesPerView: 1,
        //   spaceBetween: 20,
        },
        500: {
          slidesPerView: 2,
        //   spaceBetween: 20,
        },
        788: {
          slidesPerView: 3,
        },
        1040: {
          slidesPerView: 4,
        },
      },
});

// Popular Products Slider

const popularProducts = new Swiper(".popularProducts", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".products-slider-btn.swiper-button-next",
        prevEl: ".products-slider-btn.swiper-button-prev",
    },
    breakpoints: {
        300: {
          slidesPerView: 1,
        //   spaceBetween: 20,
        },
        500: {
          slidesPerView: 2,
        //   spaceBetween: 20,
        },
        788: {
          slidesPerView: 3,
        },
        1040: {
          slidesPerView: 4,
        },
      },
});

// Blogs Slider

const blogsSection = new Swiper(".homeBlogs", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".blogs-slider-btn.swiper-button-next",
        prevEl: ".blogs-slider-btn.swiper-button-prev",
    },
    pagination: {
        el: ".blogs-section .blog-pagi",
        clickable: true,
    },
    breakpoints: {
        300: {
          slidesPerView: 1,
        //   spaceBetween: 20,
        },
        500: {
          slidesPerView: 2,
        //   spaceBetween: 20,
        },
        1040: {
          slidesPerView: 3,
        },
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