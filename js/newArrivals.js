const products = [
  {
    color: 'cockie',
    brand: 'Block Buster',
    image: './assets/products/wmen-jersey-RFWJ001.webp',  
    name: `Women's Jersey`,
    size: 'L',
    product: {
      discount: 0,
      price: 120,
      reference: 'RFWJ001',
      sale: 0,
    },
  },
  {
    color: 'cockie',
    brand: 'Block Buster',
    image: './assets/products/wmen-jersey-RFWJ002.webp', 
    name: `Women's Jersey`,
    size: 'L',
    product: {
      discount: 0,
      price: 610,
      reference: 'RFWJ002',
      sale: 0,
    },
  },
  {
    color: 'Brown',
    brand: 'Block Buster',
    image: './assets/products/men-hoddie-RFMH001.webp',
    name: `Men's Hoddie`,
    size: 'L',
    product: {
      discount: 50,
      price: 590,
      reference: 'RFMH001',
      sale: 0,
    },
  },
  {
    color: 'Militar Green',
    brand: 'Capitals',
    image: './assets/products/men-jersey-RFMJ001.webp',
    name: `Men's Jersey`,
    size: 'L',
    product: {
      discount: 0,
      price: 180,
      reference: 'RFMJ001',
      sale: 0,
    },
  },
  {
    color: 'Brown',
    brand: 'Capitals',
    image: './assets/products/men-coat-RFMC001.webp',
    name: `Men's Coat`,
    size: 'M',
    product: {
      discount: 0,
      price: 410,
      reference: 'RFMC001',
      sale: 40,
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
    <div class="prices">
        <span class="current">$${
          price - discount - (price * sale) / 100
        }.00</span>
        ${!discount ? '' : '<span class="discount">' + price + ' 00 </span>'}
        ${!sale ? '' : '<span class="sale">' + price + ' 00 </span>'}
    </div>
    
    ${!sale ? '' : '<span class="label">SALE -' + sale + '%</span>'}
    
    <button class="add-product">ADD TO BAG</button>
  `;

  fragment.appendChild(card);
}
newArrivals.appendChild(fragment);
