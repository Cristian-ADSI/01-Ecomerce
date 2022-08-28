(function () {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', './mocks/new-arrivals.json');
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const productsData = JSON.parse(this.responseText);
      renderProducts(productsData);
    }
  };

  const arrivalsFragment = document.createDocumentFragment();
  const newArrivals = document.getElementById('arrivals-products');
  function renderProducts(productsData) {
    for (const product of productsData) {
      const card = document.createElement('div');
      const productCard = cardTemplate(product, card);
      arrivalsFragment.appendChild(productCard);
    }

    newArrivals.appendChild(arrivalsFragment);

    const arrivalsProducts = document.querySelectorAll(
      '#arrivals-products .product'
    );
    // console.log(arrivalsProducts);
    loadEventListeners(arrivalsProducts);
  }

  function cardTemplate(product, card) {
    const {
      category,
      brand,
      image,
      name,
      product: { discount, price, reference, sale },
    } = product;

    card.className = `product active ${category}`;
    card.id = `${reference}`;
    card.innerHTML = `
      <img src="${image}" alt="${name}"/>
      <p class="name">${name}</p>
      <p class="brand"> 
        Brand - ${brand} 
      </p>
      <div class="prices">
          <span class="current">
            $${price - discount - (price * sale) / 100}.00
          </span>
          ${!discount ? '' : '<span class="discount">' + price + '.00 </span>'}
          ${!sale ? '' : '<span class="sale">' + price + ' 00 </span>'} 
      </div>
      ${!sale ? '' : '<span class="label">SALE -' + sale + '%</span>'}
      <button class="add-product">ADD TO BAG</button>
    `;

    return card;
  }

  const womenTab = document.getElementById('women-tab');
  const menTab = document.getElementById('men-tab');
  const accessoriesTab = document.getElementById('accessories-tab');
  const allTab = document.getElementById('all-tab');

  let newCategory = '';
  let activeTab = allTab;

  function loadEventListeners(products) {
    allTab.addEventListener('click', () => {
      newCategory = null;
      setCategory(newCategory, allTab, products)
    });

    womenTab.addEventListener('click', () => {
      newCategory = 'women';
      setCategory(newCategory, womenTab, products);
    });

    menTab.addEventListener('click', () => {
      newCategory = 'men';
      setCategory(newCategory, menTab,products);
    });

    accessoriesTab.addEventListener('click', () => {
      newCategory = 'accessory';
      setCategory(newCategory, accessoriesTab,products);
    });
  }

  function setCategory(newCategory, newTab, products) {
    activeTab.classList.remove('active');

    for (const product of products) {
      const isCategory = product.classList.contains(newCategory);
      const isInactive = product.classList.contains('inactive');
      // TODO: se ocultan los que no son de la categoria
      if (!isCategory && !isInactive && newCategory) {
        product.classList.remove('active');
        product.classList.add('inactive');
      }

      if (isCategory && isInactive) {
        product.classList.remove('inactive');
        product.classList.add('active');
      }

      if (!newCategory && isInactive) {
        product.classList.remove('inactive');
        product.classList.add('active');
      }
    }

    newTab.classList.add('active');
    activeTab = newTab;
  }

  activeTab.classList.add('active');
})();
