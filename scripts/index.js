$('.slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '20px',
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});

// ---------------------  ARRAY -----------------------------
const dataFilter = [
  'All needs',
  'Moisturizes',
  'Nourishes',
  'Protects',
  'Regenerates',
  'Repairs',
  'Regulates',
  'Purifies',
  'Tightens pores',
  'Plumps',
  'Remove makeup',
  'Cleanes',
  'Smoothes',
  'Firms',
  'Illuminates',
  'Tones',
  'Exfoliates',
  'Revitalizes',
  'Strengthens',
  'Smoothes out the skin',
  'Reduce skin reactivity',
];

const products = [
  {
    bagde: 'NEW',
    imgProduct: '../assets/images/product-2.webp',
    tags: ['Moisturizes', 'Nourrishes', 'Protects', 'Regenerates'],
    title: 'La Crème Beau Jour',
    price: 49.0,
    desc: 'Every day is a good day!',
    rating: 4.7,
    review: 3,
  },
  {
    bagde: 'NEW',
    imgProduct: '../assets/images/product-1.webp',
    tags: ['Nourrishes', 'Plumps', 'Regenerates', 'Repairs'],
    title: 'Addiction',
    price: 69.0,
    desc: 'Multipurpose face oil for all skin moods',
    rating: 5.0,
    review: 16,
  },
  {
    bagde: 'Best Seller',
    imgProduct: '../assets/images/product-3.webp',
    tags: ['Purifies', 'Regulates', 'Tightens', 'pores'],
    title: 'La Crème Beau Jour',
    price: 31.0,
    desc: 'Purifying and detoxifying face mask',
    rating: 4.7,
    review: 57,
  },
  {
    bagde: 'NEW',
    imgProduct: '../assets/images/product-4.webp',
    tags: ['Nourrishes', 'Regulates'],
    title: 'La Crème Beau Jour',
    price: 38.0,
    desc: 'It all about balance!',
    rating: 4.7,
    review: 45,
  },
  {
    bagde: 'Best Seller',
    imgProduct: '../assets/images/product-5.webp',
    tags: ['Firms', 'Smoothes'],
    title: 'La Crème du Temps',
    price: 62.0,
    desc: 'Complete pro-aging moisturizer for mature skin',
    rating: 4.7,
    review: 66,
  },
  {
    bagde: 'NEW',
    imgProduct: '../assets/images/product-6.webp',
    tags: ['Nourrishes', 'Repairs'],
    title: 'Le Baume',
    price: 15.0,
    desc: 'It all about balance!',
    rating: 4.8,
    review: 5,
  },
];

const thumbnailsSlider = [
  {
    bgColor: '#f7dad4',
    number: 1,
    title: 'My skin tends to look red',
    image: '../assets/images/thumbnail-slider-1.webp',
    descItem:
      'Is your skin tingly, red and itchy? Here is why and how you can relieve and soothe it with the right skincare routine...',
  },
  {
    bgColor: '#f9a35a',
    number: 2,
    title: 'My eye contour needs to be toned and brightened',
    image: '../assets/images/thumbnail-slider-2.webp',
    descItem:
      "Because the skin is thinner than on the rest of your face, the eye contour is a very sensitive area. And that's only one of the few reasons why it's the first to show signs of aging. ",
  },
  {
    bgColor: '#84a7ba',
    number: 3,
    title: 'I have pimples and blemishes',
    image: '../assets/images/thumbnail-slider-3.webp',
    descItem:
      'Blemishes, pimples, blackheads... Here are our best tips to find the routine your skin deserves! ',
  },
  {
    bgColor: '#006654',
    number: 4,
    title: 'I want a 100% vegan skincare routine',
    image: '../assets/images/thumbnail-slider-4.webp',
    descItem:
      "Are you vegan, or trying to use cosmetics that don't contain animal-based ingredients? At Absolution, 70% of our products are vegan-friendly, and counting! ",
  },
  {
    bgColor: '#bd8a76',
    number: 5,
    title: "My face doesn't look so young any more",
    image: '../assets/images/thumbnail-slider-5.webp',
    descItem:
      'Wrinkles, loss of elasticity, dryness... Your skin shows the signs of the passing time, but thankfully, it is possible to age gracefully with the helping hand of Nature!  ',
  },
  {
    bgColor: '#f7dad4',
    number: 6,
    title: 'My skin is reactive and uncomfortable',
    image: '../assets/images/thumbnail-slider-6.webp',
    descItem:
      "Redness, tightness, itching... Your skin can't stand anything?  Here's the perfect skincare routine for sensitive skin.",
  },
  {
    bgColor: '#84a7ba',
    number: 7,
    title: 'I have hormonal acne on my face',
    image: '../assets/images/thumbnail-slider-7.webp',
    descItem:
      'While hormonal acne must be treated internally, it is possible to reduce its effects on the skin with the help of an appropriate skincare routine. ',
  },
  {
    bgColor: '#f9a35a',
    number: 8,
    title: 'My skin look dull',
    image: '../assets/images/thumbnail-slider-8.webp',
    descItem:
      'There are days when our complexion is like the autumn sky: dull and grey. There are several possible reasons for this...',
  },
  {
    bgColor: '#c36455',
    number: 9,
    title: 'My skin is beginning to show early signs of aging',
    image: '../assets/images/thumbnail-slider-9.webp',
    descItem:
      "From the age of 30 onwards, biologically, the body begins to age. So here's how the right skincare can come in handy... ",
  },
  {
    bgColor: '#f3eae0',
    number: 10,
    title: 'My skin is dry and itchy',
    image: '../assets/images/thumbnail-slider-10.webp',
    descItem:
      "Does your skin feel tight and uncomfortable after cleansing and even after applying your moisturizer? Here's why...",
  },
];

