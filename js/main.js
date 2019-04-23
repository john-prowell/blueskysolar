// smooth-scroll
const scroll = new SmoothScroll('a[href*="#"]', {
  header: '[data-scroll-header]'
});

// scroll functions
window.onscroll = () => {
  navScroll();
  scrollToTop();
};

const navScroll = () => {
  const nav = document.getElementById('nav');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.classList.add('header__nav--scrolled');
  } else {
    nav.classList.remove('header__nav--scrolled');
  }
};

// scroll back to top button
const scrollToTop = () => {
  const backToTop = document.getElementById('backToTop');
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTop.style.display = 'inline';
  } else {
    backToTop.style.display = 'none';
  }
};
