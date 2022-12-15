import Card from "./Card.js";
import { initialCards } from "./const.js";
import { FormValidator } from "./FormValidator.js";

const popupImage = document.querySelector("#popup-image");
const profileEditButton = document.querySelector(".profile__edit-button");
const cardAddButton = document.querySelector(".profile__add-button");
const popupEditProfile = document.querySelector("#popup-edit-profile");
const popupAddCard = document.querySelector("#popup-add-card");
const profileForm = document.querySelector(".popup__form");
const nameInput = profileForm.querySelector(".popup__input_type_username");
const jobInput = profileForm.querySelector(".popup__input_type_profession");
const profileUsername = document.querySelector(".profile__username");
const profileProfession = document.querySelector(".profile__profession");
const placeNameInput = popupAddCard.querySelector(
  ".popup__input_type_username"
);

const placePhotoInput = popupAddCard.querySelector(
  ".popup__input_type_profession"
);

const closeButtons = document.querySelectorAll(".popup__close-icon");
const cardFormsSubmitButton = popupAddCard.querySelector(".popup__save-button");

initialCards.forEach((item) => {
  const card = new Card(item.name, item.photo, item.template);
  const cardElement = card.generateCard();
  cardElement
    .querySelector(".elements__photo")
    .addEventListener("click", () => openPopup(popupImage));
  document.querySelector(".elements").append(cardElement);
});

function openPopup(popups) {
  popups.classList.add("popup_opened");
  popups.addEventListener("click", closePopupOverlay);
  document.addEventListener("keydown", closeByEsc);
}

const addNewElement = (name, photo) => {
  const card = new Card(name, photo);
  const cardElement = card.generateCard();
  cardElement
    .querySelector(".elements__photo")
    .addEventListener("click", () => openPopup(popupImage));
  document.querySelector(".elements").prepend(cardElement);
};

profileEditButton.addEventListener("click", () => {
  nameInput.value = profileUsername.textContent;
  jobInput.value = profileProfession.textContent;
  openPopup(popupEditProfile);
});

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileUsername.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);
cardAddButton.addEventListener("click", () => openPopup(popupAddCard));

function closePopup(popups) {
  popups.classList.remove("popup_opened");
  popups.removeEventListener("click", closePopupOverlay);
  document.removeEventListener("keydown", closeByEsc);
}

function handleCardSubmit(event) {
  event.preventDefault();
  const name = placeNameInput.value;
  const photo = placePhotoInput.value;
  addNewElement(name, photo);
  event.target.reset();
  closePopup(popupAddCard);
}

popupAddCard.addEventListener("submit", handleCardSubmit);

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

function closePopupOverlay(evt) {
  if (
    !evt.target.closest(".popup__image") &&
    !evt.target.closest(".popup__container")
  ) {
    closePopup(evt.target.closest(".popup"));
  }
}

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButton: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const forms = Array.from(document.querySelectorAll(".popup__form"));
forms.forEach((item) => {
  const form = new FormValidator(validationConfig, item);
  form.enableValidation();
});
