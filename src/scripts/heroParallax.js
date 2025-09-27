/** > Hero header parallax */
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


