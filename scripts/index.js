const initialCards = [
  {
    name: "Северная\u00A0Осетия",
    photo: "images/СевернаяОсетия.jpg",
  },
  {
    name: "Озеро\u00A0Гижгит",
    photo: "images/ОзероГижгит.jpg",
  },
  {
    name: "Кадаргаван",
    photo: "images/Кадаргаван-min.jpg",
  },
  {
    name: "Железноводск",
    photo: "images/Железноводск-min.jpg",
  },
  {
    name: "Кисловодск",
    photo: "images/Кисловодск-min.jpg",
  },
  {
    name: "Кабардино-Балкария",
    photo: "images/Кабардино-Балкария-min.jpg",
  },
];

const cardSection = document.querySelector(".elements");
const templateElement = document.querySelector(".template");
const likeElement = document.querySelector(".elements__like");
const deleteElement = document.querySelector("element__delete-button");
const popups = document.querySelectorAll(".popup");
const profileEditButton = document.querySelector(".profile__edit-button");
const cardAddButton = document.querySelector(".profile__add-button");
const popupEditProfile = document.querySelector("#popup-edit-profile");
const popupAddCard = document.querySelector("#popup-add-card");
const popupZoom = document.querySelector("#popup-image");
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

const imageZoom = popupZoom.querySelector(".popup__image");
const imageCaption = popupZoom.querySelector(".popup__figcaption");
const closeButtons = document.querySelectorAll(".popup__close-icon");

function createCard(name, photo) {
  const newElement = templateElement.content.cloneNode(true);
  const cardImage = newElement.querySelector(".elements__photo");
  newElement.querySelector(".elements__name").textContent = name;
  cardImage.src = photo;
  cardImage.alt = name;
  newElement
    .querySelector(".elements__like")
    .addEventListener("click", toggleLike);
  newElement
    .querySelector(".elements__delete-button")
    .addEventListener("click", removeElement);
  cardImage.addEventListener("click", () => zoomPopup(name, photo));
  return newElement;
};

function addNewElement(name, photo) {
  const newElement = createCard(name, photo);
  cardSection.prepend(newElement);
};

initialCards.forEach((element) => {
  addNewElement(element.name, element.photo);
});

function zoomPopup(name, photo) {
  imageZoom.src = photo;
  imageZoom.alt = name;
  imageCaption.textContent = name;
  openPopup(popupZoom);
}

function toggleLike(likeElement) {
  likeElement.target.classList.toggle("elements__like_active");
}

function removeElement(deleteElement) {
  const itemElement = deleteElement.target.closest(".elements__item");
  itemElement.remove();
}

function openPopup(popups) {
  popups.classList.add("popup_opened");
  popups.addEventListener("click", closePopupOverlay);
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

function closePopup(popups) {
  popups.classList.remove("popup_opened");
  popups.removeEventListener("click", closePopupOverlay);
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
  if (!evt.target.closest(".popup__container")) {
    closePopup(evt.target.closest(".popup"));
  }
};

document.addEventListener('keydown', function (evt) {
  if(evt.key === 'Escape') {
      closePopup(popupEditProfile);
      closePopup(popupAddCard);
      closePopup(popupZoom);
  }
});
