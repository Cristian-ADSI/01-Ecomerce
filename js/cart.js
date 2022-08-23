const arrivalsProducts = document.getElementById('arrivals-products');
const btnEmptyCart = document.getElementById('empty-cart');
const cart = document.getElementById('cart');
const cartTable = document.querySelector('#cart-table');

loadEventListeners();
function loadEventListeners() {
  arrivalsProducts.addEventListener('click', addProduct);
}

function addProduct(e) {
  e.preventDefault();
  if (e.target.classList.contains('add-product')) {
    alert('porducto agregado');
  }
}
