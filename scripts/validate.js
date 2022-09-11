const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

function validateInput(form, input, config) {
   const error = form.querySelector(`.${input.id}-error`);
 if (!input.validity.valid) {
    input.classList.add(config.inputErrorClass)
    error.textContent = input.validationMessage
 } else {
    input.classList.remove(config.inputErrorClass)
    error.textContent = ''
 };
};
function setHandlers(form, config) {
 const inputs = Array.from(form.querySelector(config.inputSelector));
 inputs.forEach((input) => {
    input.addEventListener('input', () => {
        validateInput(form, input, config)
    });
 });
};
function enableValidation(config) {
 const form = document.querySelector(config.formSelector);

 form.addEventListener('submit', (evt) => {
    evt.preventDefault()
 });
 setHandlers(form, config);
};
enableValidation(validationConfig);
