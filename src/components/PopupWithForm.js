import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popup.querySelector(".popup__form");
    this._inputs = Array.from(this._form.querySelectorAll(".popup__input"));
    this._saveButton = this._popup.querySelector(".popup__save-button");
<<<<<<< HEAD
    this._saveButtonText = this._saveButton.textContent
=======
    this._saveButtonText = this._saveButton.textContent;
>>>>>>> b80c40f36face1e328d4008697f16010a4e6382c
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputs.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  setSaveButtonText() {
<<<<<<< HEAD
    this._saveButton.textContent = 'Сохранение...';
=======
    this._saveButton.textContent = "Сохранение...";
>>>>>>> b80c40f36face1e328d4008697f16010a4e6382c
  }

  resetSaveButtonText() {
    this._saveButton.textContent = this._saveButtonText;
  }

<<<<<<< HEAD

=======
>>>>>>> b80c40f36face1e328d4008697f16010a4e6382c
  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }

  setInputValues(inputValues) {
    this._inputs.forEach((input) => {
      input.value = inputValues[input.name];
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
