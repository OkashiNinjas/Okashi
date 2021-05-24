/* eslint-disable no-empty */
const links = document.querySelectorAll('.linkss');
const sections = document.querySelectorAll('section');

function changeLinkStateNav() {
  let sectionIndex = sections.length;

  // eslint-disable-next-line no-empty
  while (
    --sectionIndex &&
    window.scrollY + 50 < sections[sectionIndex].offsetTop
  ) {}

  links.forEach((link) => link.classList.remove('active'));
  links[sectionIndex].classList.add('active');
}

window.scroll({
  top: 2500,
  left: 0,
  behavior: 'smooth',
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: 'smooth',
});

// Scroll to a certain element
document.querySelector('.linkss').scrollIntoView({
  behavior: 'smooth',
});

changeLinkStateNav();
window.addEventListener('scroll', changeLinkStateNav);

// eslint-disable-next-line no-var
var buttonToTop = document.getElementById('myBtnToTop');

// var navBars = document.getElementById('navBar');
window.onscroll = function () {
  scrollFunctionToTop();
};

function scrollFunctionToTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonToTop.style.display = 'block';
    // navBars.style.backgroundColor= linear-gradient(to right, red,rgb(95, 7, 7), purple, rgb(202, 91, 202));
  } else {
    buttonToTop.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
// eslint-disable-next-line no-unused-vars
function scrollTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
