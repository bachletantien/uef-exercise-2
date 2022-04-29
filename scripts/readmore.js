// learn more
const btnLongToggler = document.querySelector('.long-desc-toggler');
const btnSmallToggler = document.querySelector('.small-desc-toggler');
const categoryDesc = document.querySelector('.category-description');

btnLongToggler.addEventListener('click', function () {
  categoryDesc.classList.toggle('open');
  if (categoryDesc.classList.contains('open')) {
    btnLongToggler.textContent = 'Close';

    categoryDesc.style.setProperty('--cate-desc-content', undefined);
  } else {
    btnLongToggler.textContent = 'Lire plus';
    categoryDesc.style.setProperty('--cate-desc-content', '');
  }
});
