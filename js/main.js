const cartButton  = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal-close");
const cancelShopping = document.querySelector(".cancel-shopping-button");

cartButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);
cancelShopping.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle("is-open")
}

new WOW().init();