(() => {
  const modalOverlay = document.getElementById('contactModalOverlay');
  const contactForm = document.getElementById('contactForm');
  const openContactModalBtn = document.getElementById('openContactModalBtn');
  const closeContacModalBtn = document.getElementById('closeContacModalBtn');

  function addEventListeners() {
    openContactModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showModal();
    });

    closeContacModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      hideModal();
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target.id == 'contactModalOverlay') {
        hideModal();
      }
    });
  }

  function showModal() {
    modalOverlay.classList.toggle('show');
    contactForm.classList.toggle('show');
  }
  function hideModal() {
    modalOverlay.classList.toggle('show');
    contactForm.classList.toggle('show');
  }

  addEventListeners();
})();
