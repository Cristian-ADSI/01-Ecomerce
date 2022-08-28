(function () {
  $(document).ready(function () {

    const bestSellers = [
      {
        category: 'men',
        color: '',
        brand: 'Block Buster',
        image: './assets/products/best_sellers/men-jacket-RFMJCK01.webp',
        name: `Leather Jacket Urban`,
        size: 'L',
        product: {
          discount: 0,
          price: 500,
          reference: 'RFMJCK01',
          sale: 0,
        },
      },
      {
        category: 'men',
        color: '',
        brand: 'Levis',
        image: './assets/products/best_sellers/men-jacket-RFMJCK02.webp',
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
        color: '',
        brand: 'Ecko UNLTD',
        image: '../assets/products/best_sellers/men-tshirt-RFMTSH01.webp',
        name: `Men's Hoddie`,
        size: 'L',
        product: {
          discount: 50,
          price: 590,
          reference: 'RFMH001',
          sale: 0,
        },
      },
    ];
    const carousel = document.getElementById('bestSellers_carousel');
    const fragment = document.createDocumentFragment();

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
          ${!discount ? '' : '<span class="discount">' + price + ' 00 </span>'}
          ${!sale ? '' : '<span class="sale">' + price + ' 00 </span>'}
      </div>
      
      ${!sale ? '' : '<span class="label">SALE -' + sale + '%</span>'}
      
      <button class="add-product">ADD TO BAG</button>
    `;

      return card;
    }

    for (product of bestSellers) {
      const card = document.createElement('div');
      const productCard = cardTemplate(product, card);
      fragment.appendChild(productCard);
    }

    carousel.appendChild(fragment);

    $('#bestSellers_carousel').slick({
      Infinity:true,
      slidesToShow:4,
      slidesToScroll:1
    });
  });
})();
