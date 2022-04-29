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
