// popup cart
const buyButtons = document.querySelectorAll(".assortment-button-buy");
const cartPopup = document.querySelector(".modal-cart");
const cartIcon = document.querySelector(".main-header-cart");
const cartCloseButton = cartPopup.querySelector(".modal-close-button");
const cartContinueButton = cartPopup.querySelector(".continue-button");


for (let i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
    cartIcon.classList.add("order-link-full");
  });
}

cartCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

cartContinueButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && cartPopup.classList.contains("modal-show")) {
    cartPopup.classList.remove("modal-show");
  }
});


// bookmark icon
const bookmarkIcon = document.querySelector(".main-header-bookmarks");
const bookmarkButtons = document.querySelectorAll(".assortment-button-bookmark");

for (let i = 0; i < bookmarkButtons.length; i++) {
  bookmarkButtons[i].addEventListener("click", function () {
    bookmarkIcon.classList.add("order-link-full");
  })
}
