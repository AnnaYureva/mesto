import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._handleSubmitForm = handleSubmitForm;
  }
  open(cardId, cardElementRemove) {
    this._cardId = cardId;
    this._removeCardElement = cardElementRemove;
    super.open();
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._cardId, this._removeCardElement);
    });

    super.setEventListeners();
  }
}
