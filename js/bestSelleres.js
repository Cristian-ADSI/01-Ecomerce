(function () {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', './mocks/best-seller.json', true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const productsData = JSON.parse(this.responseText);
      renderProducts(productsData);
    }
  };

  const carousel = document.getElementById('bestSellers_carousel');
  const bestSellersFragment = document.createDocumentFragment();
  function renderProducts(productsData) {
    for (product of productsData) {
      const card = document.createElement('div');
      const productCard = cardTemplate(product, card);
      bestSellersFragment.appendChild(productCard);
    }

    carousel.appendChild(bestSellersFragment);
    //Set  Carrousel
    $(document).ready(function () {
      $('#bestSellers_carousel').slick({
        Infinity: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:
          '<span class="material-symbols-outlined prev-btn">arrow_back_ios</span>',
        nextArrow:
          '<span class="material-symbols-outlined next-btn">arrow_forward_ios</span>',
      });
    });
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
            ${
              !discount ? '' : '<span class="discount">' + price + ' 00 </span>'
            }
            ${!sale ? '' : '<span class="sale">' + price + ' 00 </span>'}
        </div>
      
        ${!sale ? '' : '<span class="label">SALE -' + sale + '%</span>'}
        <button class="add-product">ADD TO BAG</button>
      `;
    return card;
  }
})();
