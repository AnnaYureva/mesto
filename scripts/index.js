const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-icon')

let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__username');
let jobInput = formElement.querySelector('.popup__profession');
let profileUsername = document.querySelector('.profile__username');
let profileProfession = document.querySelector('.profile__profession');

function openPopup(event) {
    popup.classList.add('popup__opened')
    nameInput.value = profileUsername.textContent
    jobInput.value = profileProfession.textContent
};

function closePopup(event) {
    popup.classList.remove('popup__opened')
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