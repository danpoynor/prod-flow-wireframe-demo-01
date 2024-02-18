export const dialogHTML = `
  <style>
    dialog * {
      transition: all 1s ease-in-out;
    }
    dialog {
      align-items: center;
      border-radius: 8px;
      border: 1px solid #ccc;
      box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      left: 50%;
      margin: 0 auto;
      max-width: 600px;
      padding: 1rem;
      position: fixed;
      top: 45%;
      transform: translate(-50%, -50%);
      width: 80%;
    }

    dialog::backdrop {
      background: rgb(0 0 0 / 60%);
      backdrop-filter: blur(3px);
    }

    [method=dialog] {
      > button {
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 1rem;
        position: absolute;
        top: 1rem;
        width: 36px;
        height: 36px;
        border: 0;
        outline: 0;

        svg {
          fill: #666;
          stroke-width: 1px;
        }
      }
    }

    [method=dialog] {
      > button:hover {
        background-color: #333;

        svg {
          fill: #fff;
        }
      }
    }

    dialog .product-name {
      font-size: 1.5em;
      margin: .5rem 1rem .5rem;
    }

    dialog .product-photo {
      width: 100%;
      max-width: 500px;
      height: auto;
      margin-bottom: 1em;
    }

    dialog .product-description {
      margin-bottom: 1rem;
      text-align: justify;
    }

    dialog .contact-link {
      padding: .5rem 1rem;
      background-color: #666;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none;
      margin-bottom: 1rem;
    }

    dialog .contact-link:hover {
      background-color: #333;
    }
  </style>
  <form method='dialog'><button title='Close dialog'><svg viewBox="0 0 10 10" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9.286,2.267a.733.733,0,0,0,0-1.035L8.768.714a.733.733,0,0,0-1.035,0L5,3.447,2.267.714a.733.733,0,0,0-1.035,0l-.518.518a.733.733,0,0,0,0,1.035L3.447,5,.714,7.733a.733.733,0,0,0,0,1.035l.518.518a.733.733,0,0,0,1.035,0L5,6.553,7.733,9.286a.733.733,0,0,0,1.035,0l.518-.518a.733.733,0,0,0,0-1.035L6.553,5Z" stroke-linecap="round" stroke-linejoin="round"/></svg></button></form>
  <h2 class="product-name">Product Name</h2>
  <div class="product-photo placeholder" style="height: 24rem;">product photo</div>
  <p class="product-description">Short description of the product.</p>
  <a class="contact-link" href="mailto:example@example.com">Inquire Within</a>
`;

const showDialog = () => {
  const dialog = document.querySelector('dialog');
  if (typeof dialog.showModal === "function") {
    // NOTE: .showModal() *must* be used to make the ::backdrop pseudo-element appear
    dialog.showModal();
  } else {
    console.error("The `<dialog>` API is not supported by this browser.");
  }

  dialog.addEventListener('close', () => {
    dialog.remove();
  });
}

export const init = () => {
  // If a dialog was previously closed without being removed, remove it from the DOM
  const existingDialog = document.getElementsByTagName('dialog');
  if (existingDialog.length) {
    existingDialog[0].remove();
  }

  // Create new dialog
  const dialog = document.createElement('dialog');
  dialog.innerHTML = dialogHTML;
  document.body.appendChild(dialog);

  showDialog();
}
