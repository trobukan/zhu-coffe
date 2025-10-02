const initNavScrollLogic = () => {
  const navComponent = document.querySelector("app-nav");
  const headerContainer = document.querySelector("header");

  const navContainer = navComponent?.querySelector("nav");
  const homePath = "/";

  const isHomePage = window.location.pathname === homePath || window.location.pathname.endsWith('/index.html');
  const headerHeight = headerContainer?.offsetHeight;

  if (!isHomePage) {
    navContainer.classList.remove("nav--initial");
    navContainer.classList.add("nav--complete");
    navContainer.classList.remove("nav--hidden");
    return;
  }

  let lastScroll = 0;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const isPastHeader = scrollPosition >= headerHeight;

    navContainer.classList.toggle("nav--complete", isPastHeader);
    navContainer.classList.toggle("nav--initial", !isPastHeader);

    const isScrollingDown = scrollPosition > lastScroll && scrollPosition > headerHeight;
    navContainer.classList.toggle("nav--hidden", isScrollingDown);

    lastScroll = scrollPosition;
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);
};

if (customElements.get('app-nav')) {
  initNavScrollLogic();
} else {
  customElements.whenDefined('app-nav').then(initNavScrollLogic);
}

