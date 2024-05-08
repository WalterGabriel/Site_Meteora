
//Menu Hamburguer
const hamburguerMenuButton = document.querySelector('.header_hamburguer-menu_button');

hamburguerMenuButton.addEventListener('click',openHamburguerMenu);

function openHamburguerMenu() {
  const hamburguerMenuList = document.querySelector('.header_nav');
  hamburguerMenuList.classList.toggle('header_nav--active');
  
  hamburguerMenuButton.textContent === "menu"
    ? hamburguerMenuButton.textContent = "close"
    : hamburguerMenuButton.textContent = "menu"
    ;
}

//Product Modal
const productModal = document.querySelector(".product-modal");

const openProductModal = document.querySelector(".modal_button");

const closeProductModal = document.querySelector(".product-modal_close");


openProductModal.addEventListener("click", () => productModal.showModal());

closeProductModal.addEventListener("click", () => productModal.close());
