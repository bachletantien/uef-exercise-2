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

// COLLAPSE

const collapse = document.querySelectorAll('.collapsed');
collapse.forEach((item, index) =>
  item.addEventListener('click', function () {
    this.classList.toggle('active');
    const imgBigger = document.querySelectorAll('.img-bigger');
    const content = this.nextElementSibling;
    const items = Array.from(content.children);
    const height = items
      .map((item) => {
        return item.getBoundingClientRect().height;
      })
      .reduce((sum, val) => sum + val, 0);

    if (content.style.height) {
      //falsy, truthy
      content.style.height = '';
      imgBigger.forEach((item, index2) => {
        if (index2 === index) {
          item.style.visibility = 'hidden';
          item.style.opacity = '0';
        }
      });
    } else {
      content.style.height = `${height + items.length * 20}px`;
      imgBigger.forEach((item, index2) => {
        if (index2 === index) {
          item.style.visibility = 'visible';
          item.style.opacity = '1';
        }
      });
    }
  })
);
