/*!
 * Start Bootstrap - Resume v4.0.0-beta.2 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
 */
import { ScrollSpy, Collapse } from 'bootstrap';

// Define a function to smoothly scroll to a section
const smoothScroll = (event) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  window.scrollTo({
    top: document.querySelector(targetId).offsetTop,
    behavior: "smooth"
  });
};

// Attach the smoothScroll function to click events on links with the js-scroll-trigger class
document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])').forEach((link) => {
  link.addEventListener('click', smoothScroll);
});

// Collapse the navbar after click on a js-scroll-trigger class link
document.querySelectorAll('.js-scroll-trigger').forEach((link) => {
  link.addEventListener('click', () => {
    let navbarToggler = document.querySelector('.navbar-toggler');
    let bsCollapse = Collapse.getInstance(navbarToggler);
    if(bsCollapse && bsCollapse._isShown) {
      bsCollapse.toggle();
    }
  });
});

// Initialize Scrollspy
new ScrollSpy(document.body, {
  target: '#sideNav'
});