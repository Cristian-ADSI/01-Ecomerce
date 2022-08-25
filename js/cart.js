const arrivalsProducts = document.getElementById('arrivals-products');
const btnEmptyCart = document.getElementById('empty-cart');
const cart = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');

let productsCart = [];

loadEventListeners();
function loadEventListeners() {
  arrivalsProducts.addEventListener('click', addProduct);
  cart.addEventListener('click', removeProduct);

  btnEmptyCart.addEventListener('click', (e) => {
    e.preventDefault();
    productsCart = [];
    clearCart();
  });
}

function addProduct(e) {
  e.preventDefault();

  if (e.target.classList.contains('add-product')) {
    const element = e.target.parentElement;
    getNewProduct(element);
    chargeCart();
    addItems();
  }
}

function getNewProduct(element) {
  const newProduct = {
    brand: element.querySelector('.brand').textContent,
    quantity: 1,
    id: element.id,
    image: element.querySelector('img').src,
    name: element.querySelector('.name').textContent,
    price: element.querySelector('.current').textContent,
  };
  const exists = productsCart.some((product) => product.id === newProduct.id);

  if (exists) {
    updateProduct(newProduct);
  } else {
    productsCart = [...productsCart, newProduct];
  }
}

function updateProduct(newProduct) {
  const updatedProduct = productsCart.map((product) => {
    if (product.id === newProduct.id) {
      product.quantity++;
      return product;
    }
    if (product.id !== newProduct.id) {
      return product;
    }
  });

  productsCart = [...updatedProduct];
}

const cartTable = document.querySelector('#cart-table tbody');
function chargeCart() {
  clearCart();
  for (const product of productsCart) {
    const productItem = createProductItem(product);
    cartTable.appendChild(productItem);
  }
}

function clearCart() {
  while (cartTable.firstChild) {
    cartTable.removeChild(cartTable.firstChild);
  }
}
function createProductItem(product) {
  const { quantity, id, image, name, price } = product;
  const row = document.createElement('tr');

  row.innerHTML = `
      <td class="image"> <img src="${image}"/> </td>
      <td class="name" > ${name}</td>
      <td class="price"> ${price}</td>
      <td class="count"> ${quantity} </td>
      <td class="remove">
       <a class="remove-product"  href="#" data-id="${id}">X</a> 
      </td>
    `;

  return row;
}

function removeProduct(e) {
  e.preventDefault();
  if (e.target.classList.contains('remove-product')) {
    const productId = e.target.getAttribute('data-id');
    removeItems(productId);
    productsCart = productsCart.filter((product) => product.id !== productId);
    chargeCart();
  }
}

function addItems() {
  let items = 0;
  for (const product of productsCart) {
    items = items + product.quantity;
  }
  cartItems.textContent = `${items}`;
}

function removeItems(productId) {
  let quantity = 0;
  let items = cartItems.textContent;
  productsCart.map((product) => {
    if (product.id == productId) {
      quantity = product.quantity;
    }
  });

  cartItems.textContent = `${items - quantity}`;
}
