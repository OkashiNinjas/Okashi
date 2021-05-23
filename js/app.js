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


