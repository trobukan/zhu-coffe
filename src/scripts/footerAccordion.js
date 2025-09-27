/** > Footer accordion (<@sm only) */
document.querySelectorAll('.accordion').forEach((acc) => {
  const content = acc.querySelector('.accordion-content');
  const icon = acc.querySelector('.accordion-icon');

  acc.addEventListener('click', () => {
    const isCollapsed = content.classList.contains('accordion-collapsed');
    content.classList.toggle('accordion-collapsed', !isCollapsed);

    icon.style.transform = isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)';
  });
});


