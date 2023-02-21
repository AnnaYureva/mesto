import "./index.css";

import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";

import {
  initialCards,
  validationConfig,
  cardsContainer,
  profileEditButton,
  cardAddButton,
  popupEditProfile,
  popupAddCard,
  popupAvatar,
  avatarEditButton,
} from "../utils/const.js";

import { FormValidator } from "../components/FormValidator.js";

const userInfo = new UserInfo({
  nameSelector: ".profile__username",
  infoSelector: ".profile__profession",
  profileImageSelector: ".profile__image",
});

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-57",
  headers: {
    authorization: "dde92b4e-039a-4bf6-9370-cec53bed9950",
    "Content-Type": "application/json",
  },
});


let cardsSection;
let userId;

Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id
    userInfo.setUserInfo({
      profileName: userData.name,
      profileInfo: userData.about,
    });

    userInfo.setProfileImage(userData.avatar);

    cardsSection = new Section(
      {
        items: cards,
        renderer: (items) => {
          let isLikedByMe = false;
          items.likes.forEach((userId) => {
            if (userId === "0cabfa73ba6bbf6612f204e6") {
              isLikedByMe = true;
            }
          });

          const card = createCard({
            id: items._id,
            name: items.name,
            photo: items.link,
            myCard: items.owner._id === "0cabfa73ba6bbf6612f204e6",
            likesCount: items.likes.length,
            isLiked: isLikedByMe,
          });
          cardsSection.appendItem(card);
        },
      },

      cardsContainer
    );

    cardsSection.renderItems();
  })
  .catch((err) => {
    console.log(`Ошибка загрузки данных: ${err}`);
  });

const popupImage = new PopupWithImage("#popup-image");
popupImage.setEventListeners();

const createCard = (item) => {
  const card = new Card(
    item,
    ".template",
    (name, link) => {
      popupImage.open(name, link);
    },
    (cardId) => {
      return new Promise((resolve) => {
        popupDelete.open(cardId, resolve);
      });
    },
    (cardId, setLike) => {
      if (setLike) {
        return api.addLike(cardId).then((res) => {
          return Promise.resolve(res.likes.length);
        });
      } else {
        return api.deleteLike(cardId).then((res) => {
          return Promise.resolve(res.likes.length);
        });
      }
    }
    );
    return card.generateCard();
  };

//Замена фотографии профиля

const popupEditAvatar = new PopupWithForm("#popup-avatar-change", handleEditAvatar);
popupEditAvatar.setEventListeners();

function handleEditAvatar(inputValues) {
  popupEditAvatar.setSaveButtonText();
  api
    .saveAvatar({ avatar: inputValues.avatar })
    .then((res) => {
      userInfo.setProfileImage(res.avatar);
    })
    .then(() => {
      popupEditAvatar.close();
    })
    .catch((err) => {
      console.log(`Ошибка при загрузке фото профиля: ${err}`);
    })
    .finally(() => popupEditAvatar.resetSaveButtonText());
}

//Добавление новой карточки

const popupCardAdd = new PopupWithForm("#popup-add-card", handleAddCardForm);
popupCardAdd.setEventListeners();

function handleAddCardForm(inputValues) {
  popupCardAdd.setSaveButtonText();
  api
    .addNewCard({ name: inputValues.username, link: inputValues.profession })
    .then((reply) => {
      const card = createCard({
        id: reply._id,
        name: inputValues.username,
        photo: inputValues.profession,
        myCard: true,
        isLikedByMe: false,
        likesCount: 0,
      });
      cardsSection.prependItem(card);
    })
    .catch((err) => {
      console.log(`Ошибка при добавлении карточки: ${err}`);
    })
    .finally(() => popupCardAdd.resetSaveButtonText());
}

//Редактирование профиля

const popupWithProfile = new PopupWithForm(
  "#popup-edit-profile",
  handleEditProfileForm
);
popupWithProfile.setEventListeners();

function handleEditProfileForm(input) {
  popupWithProfile.setSaveButtonText();
  api
    .saveUserData({ name: input.username, description: input.profession })
    .then(() => {
      userInfo.setUserInfo({
        profileName: input.username,
        profileInfo: input.profession,
      });
    })
    .catch((err) => {
      console.log(`Ошибка при редактировании профиля: ${err}`);
    })
    .finally(() => popupWithProfile.resetSaveButtonText());
}

const popupDelete = new PopupWithSubmit(
  "#popup__delete-card",
  handleDeleteCard
);
popupDelete.setEventListeners();

function handleDeleteCard(cardId, cardElementRemove) {
  api
    .deleteCard(cardId)
    .then(() => {
      cardElementRemove();
    })
    .then(() => {
      popupDelete.close();
    })
    .catch((err) => {
      console.log(`Ошибка при удалении карточки: ${err}`);
    });
}

//Валидация

new FormValidator(
  validationConfig,
  popupEditProfile.querySelector(".popup__form")
).enableValidation();

const popupAddCardValidator = new FormValidator(
  validationConfig,
  popupAddCard.querySelector(".popup__form")
);
popupAddCardValidator.enableValidation();

const popupEditAvatarFormValidator = new FormValidator(
  validationConfig,
  popupAvatar.querySelector(".popup__form")
);
popupEditAvatarFormValidator.enableValidation();

//Слушатели событий

profileEditButton.addEventListener("click", () => {
  const info = userInfo.getUserInfo();
  popupWithProfile.setInputValues({
    username: info.profileName,
    profession: info.profileInfo,
  });
  popupWithProfile.open();
});

cardAddButton.addEventListener("click", () => {
  popupCardAdd.open();
  popupAddCardValidator.disableButton();
});

avatarEditButton.addEventListener("click", () => {
  popupEditAvatar.open();
  popupEditAvatarFormValidator.disableButton();
});