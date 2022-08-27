(function () {
  const products = [
    {
      category: 'women',
      color: '#FF9B1C',
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
      category: 'women',
      color: '#D39240',
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
      category: 'men',
      color: '#4C3240',
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
      category: 'men',
      color: '#637872',
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
      category: 'men',
      color: '#DBA96B',
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
    {
      category: 'accessory',
      color: '#DBA96B',
      brand: 'Block Buster',
      image: './assets/products/usex-zips-RFUS001.webp',
      name: `Low Zips`,
      size: '34',
      product: {
        discount: 0,
        price: 189,
        reference: 'RFUS001',
        sale: 0,
      },
    },
    {
      category: 'accessory',
      color: '#CE7F3C',
      brand: 'Capitals',
      image: './assets/products/accs-wmen_wallet-RFAW001.webp',
      name: `Leather Wallet`,
      size: '',
      product: {
        discount: 0,
        price: 120,
        reference: 'RFAW001',
        sale: 0,
      },
    },
    {
      category: 'accessory',
      color: '#C0CEBE',
      brand: 'Capitals',
      image: './assets/products/accs-sport_bag-RFASB01.webp',
      name: `Sport Bag`,
      size: '',
      product: {
        discount: 0,
        price: 547,
        reference: 'RFASB01',
        sale: 40,
      },
    },
    {
      category: 'accessory',
      color: '#6F571D',
      brand: 'Capitals',
      image: './assets/products/accs-bag-RFACB01.webp',
      name: `Casual Bag`,
      size: '',
      product: {
        discount: 0,
        price: 610,
        reference: 'RFACB01',
        sale: 0,
      },
    },
    {
      category: 'accessory',
      color: '#5B5F7F',
      brand: 'Capitals',
      image: './assets/products/accs-aviator_glasses-RFAAG01.webp',
      name: `Aviator glasses`,
      size: '',
      product: {
        discount: 0,
        price: 520,
        reference: 'RFAAG01',
        sale: 20,
      },
    },
  ];

  const newArrivals = document.getElementById('arrivals-products');
  const fragment = document.createDocumentFragment();

  for (const product of products) {
    const card = document.createElement('div');

    const {
      category,
      color,
      brand,
      image,
      name,
      product: { price, discount, sale, reference },
    } = product;

    card.className = `product ${category}`;
    card.id = `${reference}`;

    card.innerHTML = `
      <img src="${image}" alt="${name}"/>
      <p class="name">${name}</p>
      <p class="brand"> 
        Brand - ${brand} 
        <span style="background-color:${color}"></span>
      </p>
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

  // Selecting Category block
  const womenTab = document.getElementById('women-tab');
  const menTab = document.getElementById('men-tab');
  const accessoriesTab = document.getElementById('accessories-tab');
  const allTab = document.getElementById('all-tab');

  const arrivalsProducts = document.querySelectorAll(
    '#arrivals-products .product'
  );

  let newCategory = '';
  let activeTab = allTab;

  function loadEventListeners() {
    allTab.addEventListener('click', () => {
      newCategory = null;
      setCategory(newCategory, allTab);
    });

    womenTab.addEventListener('click', () => {
      newCategory = 'women';
      setCategory(newCategory, womenTab);
    });

    menTab.addEventListener('click', () => {
      newCategory = 'men';
      setCategory(newCategory, menTab);
    });

    accessoriesTab.addEventListener('click', () => {
      newCategory = 'accessory';
      setCategory(newCategory, accessoriesTab);
    });
  }

  function setCategory(newCategory, newTab) {
    activeTab.classList.remove('active');

    for (const product of arrivalsProducts) {
      const isCategory = product.classList.contains(newCategory);
      const isInactive = product.classList.contains('inactive');
      // TODO: se ocultan los que no son de la categoria
      if (!isCategory && !isInactive && newCategory) {
        product.classList.add('inactive');
      }

      if (isCategory && isInactive) {
        product.classList.remove('inactive');
      }

      if (!newCategory && isInactive) {
        product.classList.remove('inactive');
      }
    }
    
    newTab.classList.add('active');
    activeTab = newTab;
  }

  loadEventListeners();
  activeTab.classList.add('active');
})();
