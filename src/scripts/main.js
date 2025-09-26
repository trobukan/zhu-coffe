/** > Footer accordion (<@sm only) */
const footerAccordion = () => {
  document.querySelectorAll('.accordion').forEach((acc) => {
    const content = acc.querySelector('.accordion-content');
    const icon = acc.querySelector('.accordion-icon');

    acc.addEventListener('click', () => {
      const isCollapsed = content.classList.contains('accordion-collapsed');
      content.classList.toggle('accordion-collapsed', !isCollapsed);

      icon.style.transform = isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)';
    });
  });
}

/** > Hero header parallax */
const heroParallax = () => {
  window.addEventListener('scroll', () => {
    const parallaxContainer = document.querySelector('.parallax');
    const parallaxItems = document.querySelectorAll('.parallax [data-speed]');
    const heroText = document.querySelector('.parallax span');

    const scrollPosition = window.scrollY;

    parallaxItems.forEach(item => {
      const speed = parseFloat(item.dataset.speed);
      item.style.transform = `translateY(${scrollPosition * speed}px)`;
    });

    const maxScrollForOpacity = 600;
    const opacityValue = 1 - Math.min(scrollPosition / maxScrollForOpacity, 1);
    heroText.style.opacity = opacityValue;

    const blurValue = scrollPosition * 0.01;
    parallaxContainer.style.filter = `blur(${blurValue}px)`;
  });
}

const navTransform = () => {
  const navContainer = document.querySelector("nav")
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY

    if (scrollPosition >= 200) {
      navContainer.classList.add("nav--complete")
      navContainer.classList.remove("nav--initial")
    } else {
      navContainer.classList.remove("nav--complete")
      navContainer.classList.add("nav--initial")
    }
  }
  )
}

/** > Init all functions */
const init = () => {
  navTransform()
  heroParallax()
  footerAccordion()
}

init()