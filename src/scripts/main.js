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
  const parallaxItems = document.querySelectorAll('[data-speed]');
  const scrollPosition = window.scrollY;

  parallaxItems.forEach(item => {
    const speed = parseFloat(item.dataset.speed);
    item.style.transform = `translateY(${scrollPosition * speed}px)`;
  });
});