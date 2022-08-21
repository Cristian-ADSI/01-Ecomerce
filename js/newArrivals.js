const products = [
  {
    color: 'Brown',
    brand: 'Block Buster',
    image: './assets/products/men-hoddie.webp',
    name: `Men's Hoddie`,
    size: 'L',
    product: {
      discount: 50.0,
      price: 590.0,
      reference: 'RFMH001',
      sale: 413.0,
    },
  },
  {
    color: 'Militar Green',
    brand: 'Capitals',
    image: './assets/products/men-jersey.webp',
    name: `Men's Jersey`,
    size: 'L',
    product: {
      discount: 0,
      price: 180.0,
      reference: 'RFMJ001',
      sale: 0,
    },
  },
];

const newArrivals = document.getElementById('new-arrivals__products');
const fragment = document.createDocumentFragment();

for (const product of products) {
  const card = document.createElement('div');

  const {
    image,
    name,
    product: { price, discount, sale, reference },
  } = product;

  card.className = 'product';
  card.id = `${reference}`;

  card.innerHTML = `
    <img src="${image}" alt="${name}"/>
    <p class="name">${name}</p>
    <span class="price">$${price - discount}</span>
    <span class="discount">${!discount ? '' : '$' + price} </span>
    <button class="add-product">ADD TO BAG</button>
  `;
  
  fragment.appendChild(card);
}
newArrivals.appendChild(fragment);
