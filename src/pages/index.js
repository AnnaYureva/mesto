import "./index.css";

import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

import {
  initialCards,
  validationConfig,
  cardsContainer,
  profileEditButton,
  cardAddButton,
  popupEditProfile,
  popupAddCard,
} from "../utils/const.js";

import { FormValidator } from "../components/FormValidator.js";

const createCard = (name, photo) => {
  const card = new Card(
    {
      name: name,
      photo: photo,
    },
    ".template",
    handleCardClick
  );
  return card.generateCard();
};

const cardsSection = new Section(
  {
    items: initialCards,
    renderer: (items) => {
      const card = createCard(items.name, items.photo);
      cardsSection.appendItem(card);
    },
  },
  cardsContainer
);

cardsSection.renderItems();

const popupImage = new PopupWithImage("#popup-image");
popupImage.setEventListeners();

const popupCardAdd = new PopupWithForm("#popup-add-card", handleAddCardForm);
popupCardAdd.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: ".profile__username",
  infoSelector: ".profile__profession",
});

const popupWithProfile = new PopupWithForm(
  "#popup-edit-profile",
  handleEditProfileForm
);
popupWithProfile.setEventListeners();



new FormValidator(
  validationConfig,
  popupEditProfile.querySelector(".popup__form")
).enableValidation();

const popupAddCardValidator = new FormValidator(
  validationConfig,
  popupAddCard.querySelector(".popup__form")
);
popupAddCardValidator.enableValidation();

function handleAddCardForm(inputValues) {
  const card = createCard(inputValues.username, inputValues.profession);
  cardsSection.prependItem(card);
}

function handleEditProfileForm(input) {
  userInfo.setUserInfo({
    profileName: input.username,
    profileInfo: input.profession,
  });
}

function handleCardClick(name, photo) {
  popupImage.open(name, photo);
}

profileEditButton.addEventListener("click", () => {
  const info = userInfo.getUserInfo();
  popupWithProfile.open(info.profileName, info.profileInfo);
});

cardAddButton.addEventListener("click", () => {
  popupCardAdd.open();
  popupAddCardValidator.disableButton();
});
