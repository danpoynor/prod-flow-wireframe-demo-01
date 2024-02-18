import { headerHTML } from './modules/header.mjs';
import { footerHTML } from './modules/footer.mjs';
import { productsHTML } from './modules/products.mjs';

document.querySelector('.header-container').innerHTML = headerHTML;
document.querySelector('.footer-container').innerHTML = footerHTML;

window.addEventListener('load', function () {
  var baseTag = document.createElement('base');
  if (window.location.hostname === 'danpoynor.github.io') {
    baseTag.href = '/prod-flow-wireframe-demo-01/';
  } else {
    baseTag.href = '/';
  }
  document.head.appendChild(baseTag);
});

const links = document.querySelectorAll('header nav > ul > li > a');
links.forEach(link => {
  if (window.location.pathname.includes(link.getAttribute('href'))) {
    link.classList.add('active');
  }
});

// Get all products and add event listener to each
const productEvents = () => {
  const products = document.querySelectorAll('.product');

  // Test browser support for Dialog element exists
  // before dynamically loading dialog.js module
  if (window.HTMLDialogElement) {

    import('./modules/dialog.mjs').then((Dialog) => {
      products.forEach(product => {
        product.addEventListener('click', (event) => {
          event.preventDefault();
          Dialog.init();
        });
      });
    })
  } else {
    console.error(`Your browser does not support the HTML <dialog> element. Time to update!`);
  }
}

// Populate products
const products_grid = document.querySelector('.products-container')
if (products_grid) {
  products_grid.innerHTML = productsHTML;
  productEvents();
}
