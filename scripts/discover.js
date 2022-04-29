const product = [
  '../assets/images/discover-product-1.webp',
  '../assets/images/discover-product-2.webp',
  '../assets/images/discover-product-3.webp',
  '../assets/images/discover-product-4.webp',
  '../assets/images/discover-product-5.webp',
  '../assets/images/discover-product-6.webp',
];

const swiperWrapperProduct = document.querySelector('.swiper-wrapper');
product.forEach((item) => swiperWrapperProduct.appendChild(ProductImg(item)));

function ProductImg(img) {
  const productSlide = document.createElement('div');
  productSlide.className = 'swiper-slide swiper-slide-product';
  productSlide.innerHTML = `
    <img class="img-product" src="${img}" alt="" />
  `;
  return productSlide;
}
