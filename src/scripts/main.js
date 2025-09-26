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
  const parallaxContainer = document.querySelector('.parallax');
  const parallaxItems = document.querySelectorAll('.parallax [data-speed]');
  const heroText = document.querySelector('.parallax span');

  let latestScroll = 0;
  let ticking = false;

  const maxScrollForOpacity = 600;

  const updateParallax = (scrollY) => {
    parallaxItems.forEach(item => {
      const speed = parseFloat(item.dataset.speed);
      const baseOffset = parseFloat(item.dataset.offset) || 0;
      item.style.transform = `translateY(${scrollY * speed + baseOffset}px)`;
    });

    heroText.style.opacity = 1 - Math.min(scrollY / maxScrollForOpacity, 1);
    parallaxContainer.style.filter = `blur(${scrollY * 0.01}px)`;
  };

  window.addEventListener('scroll', () => {
    latestScroll = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateParallax(latestScroll);
        ticking = false;
      });
      ticking = true;
    }
  });
};

const navTransform = () => {
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
};

const hiddenScrollElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-el");
      }
    })
  })

  const hiddenElements = document.querySelectorAll(".hidden-el")
  hiddenElements.forEach((el) => observer.observe(el))
}


/** > Init all functions */
document.addEventListener('DOMContentLoaded', () => {
  heroParallax();
  navTransform();
  footerAccordion();
  hiddenScrollElements();
});