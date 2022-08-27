const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-icon')

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_username');
let jobInput = formElement.querySelector('.popup__input_type_profession');
let profileUsername = document.querySelector('.profile__username');
let profileProfession = document.querySelector('.profile__profession');

function openPopup(event) {
    popup.classList.add('popup_opened')
    nameInput.value = profileUsername.textContent
    jobInput.value = profileProfession.textContent
};

function closePopup(event) {
    popup.classList.remove('popup_opened')
};

function formSubmitHandler(event) {
    event.preventDefault();
    profileUsername.textContent = nameInput.value
    profileProfession.textContent = jobInput.value
    closePopup();
};

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

const initialCards = [
    {
      name: 'Северная\u00A0Осетия',
      photo: 'images/ОзероГижгит.jpg',
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


  function addNewElement(name, photo) {
    const newElement = templateElement.content.cloneNode(true);
    newElement.querySelector('.elements__name').textContent = name;
    newElement.querySelector('.elements__photo').src = photo;
    newElement.querySelector('.elements__photo').setAttribute('alt', name);
    listElement.prepend(newElement);
  };

  initialCards.forEach((element) => {
    addNewElement(element.name, element.photo);
  });