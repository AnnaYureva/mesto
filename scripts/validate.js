const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: 'popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

function setInputError(form, input, config) {
   const error = form.querySelector(`#${input.id}-error`);
   input.classList.add(config.inputErrorClass);
   error.classList.add(config.errorClass);
   error.textContent = input.validationMessage;
}

function hideInputError(form, input, config) {
   const error = form.querySelector(`#${input.id}-error`);
   input.classList.remove(config.inputErrorClass);
   error.classList.remove(config.errorClass);
   error.textContent = '';
}

function validateInput(form, input, config) {
   const error = form.querySelector(`#${input.id}-error`);
 if (!input.validity.valid) {
   setInputError(form, input, config)
 } else {
   hideInputError(form, input, config)
 };
};

const hasError = (inputs) => {
   return inputs.some((input) => {
      return !input.validity.valid
   });
};

function toggleButton(button, inputs, config) {
   if (hasError(inputs)) {
      button.classList.add(config.inactiveButtonClass)
      button.disabled = true
   } else {
      button.classList.remove(config.inactiveButtonClass)
      button.disabled = false
   }
}

function setHandlers(form, config) {
 const inputs = Array.from(form.querySelectorAll(config.inputSelector));
 const button = form.querySelector(config.submitButtonSelector);
 toggleButton(button, inputs, config)
 inputs.forEach((input) => {
    input.addEventListener('input', () => {
        validateInput(form, input, config)
        toggleButton(button, inputs, config)
    });
 });
};
 

function enableValidation(config) {
 const formList = Array.from(document.querySelectorAll(config.formSelector));
 formList.forEach((form) => {
 form.addEventListener('submit', (evt) => {
    evt.preventDefault()
 });
 setHandlers(form, config);
});
};

enableValidation(validationConfig);