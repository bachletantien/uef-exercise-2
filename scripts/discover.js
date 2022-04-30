const activeIngredientProducts = [
  {
    image: '../assets/images/discover-swiper-1.webp',
    stt: 1,
    title: 'Aloe Vera',
    desc: 'One of the most widely used medicinal plants, Aloe Vera is used to treat burns, including sunburn, to heal wounds and to combat cellular aging. Its composition is very interesting: like a cactus, it contains over 99% water. The remaining 1% is a very potent synergy of 12 vitamins (A, B1, B2, B3, B12, C, E...) but also numerous minerals, trace elements and amino acids.',
    bgColor: '#f7dad4',
  },
  {
    image: '../assets/images/discover-swiper-2.webp',
    stt: 2,
    title: 'Oat',
    desc: 'Rich in nourishing and hydrating proteins, oat is the perfect ingredient for sensitive and reactive skin. Avenanthramides – a type of antioxidants only found in oat – help to relieve irritation, redness and itching. This grain also contains phosphorus, manganese, magnesium and iron, among others.',
    bgColor: '#ddc7b0',
  },
  {
    image: '../assets/images/discover-swiper-3.webp',
    stt: 3,
    title: 'Roman Chamomile',
    desc: 'The flower heads help to combat stress, including skin stress, by calming irritations and reactions. Chamomile is also a mild astringent, which makes it an excellent toner for all skin types.',
    bgColor: '#f9a35a',
  },
  {
    image: '../assets/images/discover-swiper-4.webp',
    stt: 4,
    title: 'Coconut oil',
    desc: 'The oil that keeps on giving! Coconut oil is a marvel of nature that not only delights with its delicious scent, but also works hard to nourish and repair sensitive skin. The texture of coconut oil is easily absorbed, enabling it to deeply moisturize, soothe irritations and soften the skin.',
    bgColor: '#bd8a76',
  },
  {
    image: '../assets/images/discover-swiper-5.webp',
    stt: 5,
    title: 'Neroli',
    desc: "Neroli hydrosol has a calming, reassuring scent that can help you to fall asleep, so it's perfect before bedtime! Ideal for dry skin, it works to improve suppleness while providing regenerating benefits. With very mild antibacterial properties, it helps to gently restore skin's balance.",
    bgColor: '#ddc7b0',
  },
  {
    image: '../assets/images/discover-swiper-6.webp',
    stt: 6,
    title: 'Sage',
    desc: 'This antiseptic herb promotes healing and has regenerating properties: it helps to prevent premature skin aging, tightens, purifies, cleanses and refreshes without damaging the skin. It also tightens dilated pores and helps to balance the skin by controlling sebum secretions.',
    bgColor: '#84a7ba',
  },
  {
    image: '../assets/images/discover-swiper-7.webp',
    stt: 7,
    title: 'White Whillow',
    desc: 'White willow bark contains salicylic acid, which is known to stimulate skin cell renewal, smooth the skin and help control blemishes thanks to its exfoliating and antibacterial properties. The tannins in willow have an astringent effect, making it excellent for firming skin tissues and tightening pores.',
    bgColor: '#ddc7b0',
  },
  {
    image: '../assets/images/discover-swiper-8.webp',
    stt: 8,
    title: 'Zinc',
    desc: 'This purifying trace element helps to prevent the growth of bacteria on the skin and neutralize free radicals. It also helps to strengthen keratin (nails, hair).',
    bgColor: '#c6c6c6',
  },
  {
    image: '../assets/images/discover-swiper-9.webp',
    stt: 9,
    title: 'Calcium',
    desc: 'Calcium helps to improve cell renewal and strengthen epidermal cohesion, so that skin regenerates effectively.',
    bgColor: '#c6c6c6',
  },
  {
    image: '../assets/images/discover-swiper-10.webp',
    stt: 10,
    title: 'Chaulmoogra Oil',
    desc: 'Commonly used in Asian medicine, it contains rare fatty acids that are known to soothe irritated and damaged skin. It also helps to even out skin tone, which makes it very useful when spots have left their mark…',
    bgColor: '#f7dad4',
  },
  {
    image: '../assets/images/discover-swiper-11.webp',
    stt: 11,
    title: 'Arrabidaea Chica (Crajiru)',
    desc: 'This ancient shrub from the Amazon region is still used daily by the native Indians to protect the skin and treat minor skin problems. It purifies and helps to rid skin of unsightly blemishes (spots, blackheads, etc.).',
    bgColor: '#ddc7b0',
  },
  {
    image: '../assets/images/discover-swiper-12.webp',
    stt: 12,
    title: 'Propolis',
    desc: 'This plant resin, collected by bees, is known to be a potent purifying ingredient. It also stimulates skin regeneration.',
    bgColor: '#ddc7b0',
  },
  {
    image: '../assets/images/discover-swiper-13.webp',
    stt: 13,
    title: 'Licorice',
    desc: 'This soothing ingredient helps to reduce redness. It also inhibits tyrosinase, responsible for dark spots. It is rich in glycyrrhizic acid and flavonoids, making it a wonderful ingredient to soothe sensitive or irritated skin, and to brighten the complexion.',
    bgColor: '#bd8a76',
  },
  {
    image: '../assets/images/discover-swiper-14.webp',
    stt: 14,
    title: 'Tepezcohuite',
    desc: 'Used by the Mayans and known as the "skin tree," tepezcohuite is rich in tannins and anti-free radical bioflavonoids. It helps to rebuild the skin.',
    bgColor: '#84a7ba',
  },
  {
    image: '../assets/images/discover-swiper-15.webp',
    stt: 15,
    title: 'BioEcolia®',
    desc: 'This prebiotic helps to rebalance, maintain and stimulate the skin\'s ecoflora – the body\'s first line of defense against environmental aggressions. By helping good bacteria to grow, to the detriment of "bad" bacteria, it helps keep skin healthy while regulating its pH balance.',
    bgColor: '#c6c6c6',
  },
  {
    image: '../assets/images/discover-swiper-16.webp',
    stt: 16,
    title: 'Calendula',
    desc: 'The extract taken from this medicinal flower is known for its softening and healing properties.',
    bgColor: '#f9a35a',
  },
  {
    image: '../assets/images/discover-swiper-17.webp',
    stt: 17,
    title: 'Hyssop',
    desc: 'Hyssop extract is known to soothe sensitive or irritated skin, reduce redness and relieve skin irritations.',
    bgColor: '#84a7ba',
  },
  {
    image: '../assets/images/discover-swiper-18.webp',
    stt: 18,
    title: 'jojoba',
    desc: 'Both calming and softening, this easily absorbed oil sinks into the skin without leaving a greasy feel. It protects against dryness and wrinkles by slowing water loss from skin cells. It helps to rebalance the skin and control sebum production, protects and softens, and is suitable for sensitive skin. With regenerating and anti-aging benefits, it works to maintain skin elasticity and suppleness (activates elastin metabolism) and smooth and firm the skin.',
    bgColor: '#c36455',
  },
  {
    image: '../assets/images/discover-swiper-19.webp',
    stt: 19,
    title: 'Lemon Balm',
    desc: 'Lemon balm essential oil both purifies and regulates, thanks to its anti-inflammatory and purifying properties.',
    bgColor: '#84a7ba',
  },
  {
    image: '../assets/images/discover-swiper-20.webp',
    stt: 20,
    title: 'Honey',
    desc: 'It invigorates, nourishes, softens and soothes. Rich in sugar, vitamins and amino acids, honey promotes skin hydration, healing and regeneration and helps to calm irritations.',
    bgColor: '#f9a35a',
  },
  {
    image: '../assets/images/discover-swiper-21.webp',
    stt: 21,
    title: 'Tulsi',
    desc: 'Native to India, Tulsi is known for its purifying, antibacterial and antiseptic properties. Its detoxifying action makes it ideal to deeply purify, diminish redness and control sebum production, to leave skin matte.',
    bgColor: '#f7dad4',
  },
];
const product = [
  '../assets/images/discover-product-1.webp',
  '../assets/images/discover-product-2.webp',
  '../assets/images/discover-product-3.webp',
  '../assets/images/discover-product-4.webp',
  '../assets/images/discover-product-5.webp',
  '../assets/images/discover-product-6.webp',
];

// -----------------------------------------------------------------------------
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

// SWIPER ITEM DISCOVER
function IngredientProduct(data) {
  const { image, title, stt, desc, bgColor } = data;
  const productItem = document.createElement('div');
  productItem.className = 'swiper-slide swiper-slide-ingredient';
  productItem.style.backgroundColor = bgColor;
  productItem.innerHTML = `
      <div class="img-ingredient-product"><img src="${image}" alt="" /></div>
      <div>
        <h2 class="discover-slider-title">Active ingredients</h2>
        ${
          stt < 10
            ? `<div class="number">0${stt}</div>`
            : `<div class="number">${stt}</div>`
        }
        <div class="title">${title}</div>
        <div class="desc-product">${desc}</div>
      </div>
  `;
  return productItem;
}

const swiperWrapper = document.querySelector(
  '.swiper-wrapper-active-ingredient'
);
activeIngredientProducts.forEach((item) =>
  swiperWrapper.appendChild(IngredientProduct(item))
);
