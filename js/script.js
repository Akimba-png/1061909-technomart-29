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
