const headerMenu = [
  {
    title: 'New',
    link: '/page/new.html',
    items: [],
    blogs: [],
  },
  {
    link: '../page/face.html',
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
    link: '/',
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
    link: '/page/makeup.html',
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
    link: '/',
    title: 'Rituals',
    items: [],
    blogs: [],
  },
  {
    link: '/',
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
    link: '/',
    title: 'Need help?',
    items: [],
  },
];

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
  const { items, blogs, title, link } = headerMenu[index];
  const megaMenuItem = document.createElement('ul');
  megaMenuItem.className = 'mega-menu-items';
  megaMenuItem.innerHTML = `
    <h1 class="menu-title">${title}</h1>
    <ul>
      ${items
        .map(
          (item) => `
          <li class="menu-item2">
            <a href="${link}">${item.titleLv2}</a>
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

// ============================== NAVBAR DESKTOP ==============================//
const navbarItemsDesk = document.querySelector('.navbar-items-desk');

headerMenu
  .slice(0, headerMenu.length - 1)
  .forEach((item) => navbarItemsDesk.appendChild(NavbarDesk(item)));

function NavbarDesk(data) {
  const { title, link } = data;
  const navbarItemDesk = document.createElement('li');
  navbarItemDesk.className = 'navbar-item';
  navbarItemDesk.innerHTML = `<a href="${link}">${title}</a>`;
  return navbarItemDesk;
}

const navbarItem = document.querySelectorAll('.navbar-item');
const header = document.querySelector('header');
navbarItem.forEach((item, index) => {
  const temp = headerMenu[index];
  item.addEventListener('mouseenter', function () {
    if (temp?.items.length > 0 || temp?.blogs.length > 0) {
      header.style.background = '#f3eeea';
      header.style.color = '#000';

      subMenuWrapper.innerHTML = ``;

      temp?.items.forEach((_, index2) => {
        subMenuWrapper.appendChild(ContentSubMenu(index, index2));
      });
      temp?.blogs.forEach((_, index2) => {
        subMenuWrapper.appendChild(ContentSubMenu2(index, index2));
      });
    } else {
      header.style.background = 'transparent';
      header.style.color = '#fff';
      subMenuWrapper.innerHTML = ``;
    }
  });
});

// ============== SUBMENU WRAPPER PANEL ==================
const subMenuWrapper = document.createElement('div');
subMenuWrapper.classList.add('submenu-wrapper');
subMenuWrapper.addEventListener('mouseenter', function () {
  this.classList.add('is-active');
});
subMenuWrapper.addEventListener('mouseleave', function () {
  this.classList.add('is-active');
  header.style.background = 'transparent';
  header.style.color = '#fff';
  this.innerHTML = ``;
});
header.appendChild(subMenuWrapper);

function ContentSubMenu(index, index2) {
  const { blogs } = headerMenu[index];
  const { titleLv2, itemsLv2 } = headerMenu[index].items[index2];
  const subMenuInner = document.createElement('ul');
  subMenuInner.className = 'submenu-inner';
  subMenuInner.innerHTML = `
        <h4 class="submenu-title">${titleLv2}</h4>
        <ul>
          ${itemsLv2
            .map(
              (item) =>
                `<li> ${
                  typeof item === 'object'
                    ? `
                      <h4 class="title-lv3">${item.titleLv3}</h4>
                      <ul>
                        ${item.itemsLv3
                          .map(
                            (item3) => `<li class="submenu-item3">${item3}</li>`
                          )
                          .join('')}
                      </ul>`
                    : item
                } </li>`
            )
            .join('')}

      </ul>


  `;
  return subMenuInner;
}

function ContentSubMenu2(index, index2) {
  const { title, image } = headerMenu[index].blogs[index2];
  const subMenuInner = document.createElement('ul');
  subMenuInner.className = 'submenu-inner';
  subMenuInner.innerHTML = `
       <li>
        <h4 class="submenu-title">${title}</h4>
        <img src="${image}" alt="" />
       </li>
  `;
  return subMenuInner;
}
