// ====================== SCROLL TO TOP =======================//
const goTop = document.querySelector('.go-to-top');
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
goTop.addEventListener('click', function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