const footerContent = [
  {
    title: 'Shop & Spa',
    items: [
      '30 rue des vinaigriers 75010 Paris',
      '01 40 18 36 94',
      'Opening hours: Monday to Saturday: 10:30 am - 7 pm / Wednesday: 11 am - 7 pm',
    ],
  },
  {
    title: 'About',
    items: [
      'Our Maison',
      'The Spa',
      'Blog',
      'Our ingredients',
      'Our retailers',
    ],
  },
  {
    title: 'Absolution & you',
    items: [
      ' Loyalty and referral program',
      'Rituals',
      'Skin quiz',
      'My account',
    ],
  },
  {
    title: 'Help & orders',
    items: [
      'Secure payment',
      'FAQ',
      'Contact us',
      'Terms and conditions of use',
      'Legal notice',
    ],
  },
  {
    title: 'Social',
    items: ['Facebook', 'Twitter', 'Instagram', 'Youtube', 'Pinterest'],
  },
];

//=========================Component Tag ====================
const items = document.querySelector('.items');

dataFilter.forEach((item) => items.appendChild(Tag(item)));

function Tag(name) {
  const tag = document.createElement('li');
  tag.className = 'data-item';
  tag.innerHTML = name;
  return tag;
}

//=========================Component Product Item ===========

const productList = document.querySelector('.product-list');
products.forEach((item) => productList.appendChild(Product(item)));
const productList2 = document.querySelector('.product-list-2');
products.forEach((item) => productList2.appendChild(Product(item)));
// -----------------------------------------------------------
function Product(data) {
  const { bagde, imgProduct, tags, price, title, desc, rating, review } = data;
  const product = document.createElement('div');
  product.innerHTML = `<a class="relative" href="#">
              <img
                style= 'width: 100%'
                src='${imgProduct}'
                alt="product"
              />
              <p class="product-tag">${bagde}</p>
            </a>
            <!-- product details -->
            <div class="product-details">
              <ul class="product-tags">
                ${tags.map((tag) => `<li>${tag}</li>`).join('')}
              </ul>
              <h2 class="product-title">
                <a href="#">${title}</a>
              </h2>
              <span class="px-1">€${price}</span>
              <p class="product-description">${desc}</p>
              <div class="flex items-center gap-1">
                <div>
                  <img src="./assets/svgs/star.svg" alt="" />
                </div>
                <span class="product-rating">${rating}</span>
                <p class="product-review">${review} reviews</p>
              </div>
            </div>`;
  return product;
}

//=========================Component Footer ==================
const footerItems = document.querySelector('.footer-items');
footerContent.forEach((item) => footerItems.appendChild(FooterItem(item)));

function FooterItem(data) {
  const { title, items } = data;
  const item = document.createElement('li');
  item.className = 'li-item';
  item.innerHTML = `
              <span class="block-contact-title">${title}</span>
              <div class="block-contact-desc">
                ${items.map((item) => `<p>${item}</p>`).join('')}
              </div>`;
  return item;
}

// ========================= Thumbnail slider ===============================
const swiperWrapper = document.querySelector('.swiper-wrapper');
thumbnailsSlider.forEach((item) => swiperWrapper.appendChild(Thumbnail(item)));

function Thumbnail(data) {
  const { bgColor, number, title, image, descItem } = data;
  const thubnail = document.createElement('div');
  thubnail.className = 'swiper-slide';
  thubnail.innerHTML = `
            <div style="background-color:${bgColor}; height: 450px; border-radius: 10px" class="px-7 py-8 text-center">
              <span>n°${number}</span>
              <a href=""><h2 class = "thumbnail-title">${title}</h2></a>
              <a href="" class="flex justify-center items-center gap-3 ">
                <span>Read more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="22.25" height="7.222" viewBox="0 0 22.25 7.222">
                  <path class="a" d="M.5 3.75h16"
                    fill="none" stroke-linecap="square"
                    stroke="#1d1d1b" stroke-miterlimit="10">
                  </path>
                  <path class="b" d="M15.573 3.612H22c-3.542 0-8 3.361-8 3.361zm0 0L14 .25s4.459 3.362 8 3.362z"
                    fill="#1d1d1b" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" stroke="#1d1d1b"
                    stroke-miterlimit="10">
                  </path>
                </svg>
              </a>
              <div>
                <img
                  class="block w-full"
                  src="${image}"
                  alt=""
                />
              </div>
            </div>
  `;
  return thubnail;
}

//======================= Collapse
const collapse = document.querySelectorAll('.block-contact-title');

collapse.forEach((item) => {
  item.addEventListener('click', function () {
    this.classList.toggle('footer-active');

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
      content.style.marginTop = 0;
    } else {
      content.style.height = `${height}px`;
      content.style.marginTop = '16px';
    }
  });
});
