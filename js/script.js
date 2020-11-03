// popup feedback
const feedbackButton = document.querySelector(".button-about-contacts");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackInput = feedbackPopup.querySelector(".feedback-input");
const feedbackForm = feedbackPopup.querySelector(".form-feedback");
const feedbackEmail = feedbackPopup.querySelector(".feedback-email");
const feedbackText = feedbackPopup.querySelector(".feedback-text");
const feedbackClose = feedbackPopup.querySelector(".modal-close-button");

let isStorageSupport = true;
let storageLogin = "";
let storageEmail = "";

try {
  storageLogin = localStorage.getItem("login");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}



feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  if (storageLogin && storageEmail) {
    feedbackInput.value = storageLogin;
    feedbackEmail.value = storageEmail;
    feedbackText.focus();
  } else {
    feedbackInput.focus();
  }
});


feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackInput.value || !feedbackEmail.value || !feedbackText.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", feedbackInput.value);
      localStorage.setItem("email", feedbackEmail.value);
    }
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && feedbackPopup.classList.contains("modal-show")) {
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
  }
});


// popup map
const mapPopup = document.querySelector(".modal-map");
const mapButton = document.querySelector(".map");
const mapClose = mapPopup.querySelector(".modal-close-button");

mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && mapPopup.classList.contains("modal-show")) {
    mapPopup.classList.remove("modal-show");
  }
});


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


// slider services
const menuItems = document.querySelectorAll(".button-services");
const servicesSliderItems = document.querySelectorAll(".sevices-slider-item");

let removeSlide = function () {
  for (let i = 0; i < servicesSliderItems.length; i++) {
    servicesSliderItems[i].classList.remove("slider-show");
  }
}

let addServicesClickHandler = function(menuItem, servicesSliderItem) {
  menuItem.addEventListener("click", function () {
    removeSlide();
    servicesSliderItem.classList.add("slider-show");
  })
};

for (let i = 0; i < menuItems.length; i++) {
  addServicesClickHandler(menuItems[i], servicesSliderItems[i]);
}


// slider features
const featuresSlider = document.querySelector(".features-slider");
const featuresSliderItems = featuresSlider.querySelectorAll(".features-slider-item");
const featuresSliderNext = featuresSlider.querySelector(".slider-control-next");
const featuresSliderBack = featuresSlider.querySelector(".slider-control-back");
const featuresSliderControls = featuresSlider.querySelectorAll(".current-item");

// slider features controls (next / back)
let currenSlideNumber = 0;

let getCurrentSlide = function () {
  for (let i = 0; i < featuresSliderItems.length; i++) {
    if (featuresSliderItems[i].classList.contains("slider-show")) {
      currenSlideNumber = i;
    }
  }
}

featuresSliderNext.addEventListener("click", function () {
  getCurrentSlide();
  featuresSliderItems[currenSlideNumber].classList.remove("slider-show");
  featuresSliderControls[currenSlideNumber].classList.remove("current-slide");
  if (currenSlideNumber + 1 < featuresSliderItems.length) {
    featuresSliderItems[currenSlideNumber + 1].classList.add("slider-show");
    featuresSliderControls[currenSlideNumber + 1].classList.add("current-slide");
  } else {
    currenSlideNumber = -1;
    featuresSliderItems[currenSlideNumber + 1].classList.add("slider-show");
    featuresSliderControls[currenSlideNumber + 1].classList.add("current-slide");
  }
});

featuresSliderBack.addEventListener("click", function () {
  getCurrentSlide();
  featuresSliderItems[currenSlideNumber].classList.remove("slider-show");
  featuresSliderControls[currenSlideNumber].classList.remove("current-slide");
  if (currenSlideNumber - 1 > -1 ) {
    featuresSliderItems[currenSlideNumber - 1].classList.add("slider-show");
    featuresSliderControls[currenSlideNumber - 1].classList.add("current-slide");
  } else {
    currenSlideNumber = featuresSliderItems.length;
    featuresSliderItems[currenSlideNumber - 1].classList.add("slider-show");
    featuresSliderControls[currenSlideNumber - 1].classList.add("current-slide");
  }
});


// slider features pagination)
let clearSlide = function () {
  for (let i = 0; i < featuresSliderItems.length; i++) {
    featuresSliderItems[i].classList.remove("slider-show");
    featuresSliderControls[i].classList.remove("current-slide");
  }
}

let featuresClickHandler = function (featuresSliderControl, featuresSliderItem) {
  featuresSliderControl.addEventListener("click", function () {
    clearSlide();
    featuresSliderItem.classList.add("slider-show");
    featuresSliderControl.classList.add("current-slide");
  });
}

for (let i = 0; i < featuresSliderItems.length; i++) {
  featuresClickHandler(featuresSliderControls[i], featuresSliderItems[i])
}
