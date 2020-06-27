const sections = document.querySelectorAll('.scroll-section');
const navLinks = document.querySelectorAll('#main-nav a');
const sectionMargin = 200;

function makeActive(link) {
  navLinks[link].classList.add('active-page');
}

function removeActive(link) {
  navLinks[link].classList.remove('active-page');
}

function removeAllActive() {
  [...Array(sections.length).keys()].forEach(link => removeActive(link));
}

window.addEventListener('scroll', () => {
  let currentSection = sections.length - [...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - sectionMargin) - 1;
  removeAllActive();
  makeActive(currentSection);
});
