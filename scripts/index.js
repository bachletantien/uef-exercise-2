// const sliderValues = document.querySelector('.slider-values');

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
    secondaryImg: '../assets/images/product-hover-1.webp',
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
    secondaryImg: '../assets/images/product-hover-2.webp',
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
    secondaryImg: '../assets/images/product-hover-3.webp',
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
    secondaryImg: '../assets/images/product-hover-4.webp',
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
    secondaryImg: '../assets/images/product-hover-5.webp',
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
    secondaryImg: '../assets/images/product-hover-6.webp',
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

const headerMenu = [
  {
    title: 'New',
    items: [],
    blogs: [],
  },
  {
    title: 'Face',
    items: [
      {
        titleLv2: 'Selections',
        itemsLv2: [
          'The Chaga Trio — Maison Loüno',
          'Our best sellers',
          'Special offers',
          'Sets and limited editions',
          "Men's favotites",
          'The minis',
          'Vegan',
        ],
      },
      {
        titleLv2: 'Products',
        itemsLv2: [
          'Cleansers & makeup removers',
          'Toners & botanical waters',
          'Moisturizers',
          'Serums & treatments',
          'Oils',
          'Masks & exfoliants',
          'Lip care',
          'Eye care',
          'Face tools',
          'Gift card',
          'Herbal teas',
        ],
      },
      {
        titleLv2: 'Needs & Skin moods',
        itemsLv2: [
          {
            titleLv3: 'Needs',
            itemsLv3: ['Moisturize', 'Tone', 'Purify', 'Soothe'],
          },
          {
            titleLv3: 'Skin moods',
            itemsLv3: [
              'Sensitive skin',
              'Tired skin',
              'Oily skin',
              'Dry skin',
              'Blemish-prone skin',
            ],
          },
        ],
      },
    ],
    blogs: [
      {
        title: 'NEW: your first pro-age cream',
        image: '../assets/images/face-menu-1.webp',
      },
      {
        title: 'Skin quiz in 3min',
        image: '../assets/images/face-menu-2.webp',
      },
    ],
  },
  {
    title: 'Body',
    items: [
      {
        titleLv2: 'Products',
        itemsLv2: [
          'Cleanse',
          'Scrub',
          'Soap',
          'Hand cream',
          'Film & tone',
          'Moisturizers',
          'Gift card',
        ],
      },
      {
        titleLv2: 'Needs & Skin moods',
        itemsLv2: [
          {
            titleLv3: 'Needs',
            itemsLv3: ['Moisturize', 'Film  & tone'],
          },
          {
            titleLv3: 'Skin moods',
            itemsLv3: ['Sensitive skin', 'Dry skin'],
          },
        ],
      },
    ],
    blogs: [
      {
        title: 'Special offer for soft and gentle hands',
        image: '../assets/images/body-menu-1.webp',
      },
    ],
  },
  {
    title: 'Makeup',
    items: [
      {
        titleLv2: 'Products',
        itemsLv2: [
          'Concealer',
          'Foundation',
          'Black mascara',
          'Black liner',
          'Lipsticks',
          'Gloss',
          'Setting powder',
          'Eyeshadow pencils',
          'Gift card',
          'special offers',
        ],
      },
      {
        titleLv2: 'Needs',
        itemsLv2: ['Lips', 'Face', 'Eyes'],
      },
    ],
    blogs: [
      {
        title: 'Offer: The smoky Eye Trio',
        image: '../assets/images/makeup-menu-1.webp',
      },
    ],
  },
  {
    title: 'Rituals',
    items: [],
  },
  {
    title: 'About',
    items: [],
    blogs: [
      {
        title: 'Our story',
        image: '../assets/images/about-menu-1.webp',
      },
      {
        title: 'Our spa',
        image: '../assets/images/about-menu-2.webp',
      },
      {
        title: 'Loyalty and referral program',
        image: '../assets/images/about-menu-3.webp',
      },
      {
        title: 'Blog',
        image: '../assets/images/about-menu-4.webp',
      },
      {
        title: 'Our beautiful collaborations',
        image: '../assets/images/about-menu-5.webp',
      },
    ],
  },
  {
    title: 'Need help?',
    items: [],
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
const swiperList = document.querySelector('.swiper-list');
const productList = document.querySelector('.swiper-wrapper-item');
products.forEach((item) => productList.appendChild(Product(item)));
const productList2 = document.querySelector('.product-list-2');
products.forEach((item) => productList2.appendChild(Product(item)));

// function toggleSlider() {
//   const widthCurrent = document.documentElement.clientWidth;

//   if (widthCurrent > 1023) {
//     productList.classList.add('swiper-wrapper');
//     swiperList.classList.add('swiper');
//     const swipperList = new Swiper('.swiper-list', {
//       slidesPerView: 3,
//       scrollbar: {
//         el: '.swiper-scrollbar-list',
//         hide: false,
//         dragSize: 300,
//       },
//       loop: true,
//       centeredSlides: true,
//       navigation: {
//         nextEl: '.swipper-product-next',
//         prevEl: '.swipper-product-prev',
//       },
//     });
//   } else {
//     productList.classList.remove('swiper-wrapper');
//     swiperList.className = 'product-list';
//   }
// }
// function toggleCss() {
//   const currentWidth = document.documentElement.clientWidth;
//   const css = document.getElementsByTagName('link')[2];
//   if (currentWidth > 1023) {
//     css.setAttribute(
//       'href',
//       'https://unpkg.com/swiper@8/swiper-bundle.min.css'
//     );
//     const swipperList = new Swiper('.swiper-list', {
//       slidesPerView: 3,
//       scrollbar: {
//         el: '.swiper-scrollbar-list',
//         hide: false,
//         dragSize: 300,
//       },
//       loop: true,
//       centeredSlides: true,
//       navigation: {
//         nextEl: '.swipper-product-next',
//         prevEl: '.swipper-product-prev',
//       },
//     });
//   } else {
//     css.setAttribute('href', '');
//   }
// }
// window.addEventListener('DOMContentLoaded', toggleCss);
// window.addEventListener('resize', toggleCss);

// -----------------------------------------------------------
function Product(data) {
  const {
    bagde,
    imgProduct,
    secondaryImg,
    tags,
    price,
    title,
    desc,
    rating,
    review,
  } = data;
  const product = document.createElement('div');
  product.className = 'swiper-slide swiper-slide-product';
  product.innerHTML = `
            <a class="relative" href="#">
              <div class="product-item ">
                <img
                class="primary-img"
                src='${imgProduct}'
                alt="product"
                />
                <img
                class="secondary-img"
                src='${secondaryImg}'
                alt="productHover"
                />
                <div class="product-bagde">
                  <p class="product-tag">${bagde}</p>
                </div>
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
              <span class="px-1">€${price}</span>
              <p class="product-description">${desc}</p>
              <div class="flex items-center gap-1">
                <div>
                  <img src="./assets/svgs/star.svg" alt="" />
                </div>
                <span class="product-rating">${rating}</span>
                <p class="product-review">${review} reviews</p>
              </div>
            </div>
            `;
  return product;
}

//=========================Component Footer ==================//
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

// ========================= Thumbnail slider ===============================//
const swiperWrapper = document.querySelector('.swiper-wrapper-thumbnails');
thumbnailsSlider.forEach((item) => swiperWrapper.appendChild(Thumbnail(item)));
function Thumbnail(data) {
  const { bgColor, number, title, image, descItem } = data;
  const thubnail = document.createElement('div');
  thubnail.className = 'swiper-slide swiper-slide-item';
  thubnail.innerHTML = `
            <div style="background-color:${bgColor};" class="wrapper-content">
              <span>n°${number}</span>
              <a href=""><h2 class = "thumbnail-title">${title}</h2></a>

              <div class="wrapper-content-thumbnail">
                <div class="img-thumbnail">
                  <img
                    class="block w-full"
                    src="${image}"
                    alt=""
                  />
                </div>
                <div class="desc-thumbnail">
                  ${descItem}

                  <div class="btn-readmore">
                    <span>Read more</span>
                    <img src="../assets/svgs/arrow.svg" alt="" />
                  </div>
                </div>
              </div>
               <a href="" class="btn-readmore btn-readmore-thumbnail">
                <span>Read more</span>
                <img src="../assets/svgs/arrow.svg" alt="" />
              </a>
            </div>
  `;
  return thubnail;
}

//======================= Collapse ============================//
const collapse = document.querySelectorAll('.block-contact-title');
collapse.forEach((item) => {
  item.addEventListener('click', function () {
    this.classList.toggle('footer-active');
    toggleActive();
    window.addEventListener('DOMContentLoaded', toggleActive);
    window.addEventListener('resize', toggleActive);

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
      // content.style.marginTop = '16px';
    }
  });
});

function toggleActive() {
  const widthCurrent = document.documentElement.clientWidth;
  if (widthCurrent > 1023) {
    collapse.forEach((item) => item.classList.remove('footer-active'));
  }
}
window.addEventListener('DOMContentLoaded', toggleActive);
window.addEventListener('resize', toggleActive);

// ====================== SCROLL TO TOP =======================//
const goTop = document.getElementById('goTop');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    goTop.style.display = 'block';
  } else {
    goTop.style.display = 'none';
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ==================== MEGA MENU ===========================//
const hamburger = document.querySelector('.hamburger');
const megaMenu = document.querySelector('.mega-menu');

const menuwrapper = document.createElement('div');
menuwrapper.className = 'menu-wrapper';
menuwrapper.innerHTML = `
    <div class = 'menu-lv1'>
      <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position: absolute; pointer-events: none;">
      <defs>
        <clipPath id="mask-mobile-menu-2" clipPathUnits="objectBoundingBox" transform="scale(0.0075875988284747 0.17537706068046)">
          <path d="M0 3.801V0l1.521.343c4.194.945 8.015 1.043 37.637.964 28.85-.077 39.343.097 53.446.886 12.372.692 25.376 1.79 35.322 2.98l3.704.445.082.992.082.992H0z"></path>
        </clipPath>
      </defs>
      </svg>
      <a href="#">
      <div class="mega-menu-image">
        <img src="../assets/images/mini-menu.webp" alt="" />
      </div>
      <div class="flex justify-center">
        <h2 class=" title-mega-menu">New</h2>
      </div>
      </a>
      <div class="mask-bottom-menu"></div>
    </div>
    <div class="connection">
        <h4>Connection</h4>
        <div class="better-select">
          <span>Order in</span>
          <better-select>
            <a class="select-language" href="#">EN</a>
            <ul class="both-language">
              <li class="language">FR</li>
              <li class="language">EN</li>
            </ul>
          </better-select>
        </div>
    </div>
  `;
function toggleMenu() {
  hamburger.classList.toggle('hamburger-active');
  menuwrapper.classList.toggle('menu-wrapper-active');
  subMenu.classList.remove('sub-menu-wrapper-active');
  subMenu2.classList.remove('sub-menu2-wrapper-active');
  hamburgerLine.forEach((item) => (item.style.background = '#fff'));
  document.body.style.overflowY = 'auto';
}

hamburger.addEventListener('click', toggleMenu);

megaMenu.appendChild(menuwrapper);

const selectLanguage = document.querySelector('.select-language');
selectLanguage.addEventListener('click', () => {
  const bothLanguage = document.querySelector('.both-language');
  bothLanguage.classList.toggle('both-language-active');
});

// ================= component MENU ITEM ====================//
const menuLv1 = document.querySelector('.menu-lv1');
headerMenu.forEach((item) => {
  menuLv1.appendChild(MenuItem(item));
});

function MenuItem(data) {
  const { title, items, blogs } = data;

  const megaMenuItem = document.createElement('ul');
  megaMenuItem.className = 'mega-menu-items';
  megaMenuItem.innerHTML = `
    <li class="menu-item">
      <a href="#">${title}</a>
      ${
        items?.length > 0 || blogs?.length > 0
          ? `<span class='arrow-menu'></span>`
          : ''
      }
    </li>
  `;
  return megaMenuItem;
}

function SubMenuItemlv1(index) {
  const { items, blogs, title } = headerMenu[index];
  const megaMenuItem = document.createElement('ul');
  megaMenuItem.className = 'mega-menu-items';
  megaMenuItem.innerHTML = `
    <h1 class="menu-title">${title}</h1>
    <ul>
      ${items
        .map(
          (item) => `
          <li class="menu-item2">
            <a href="#">${item.titleLv2}</a>
            ${items?.length > 0 ? `<span class='arrow-menu'></span>` : ''}
          </li>`
        )
        .join('')}
    </ul>
    <ul>
     ${blogs
       .map(
         (item) => `
            <li class="menu-blog">
              <p class="menu-item2">${item.title}</p>
              <img src="${item.image}" alt="" />
            </li>`
       )
       .join('')}
    </ul>

  `;
  return megaMenuItem;
}

function SubMenuItemlv2(index, index2) {
  const { titleLv2, itemsLv2 } = headerMenu[index].items[index2];

  const megaMenuItem2 = document.createElement('ul');
  megaMenuItem2.className = 'mega-menu-item2';
  megaMenuItem2.innerHTML = `
    <h1 class="menu-title">${titleLv2}</h1>
    <ul class="menu-wrapper3">
      ${itemsLv2
        .map(
          (item) => `
        <li class="menu-item3">
        ${
          typeof item === 'object'
            ? `<h2 class="menu-title-item">${item.titleLv3}</h2>
              <ul>${item.itemsLv3
                .map(
                  (item2) =>
                    `<li class="menu-sub-item3"><a href="#">${item2}</a></li>`
                )
                .join('')}</ul>`
            : `<a href="#">${item}</a>`
        }
        </li>`
        )
        .join('')}

    </ul>
  `;

  return megaMenuItem2;
}

// ==================== MENU LEVEL 2 (SUB MENU)========================//
const subMenu = document.createElement('div');
subMenu.className = 'sub-menu-wrapper';
subMenu.innerHTML = `
    <div class="btn-back">
        <svg style={"transform: rotate(180deg)"} viewBox="0 0 22.25 7.222" width="22.25" height="7.222" xmlns="http://www.w3.org/2000/svg"><path d="M21.746 3.75h-16" fill="none" stroke="#1d1d1b" stroke-linecap="square" stroke-miterlimit="10"></path><path d="M6.673 3.612H.246c3.542 0 8 3.361 8 3.361zm0 0L8.246.25s-4.459 3.362-8 3.362z" fill="#1d1d1b" stroke="#1d1d1b" stroke-width=".5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path></svg>
        <span>Retour au menu</span>
    </div>
    <ul></ul>
`;

const subMenu2 = document.createElement('div');
subMenu2.className = 'sub-menu2-wrapper';
subMenu2.innerHTML = `
    <div class="btn-back2">
        <svg style={"transform: rotate(180deg)"} viewBox="0 0 22.25 7.222" width="22.25" height="7.222" xmlns="http://www.w3.org/2000/svg"><path d="M21.746 3.75h-16" fill="none" stroke="#1d1d1b" stroke-linecap="square" stroke-miterlimit="10"></path><path d="M6.673 3.612H.246c3.542 0 8 3.361 8 3.361zm0 0L8.246.25s-4.459 3.362-8 3.362z" fill="#1d1d1b" stroke="#1d1d1b" stroke-width=".5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></path></svg>
        <span>Retour au menu</span>
    </div>
    <ul></ul>
`;

menuwrapper.append(subMenu, subMenu2);
const hamburgerLine = document.querySelectorAll('.hamburger-line');

// select MENU ITEM
const subMenuItem = document.querySelectorAll('.menu-item');
subMenuItem.forEach((item, index) =>
  item.addEventListener('click', function () {
    if (!headerMenu[index].items.length && !headerMenu[index].blogs.length)
      return;

    subMenu.replaceChild(SubMenuItemlv1(index), subMenu.children[1]);
    subMenu.classList.add('sub-menu-wrapper-active');
    document.body.style.overflowY = 'hidden';

    // select MENU ITEM 2
    const subMenuItem2 = document.querySelectorAll('.menu-item2');
    subMenuItem2.forEach((item, index2) =>
      item.addEventListener('click', function () {
        subMenu2.replaceChild(
          SubMenuItemlv2(index, index2),
          subMenu2.children[1]
        );
        subMenu2.classList.add('sub-menu2-wrapper-active');
      })
    );
    if (
      subMenu.classList.contains('sub-menu-wrapper-active') ||
      subMenu2.classList.contains('sub-menu2-wrapper-active')
    ) {
      hamburgerLine.forEach((item) => (item.style.background = '#000'));
    }
  })
);

const btnBack = document.querySelector('.btn-back');
btnBack.addEventListener('click', function () {
  subMenu.classList.remove('sub-menu-wrapper-active');
  document.body.style.overflowY = 'hidden';
  hamburgerLine.forEach((item) => (item.style.background = '#fff'));
});
const btnBack2 = document.querySelector('.btn-back2');
btnBack2.addEventListener('click', function () {
  subMenu2.classList.remove('sub-menu2-wrapper-active');
  document.body.style.overflowY = 'hidden';
});

// ==================== MENU LEVEL 3 (SUB MENU)========================//
