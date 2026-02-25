
    (function () {
  const openButtons = document.querySelectorAll('[data-modal]');
  const closeSelectors = '[data-close]';

  function openModal(modal) {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-modal');
      const modal = document.getElementById(id);
      if (modal) openModal(modal);
    });
  });

  document.addEventListener('click', (e) => {
    const modal = e.target.closest('.modal');
    if (!modal) return;

    if (e.target.matches(closeSelectors)) closeModal(modal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const modal = document.querySelector('.modal.is-open');
    if (modal) closeModal(modal);
  });
})();