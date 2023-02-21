import osetiaImage from '../images/СевернаяОсетия.jpg';
import gijgitImage from '../images/ОзероГижгит.jpg';
import cadargavanImage from '../images/Кадаргаван-min.jpg'
import jeleznovodskImage from '../images/Железноводск-min.jpg';
import kislovodskImage from '../images/Кисловодск-min.jpg';
import cabardaImage from '../images/Кабардино-Балкария-min.jpg'

const initialCards = [
  {
    name: "Северная\u00A0Осетия",
    photo: osetiaImage,
  },
  {
    name: "Озеро\u00A0Гижгит",
    photo: gijgitImage,
  },
  {
    name: "Кадаргаван",
    photo: cadargavanImage,
  },
  {
    name: "Железноводск",
    photo: jeleznovodskImage,
  },
  {
    name: "Кисловодск",
    photo: kislovodskImage,
  },
  {
    name: "Кабардино-Балкария",
    photo: cabardaImage,
  },
];

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButton: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const cardsContainer = document.querySelector(".elements");
const profileEditButton = document.querySelector(".profile__edit-button");
const cardAddButton = document.querySelector(".profile__add-button");
const popupEditProfile = document.querySelector("#popup-edit-profile");
const popupAddCard = document.querySelector("#popup-add-card");
const avatarEditButton = document.querySelector(".profile__image-edit");
const popupAvatar = document.querySelector("#popup-avatar-change");

export {
  initialCards,
  validationConfig,
  cardsContainer,
  profileEditButton,
  cardAddButton,
  popupEditProfile,
  popupAddCard,
  avatarEditButton,
  popupAvatar,
};
