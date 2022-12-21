const initialCards = [
  {
    name: "Северная\u00A0Осетия",
    photo: 'images/СевернаяОсетия.jpg',
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

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButton: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export { initialCards, validationConfig }