
const colors = ['orange', 'blue']


const headerContainer = document.querySelector('header')
const authorName = document.querySelector('.author-name');
const bottomMenu = document.querySelector('.bottom-menu');
const phoneNumber = document.querySelector('.phone-number');
const headerNav = document.querySelectorAll('.header-nav');

window.addEventListener('scroll', function () {

  const scrollFromTop = window.pageYOffset
  if(scrollFromTop > 319)
  {
    bottomMenu.classList.add('scroll-border')
    headerContainer.classList.add('scroll-background');
    authorName.classList.add('scroll-author-title');
    phoneNumber.classList.add('scroll-author-title')
    headerNav.forEach((e)=>{
      e.classList.add('scroll-author-title');
    })
  }else
  {
    bottomMenu.classList.remove('scroll-border')
    headerContainer.classList.remove('scroll-background');
    authorName.classList.remove('scroll-author-title');
    phoneNumber.classList.remove('scroll-author-title')
    headerNav.forEach((e)=>{
      e.classList.remove('scroll-author-title');
    })
  }

})

console.log("asdsadas")