const headerContainer = document.querySelector("header");
const authorName = document.querySelector(".author-name");
const bottomMenu = document.querySelector(".bottom-menu");
const contactNav = document.querySelector(".contact-nav");
const phoneNumber = document.querySelector(".contact");
const headerNav = document.querySelectorAll(".header-nav");
const contactSpan = document.querySelectorAll(".contact-span");
const informationTittle = document.querySelector(".information-title");
window.addEventListener("scroll", function () {
  const scrollFromTop = window.pageYOffset;
  if (scrollFromTop > 50) {
    bottomMenu.classList.add("scroll-border");
    headerContainer.classList.add("scroll-background");
    authorName.classList.add("scroll-author-title");
    phoneNumber.classList.add("scroll-nav");
    contactNav.classList.add("scroll-nav-border");
    informationTittle.classList.add("scroll-information-tittle");

    headerNav.forEach((e) => {
      e.classList.add("scroll-nav");
    });
    contactSpan.forEach((e) => {
      e.classList.add("scroll-nav-contact-nav");
    });
  } else {
    bottomMenu.classList.remove("scroll-border");
    headerContainer.classList.remove("scroll-background");
    authorName.classList.remove("scroll-author-title");
    phoneNumber.classList.remove("scroll-nav");
    contactNav.classList.remove("scroll-nav-border");
    informationTittle.classList.remove("scroll-information-tittle");
    headerNav.forEach((e) => {
      e.classList.remove("scroll-author-title");
    });
    contactSpan.forEach((e, index) => {
      e.classList.remove("scroll-nav-contact-nav");
    });
  }
});

