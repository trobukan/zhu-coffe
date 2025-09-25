// > Footer Accordion (@<sm)
document.querySelectorAll('.accordion').forEach((acc) => {
  const content = acc.querySelector('.accordion-content');
  const icon = acc.querySelector('.accordion-icon');

  acc.addEventListener('click', () => {
    const isCollapsed = content.classList.contains('accordion-collapsed');
    content.classList.toggle('accordion-collapsed', !isCollapsed);

    icon.style.transform = isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)';
  });
});

// > Hero Parallax Scroll
window.addEventListener('scroll', () => {
  const parallaxContainer = document.querySelector('.parallax');
  const parallaxItems = document.querySelectorAll('[data-speed]');
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