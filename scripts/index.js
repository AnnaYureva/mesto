const initialCards = [
  {
    name: 'Северная\u00A0Осетия',
    photo: 'images/СевернаяОсетия.jpg',
  },
  {
    name: 'Озеро\u00A0Гижгит',
    photo: 'images/ОзероГижгит.jpg'
  },
  {
    name: 'Кадаргаван',
    photo: 'images/Кадаргаван-min.jpg'
  },
  {
    name: 'Железноводск',
    photo: 'images/Железноводск-min.jpg'
  },
  {
    name: 'Кисловодск',
    photo: 'images/Кисловодск-min.jpg'
  },
  {
    name: 'Кабардино-Балкария',
    photo: 'images/Кабардино-Балкария-min.jpg'
  }
];

const listElement = document.querySelector('.elements');
const templateElement = document.querySelector('.template');
const likeElement = document.querySelector('.elements__like');
const deleteElement = document.querySelector('element__delete-button');
const popup = document.querySelectorAll('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');
const popupEditProfile = document.querySelector('#popup-edit-profile');
const popupAddCard = document.querySelector('#popup-add-card');
const popupEditCloseButton = popupEditProfile.querySelector('.popup__close-icon');
const popupAddCloseButton = popupAddCard.querySelector('.popup__close-icon');
const popupZoom = document.querySelector('#popup-image');
const popupZoomCloseButton = popupZoom.querySelector('.popup__close-icon');


let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_username');
let jobInput = formElement.querySelector('.popup__input_type_profession');
let profileUsername = document.querySelector('.profile__username');
let profileProfession = document.querySelector('.profile__profession');
let placeNameInput = popupAddCard.querySelector('.popup__input_type_username');
let placePhotoInput = popupAddCard.querySelector('.popup__input_type_profession');


function addNewElement(name, photo) {
  const newElement = templateElement.content.cloneNode(true);
  newElement.querySelector('.elements__name').textContent = name;
  newElement.querySelector('.elements__photo').src = photo;
  newElement.querySelector('.elements__photo').setAttribute('alt', name);
  newElement.querySelector('.elements__like').addEventListener('click', likeActive);
  newElement.querySelector('.elements__delete-button').addEventListener('click', removeElement);
  newElement.querySelector('.elements__photo').addEventListener('click', () => zoomPopup(name, photo));
  listElement.prepend(newElement);
};

initialCards.forEach((element) => {
  addNewElement(element.name, element.photo);
});

function zoomPopup(name, photo) {
  const imageZoom = popupZoom.querySelector('.popup__image');
  const imageCaption = popupZoom.querySelector('.popup__figcaption');
  imageZoom.src = photo;
  imageCaption.textContent = name;
  imageCaption.setAttribute('alt', name);
  openPopup(popupZoom);
};


function likeActive (likeElement) {
  likeElement.target.classList.toggle('elements__like_active');
};

function removeElement(deleteElement) {
  const itemElement = deleteElement.target.closest('.elements__item');
  itemElement.remove();
};


function openPopup(popup) {
popup.classList.add('popup_opened');
};

profileEditButton.addEventListener('click', () => {
nameInput.value = profileUsername.textContent;
jobInput.value = profileProfession.textContent;
openPopup(popupEditProfile);
});

function formSubmitHandler(event) {
event.preventDefault();
profileUsername.textContent = nameInput.value;
profileProfession.textContent = jobInput.value;
closePopup(popupEditProfile);
};

formElement.addEventListener('submit', formSubmitHandler);
cardAddButton.addEventListener('click', () => openPopup(popupAddCard));

function closePopup(popup) {
popup.classList.remove('popup_opened');
};

popupEditCloseButton.addEventListener('click', () => closePopup(popupEditProfile));
popupAddCloseButton.addEventListener('click', () => closePopup(popupAddCard));
popupZoomCloseButton.addEventListener('click', () => closePopup(popupZoom));

function cardSubmitHandler (event) {
event.preventDefault();
const name = placeNameInput.value;
const photo = placePhotoInput.value;
addNewElement(name, photo);
placeNameInput.value = '';
placePhotoInput.value = '';
closePopup(popupAddCard);
};

popupAddCard.addEventListener('submit', cardSubmitHandler);
