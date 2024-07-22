// Navbar menu and accardion menu functions

let humBurger = document.querySelector(".humburger_menu");
let navbarMenuClose = document.querySelector(".close_navigation_minus");
let navbar = document.querySelector(".navigation_responsive_menu");
let accardionMenuItemFirst = document.querySelector(".first");
let accardionMenuItemSecond = document.querySelector(".second");
let accardionMenuItemThird = document.querySelector(".third");
let accardionMenuItemFourth = document.querySelector(".fourth");
let accardionMenuItemFifth = document.querySelector(".fifth");
let accardionMenuItemSixth = document.querySelector(".sixth");
let accardionMenuItemSeventh = document.querySelector(".seventh");
let accardionMenuItemEighth = document.querySelector(".eighth");
let accardionPlusOpen = document.querySelector(".plusFirstAccardion");
let accardionPlusOpenSecond = document.querySelector(".plusSecondAccardion");
let accardionMinusClose = document.querySelector(".minusFirstAccardion");
let accardionMinusCloseSecond = document.querySelector(".minusSecondAccardion");

const Navigation_Accardion_Menu = (value) => {
  if (value === "navigation_responsive") {
    humBurger.classList.toggle("none");
    navbarMenuClose.classList.toggle("flex");
    navbar.classList.toggle("right");
  } else if (value === "accordion_navigation_menu_First") {
    accardionMenuItemFirst.classList.toggle("flex");
    accardionMenuItemSecond.classList.toggle("flex");
    accardionMenuItemThird.classList.toggle("flex");
    accardionMenuItemFourth.classList.toggle("flex");
    accardionPlusOpen.classList.toggle("none");
    accardionMinusClose.classList.toggle("block");
  } else if (value === "accordion_navigation_menu_Second") {
    accardionMenuItemFifth.classList.toggle("flex");
    accardionMenuItemSixth.classList.toggle("flex");
    accardionMenuItemSeventh.classList.toggle("flex");
    accardionMenuItemEighth.classList.toggle("flex");
    accardionPlusOpenSecond.classList.toggle("none");
    accardionMinusCloseSecond.classList.toggle("block");
  }
};
// Navbar menu and accardion menu functions



// First Carousel Function
let currentIndex = 0;
const visibleSlides = 3;
const slides = document.querySelector(".carousel_cover");
const totalSlides = document.querySelectorAll(".carousel_item").length;

function showSlide(index) {
  if (index >= 2) {
    slides.style.transition = "none";
    currentIndex = 0;
    slides.style.transform = `translateX(-29%)`;
    setTimeout(() => {
      slides.style.transition = "transform 0.5s ease-in-out";
      showSlide(currentIndex + 1);
    }, 0);
  } else if (index < 0) {
    slides.style.transition = "none";
    currentIndex = totalSlides - visibleSlides - 1;
    slides.style.transform = `translateX(${
      (-currentIndex * 120) / visibleSlides
    }%)`;
    setTimeout(() => {
      slides.style.transition = "transform 0.5s ease-in-out";
      showSlide(currentIndex - 1);
    }, 0);
  } else {
    currentIndex = index;
    slides.style.transform = `translateX(${
      (-currentIndex * 120) / visibleSlides
    }%)`;
  }
}

function moveSlide(step) {
  showSlide(currentIndex + step);
}

setInterval(() => {
  moveSlide(1);
}, 2000);

if (currentIndex === 3) {
  showSlide(currentIndex * 0);
}
// First Carousel Function



// Second Carousel Function
let certainIndex = 0;
const visibleMemberSlideitems = 3;
const member_slide_items = document.querySelector(".man_image_slider_items");
const man_image_slider_item = document.querySelectorAll(".slider_item").length;

function showMemberSlide(index) {
  if (index >= 2) {
    member_slide_items.style.transition = "none";
    certainIndex = 0;
    member_slide_items.style.transform = `translateX(-29%)`;
    setTimeout(() => {
      member_slide_items.style.transition = "transform 0.5s ease-in-out";
      showMemberSlide(certainIndex + 1);
    }, 0);
  } else if (index < 0) {
    man_image_slider_item.style.transition = "none";
    certainIndex = man_image_slider_item - visibleMemberSlideitems - 1;
    man_image_slider_item.style.transform = `translateX(${
      (-certainIndex * 120) / visibleMemberSlideitems
    }%)`;
    setTimeout(() => {
      member_slide_items.style.transition = "transform 0.5s ease-in-out";
      showMemberSlide(certainIndex - 1);
    }, 0);
  } else {
    certainIndex = index;
    member_slide_items.style.transform = `translateX(${
      (-certainIndex * 120) / visibleMemberSlideitems
    }%)`;
  }
}

function moveMemberSlide(step) {
  showMemberSlide(certainIndex + step);
}

setInterval(() => {
  moveMemberSlide(1);
}, 2000);

if (certainIndex === 3) {
  showMemberSlide(certainIndex * 0);
}
// Second Carousel Function





// Footer Accardion Menu

let footerAccardionMenuToggle = document.getElementsByClassName("footer_accardion_menu_items");
let footerAccardionOpen = document.querySelector(".footer_accadrion_open");
let footerAccardionClose = document.querySelector(".footer_accardion_close");
let footerAccardionSecondOpen = document.querySelector(".footer_accadrion_open_second");
let footerAccardionSecondClose = document.querySelector(".footer_accardion_close_second");
const FooterAccardionMenu = (value) => {
  for (let i = 0; i < footerAccardionMenuToggle.length; i++) {
    if (value === "firstOne" && i > 0 && i <= 4) {
      footerAccardionMenuToggle[i].classList.toggle("flex");
    } else if (value === "secondOne" && i > 5 && i <= 9) {
      footerAccardionMenuToggle[i].classList.toggle("flex");
    }
  }
  if (value === 'firstOne') {
    footerAccardionOpen.classList.toggle('none')
    footerAccardionClose.classList.toggle('block')
  }else {
    footerAccardionSecondOpen.classList.toggle('none')
    footerAccardionSecondClose.classList.toggle('block')
  }
};



// Footer Accardion Menu