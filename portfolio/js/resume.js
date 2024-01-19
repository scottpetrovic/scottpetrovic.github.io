// Define a function to smoothly scroll to a section
const smooth_scroll = (event) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  window.scrollTo({
    top: document.querySelector(targetId).offsetTop,
    behavior: "smooth"
  });
};

/**
 *  Attach the smooth_scroll function to click events on links with the js-scroll-trigger class
 */
function add_scroll_triggers() {
  document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])').forEach((link) => {
    link.removeEventListener('click', smooth_scroll); // remove in case it already exists
    link.addEventListener('click', smooth_scroll);
  });
}

export { add_scroll_triggers }