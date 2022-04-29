function Product(data) {
  const {
    typevideo,
    type,
    bagde,
    imgProduct,
    secondaryProduct,
    tags,
    priceprev,
    price,
    title,
    desc,
    rating,
    review,
  } = data;
  const product = document.createElement('div');
  product.className = 'swiper-slide-product';
  if (type === 'isProductCenter') {
    product.classList.add('swiper-slide-product-center');
  }
  product.innerHTML = `
  ${
    type && type === 'isProduct'
      ? `
            <a class="relative" href="#">
              <div class="product-item">
                <img class="primary-img" src='${imgProduct}' alt="product" />
                ${
                  !typevideo
                    ? ` <img
                class="secondary-img"
                src='${secondaryProduct}'
                alt="productHover"
                />`
                    : `
                    <video
                      data-lazy-video
                      loop
                      muted
                      autoplay
                       class="secondary-video"
                    src="${secondaryProduct}"></video>
                    `
                }

                ${
                  !bagde
                    ? ``
                    : `${
                        typeof bagde === 'number'
                          ? `
                      <div class="product-bagde">
                        <p style="background-color:#c37455"  class="product-tag">-€${bagde}.00</p>
                      </div>
                    `
                          : `
                          <div class="product-bagde">
                        <p style="background-color:#ddc7b0"  class="product-tag">${bagde}</p>
                      </div>
                          `
                      }`
                }

              </div>
            </a>
            <!-- product details -->
            <div class="product-details">
              <ul class="product-tags">
                ${tags.map((tag) => `<li>${tag}</li>`).join('')}
              </ul>
              <h2 class="product-title">
                <a href="#">${title}</a>
              </h2>
              ${
                !priceprev
                  ? `<span class="px-1">€${price}.00</span>`
                  : `
                  <div class="price-product">
                    <span class="price-prev">€${priceprev}.00</span>
                    <span>€${price}.00</span>
                  </div>
              `
              }

              <p class="product-description">${desc}</p>
              <div class="flex items-center gap-1">

                ${
                  !rating || !review
                    ? ``
                    : `
                    <div>
                      <img src="../assets/svgs/star.svg" alt="" />
                    </div>
                    <span class="product-rating">${rating}</span>
                    <p class="product-review">${review} reviews</p>`
                }

              </div>
            </div>
  `
      : `
              <div class="product-item-center">
                <img
                class="primary-img"
                src='${imgProduct}'
                alt="product"
                />
                <div class="content-product-center">
                  <p class="product-description">${desc}</p>
                   <h2 class="product-title">
                      <a href="#">${title}</a> <span class="px-1">€${price}</span>
                    </h2>
                </div>
              </div>
  `
  }
  `;
  return product;
}
