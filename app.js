


const colors = ['orange', 'blue']


const headerContainer = document.querySelector('header')
const authorName = document.querySelector('.author-name');
const bottomMenu = document.querySelector('.bottom-menu');
const contactNav = document.querySelector('.contact-nav');
const phoneNumber = document.querySelector('.contact');
const headerNav = document.querySelectorAll('.header-nav');
const contactSpan = document.querySelectorAll('.contact-span')
window.addEventListener('scroll', function () {

  const scrollFromTop = window.pageYOffset
  if(scrollFromTop > 50)
  {
    bottomMenu.classList.add('scroll-border')
    headerContainer.classList.add('scroll-background');
    authorName.classList.add('scroll-author-title');
    phoneNumber.classList.add('scroll-nav')
    contactNav.classList.add('scroll-nav-border')
    headerNav.forEach((e)=>{
      e.classList.add('scroll-nav');
    })
    contactSpan.forEach((e)=>{
      e.classList.add('scroll-nav-contact-nav');
    })
  }else
  {
    bottomMenu.classList.remove('scroll-border')
    headerContainer.classList.remove('scroll-background');
    authorName.classList.remove('scroll-author-title');
    phoneNumber.classList.remove('scroll-nav')
    headerNav.forEach((e)=>{
      e.classList.remove('scroll-author-title');
    })
    contactSpan.forEach((e)=>{
      e.classList.remove('scroll-nav-contact-nav');
    })
  }

})






var typed = new Typed('.element', options)

