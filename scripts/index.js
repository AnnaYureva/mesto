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