export class FormValidator {
  constructor(validationConfig, form) {
    this._validationConfig = validationConfig;
    this._form = form;
    this._inputs = Array.from(
      this._form.querySelectorAll(this._validationConfig.inputSelector)
    );
    this._button = this._form.querySelector(
      this._validationConfig.submitButton
    );
  }

  _setInputError(input) {
    const error = this._form.querySelector(`#${input.id}-error`);
    input.classList.add(this._validationConfig.inputErrorClass);
    error.classList.add(this._validationConfig.errorClass);
    error.textContent = input.validationMessage;
  }

  _hideInputError(input) {
    const error = this._form.querySelector(`#${input.id}-error`);
    input.classList.remove(this._validationConfig.inputErrorClass);
    error.classList.remove(this._validationConfig.errorClass);
    error.textContent = "";
  }

  _validateInput(input) {
    if (!input.validity.valid) {
      this._setInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  _hasError() {
    return this._inputs.some((input) => {
      return !input.validity.valid;
    });
  }

  toggleButton() {
    if (this._hasError()) {
      this._button.classList.add(this._validationConfig.inactiveButtonClass);
      this._button.disabled = true;
    } else {
      this._button.classList.remove(this._validationConfig.inactiveButtonClass);
      this._button.disabled = false;
    }
  }

  _setHandlers() {
    this.toggleButton();
    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._validateInput(input);
        this.toggleButton();
      });
    });
  }

  enableValidation() {
    this._setHandlers();
  }

  disableButton(){
    this._button.classList.add(this._validationConfig.inactiveButtonClass);
    this._button.disabled = true;
  }
}
