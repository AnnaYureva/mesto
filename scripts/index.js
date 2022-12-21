import Card from "./Card.js";
import { initialCards, validationConfig } from "./const.js";
import { FormValidator } from "./FormValidator.js";

const elementCard = document.querySelector(".elements");
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

const createCard = (name, photo) => {
  const card = new Card(name, photo, ".template", openZoomPopup);
  const cardElement = card.generateCard();
  return cardElement;
};

initialCards.forEach((item) => {
  elementCard.append(createCard(item.name, item.photo));
});

function openZoomPopup(name, photo) {
  const imageElement = popupImage.querySelector(".popup__image");
  imageElement.src = photo;
  imageElement.alt = name;
  popupImage.querySelector(".popup__figcaption").textContent = name;
  openPopup(popupImage);
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  popup.addEventListener("click", closePopupOverlay);
  document.addEventListener("keydown", closeByEsc);
}

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

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  popup.removeEventListener("click", closePopupOverlay);
  document.removeEventListener("keydown", closeByEsc);
}

function handleCardSubmit(event) {
  event.preventDefault();
  const name = placeNameInput.value;
  const photo = placePhotoInput.value;
  elementCard.prepend(createCard(name, photo));
  event.target.reset();
  popupAddCardValidator.toggleButton();
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
  )
    closePopup(evt.currentTarget);
}

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

new FormValidator(
  validationConfig,
  popupEditProfile.querySelector(".popup__form")
).enableValidation();
const popupAddCardValidator = new FormValidator(
  validationConfig,
  popupAddCard.querySelector(".popup__form")
);
popupAddCardValidator.enableValidation();
