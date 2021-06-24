const faq_toggle = document.querySelectorAll('.faq-toggle');

faq_toggle.forEach((toggles) => {
  toggles.addEventListener('click', () => {
    toggles.parentNode.classList.toggle('active');
  });
});
