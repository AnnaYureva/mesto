import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popup.querySelector(".popup__image");
    this._captionElement = this._popup.querySelector(".popup__figcaption");
  }

  open(name, photo) {
    this._imageElement.src = photo;
    this._imageElement.alt = name;
    this._captionElement.textContent = name;
    super.open();
  }
}
