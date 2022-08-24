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
    const element = e.target.parentElement;
    getNewProduct(element);
    chargeCart();
  }
}

function getNewProduct(element) {

  const newProduct = {
    brand:  element.querySelector('.brand').textContent,
    cantidad: 1,
    id:     element.id,
    image:  element.querySelector('img').src,
    name:   element.querySelector('.name').textContent,
    price:  element.querySelector('.current').textContent,
  };

  const exists = productsCart.some((product) => product.id === newProduct.id);

  if (exists) {
    const updatedProduct = productsCart.map((product) => {
      if (product.id === newProduct.id) { product.cantidad++; return product;}
      if (product.id !== newProduct.id) { return product;}
    });

    productsCart = [...updatedProduct];
  } else {
    productsCart = [...productsCart, newProduct];
  }
}

const cartTable = document.querySelector('#cart-table tbody');

function chargeCart() {
  clearHtmlCart();

  for (const product of productsCart) {
    const { cantidad, id, image, name, price } = product;
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
function updateProduct(product){
  
}
