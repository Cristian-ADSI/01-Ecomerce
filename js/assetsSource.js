const dWBanner = 'http://127.0.0.1:5501/assets/img/banner-3-bg.webp';
const dWProduct = 'http://127.0.0.1:5501/assets/img/banner-3-product.webp';
const dWBrand = 'http://127.0.0.1:5501/assets/img/brand-adidas.svg';
const dwProductName = 'Sneakers | AR Trainer';

const dealWeekSection = document.getElementById('d-week-section');
const dealWeekProduct = document.getElementById('d-week-product');
const dealWeekBrand = document.getElementById('deal-brand');
const dealWeekProductName = document.getElementById('deal-product-name');

dealWeekSection.style.background = `url(${dWBanner})`;
dealWeekProduct.src = `${dWProduct}`;
dealWeekBrand.src = `${dWBrand}`;
dealWeekProductName.textContent = `${dwProductName}`;
