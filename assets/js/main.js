// Select the navbar element
const navbar = document.getElementById('navbar');

// Function to toggle navbar class based on scroll position
function toggleNavbarClass() {
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
    navbar.classList.remove('navbar-default');
  } else {
    navbar.classList.remove('navbar-scroll');
    navbar.classList.add('navbar-default');
  }
}

// Listen to scroll events
window.addEventListener('scroll', toggleNavbarClass);


const hamBtn = document.getElementById('hamburger-menu');
const box2 = document.getElementById('box2');
const navbarcolor = document.getElementById('navbar');

// Add event listener to hamBtn
hamBtn.addEventListener('click', function () {
  // Toggle the 'highlight' class on box2
  box2.classList.toggle('highlight');
  hamBtn.classList.toggle('active');
  navbarcolor.classList.toggle('active');
});




const menuButton = document.getElementById('secon-btn-id');
const menu = document.getElementById('ul-id');

menuButton.addEventListener('click', function (event) {
  menu.classList.toggle('active');
  menuButton.classList.toggle('active');
});

const menuButton2 = document.getElementById('secon-btn-id2');
const menu2 = document.getElementById('ul-id2');
const menuButton3 = document.getElementById('secon-btn-id3');
const menu3 = document.getElementById('ul-id3');

menuButton2.addEventListener('mouseenter', function () {
  menu2.classList.add('active');
  menuButton2.classList.add('active');

});

menuButton2.addEventListener('mouseleave', function () {
  menu2.classList.remove('active');
  menuButton2.classList.remove('active');

});

menuButton3.addEventListener('mouseenter', function () {
  menu3.classList.add('active');
  menuButton3.classList.add('active');

});

menuButton3.addEventListener('mouseleave', function () {
  menu3.classList.remove('active');
  menuButton3.classList.remove('active');

});
/***************************
progressbar

***************************/
gsap.to('.mil-progress', {
  height: '100%',
  ease: 'sine',
  scrollTrigger: {
    scrub: 0.3
  }
});

