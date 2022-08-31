(() => {
  const toggleMenuBtn = document.getElementById('toogleMenu');
  const menu = document.getElementById('menu');

  toggleMenuBtn.addEventListener('click', () => menu.classList.toggle('show'));
})();
