import { placeholderHTML } from "./placeholder.mjs";

export const productsHTML = `
  <style>
    a.product {
      color: #333;
      text-decoration: none;
    }

    .products-container {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
    }
  </style>
  <li>
  <a href="details.html" class="product">
    ${placeholderHTML('product photo')}
  </a>
  </li>
  <li>
  <a href="details.html" class="product">
    ${placeholderHTML('product photo')}
  </a>
  </li>
  <li>
  <a href="details.html" class="product">
    ${placeholderHTML('product photo')}
  </a>
  </li>
  <li>
  <a href="details.html" class="product">
    ${placeholderHTML('product photo')}
  </a>
  </li>
  <li>
  <a href="details.html" class="product">
    ${placeholderHTML('product photo')}
  </a>
  </li>
  <li>
  <a href="details.html" class="product">
    ${placeholderHTML('product photo')}
  </a>
  </li>
  <li>
  <a href="details.html" class="product">
    ${placeholderHTML('product photo')}
  </a>
  </li>
  <li>
  <a href="details.html" class="product">
    ${placeholderHTML('product photo')}
  </a>
  </li>
`;
