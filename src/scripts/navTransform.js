const navContainer = document.querySelector("nav");
const headerContainer = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const headerHeight = headerContainer.offsetHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= headerHeight) {
    navContainer.classList.add("nav--complete");
    navContainer.classList.remove("nav--initial");
  } else {
    navContainer.classList.remove("nav--complete");
    navContainer.classList.add("nav--initial");
  }
  if (scrollPosition > lastScroll && scrollPosition) {
    navContainer.classList.add("nav--hidden");
  } else {
    navContainer.classList.remove("nav--hidden");
  }

  lastScroll = scrollPosition;
});


