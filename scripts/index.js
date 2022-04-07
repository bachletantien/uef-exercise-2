// const slider = document.querySelector('.slider');
// const cards = document.querySelector('.cards');

// let isPressedDown = false;
// let cursorXSpace;

// slider.addEventListener('mousedown', (e) => {
//   isPressedDown = true;
//   cursorXSpace = e.offsetX - cards.offsetLeft;
// });
// slider.addEventListener('mouseup', (e) => {
//   isPressedDown = false;
// });

// slider.addEventListener('mousemove', (e) => {
//   if (!isPressedDown) return;
//   e.preventDefault();
//   cards.style.left = `${e.offsetX - cursorXSpace}px`;
//   // boundCards();
// });

// function boundCards() {
//   const containerRect = slider.getBoundingClientRect();
//   const cardsRect = cards.getBoundingClientRect();

//   if (parseInt(cards.style.left > 0)) {
//     cards.style.left = 0;
//   } else if (cardsRect.right < slider.right) {
//     cards.style.left = `-${cardsRect.width - slider.width}px`;
//   }
// }

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
