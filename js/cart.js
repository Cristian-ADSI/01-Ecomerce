const btnEmptyCart = document.getElementById('empty-cart');
const btnRemoveProduct = document.getElementById('remove-product');

const cart = document.getElementById('cart');

const arrivalsProducts = document.getElementById('arrivals-products');
loadEventListeners();
function loadEventListeners() {
  arrivalsProducts.addEventListener('click', addProduct);
}

let productsCart = [];
function addProduct(e) {
  e.preventDefault();

  if (e.target.classList.contains('add-product')) {
    const product = e.target.parentElement;
    const atributes = getAtributes(product);
    productsCart = [...productsCart, atributes];
    chargeCart();
  }
}
function getAtributes(product) {
  const properties = {
    id: product.id,
    image: product.querySelector('img').src,
    name: product.querySelector('.name').textContent,
    brand: product.querySelector('.brand').textContent,
    cantidad: 1,
    price: product.querySelector('.current').textContent,
  };

  return properties;
}

const cartTable = document.querySelector('#cart-table tbody');
function chargeCart() {
  clearHtmlCart();

  for (const product of productsCart) {
    const { cantidad,id, image, name, price } = product;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="image"> <img src="${image}"/> </td>
      <td class="name" > ${name}</td>
      <td class="price"> ${price}</td>
      <td class="count"> ${cantidad} </td>
      <td class="remove"> <a href="#" data-id="${id}" >X</a> </td>
    `;
    cartTable.appendChild(row);
  }
}

function clearHtmlCart() {
  while (cartTable.firstChild) {
    cartTable.removeChild(cartTable.firstChild);
  }
}
