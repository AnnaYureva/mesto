export class FormValidator {
  constructor(validationConfig, form) {
    this._validationConfig = validationConfig;
    this._form = form;
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
    const error = this._form.querySelector(`#${input.id}-error`);
    if (!input.validity.valid) {
      this._setInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  _hasError = (inputs) => {
    return inputs.some((input) => {
      return !input.validity.valid;
    });
  };

  _toggleButton(button, inputs) {
    if (this._hasError(inputs)) {
      button.classList.add(this._validationConfig.inactiveButtonClass);
      button.disabled = true;
    } else {
      button.classList.remove(this._validationConfig.inactiveButtonClass);
      button.disabled = false;
    }
  }

  _setHandlers() {
    const inputs = Array.from(
      this._form.querySelectorAll(this._validationConfig.inputSelector)
    );
    const button = this._form.querySelector(
      this._validationConfig.submitButton
    );
    this._toggleButton(button, inputs);
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._validateInput(input);
        this._toggleButton(button, inputs);
      });
    });
  }

  enableValidation() {
    this._setHandlers();
  }
}
