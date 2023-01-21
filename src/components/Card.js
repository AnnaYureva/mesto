export default class Card {
  constructor( {name, photo, templateSelector, handleImageClick} ) {
    this._name = name;
    this._photo = photo;
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);
    return cardElement;
  }

  _handleLikeClick(event) {
    event.target.classList.toggle("elements__like_active");
  }

  _removeElement() {
    this._element.remove();
    this._element = null;
  }

  _handleZoomPopup() {
    this._handleImageClick(this._name, this._photo);
  }

  _setEventListeners() {
    this._imageZoom.addEventListener("click", () => this._handleZoomPopup());
    this._likeElement.addEventListener("click", this._toggleLike);
    this._deleteElement.addEventListener("click", () => this._removeElement());
  }

  generateCard() {
    this._element = this._getTemplate();
    this._imageZoom = this._element.querySelector(".elements__photo");
    this._imageZoom.src = this._photo;
    this._imageZoom.alt = this._name;
    this._element.querySelector(".elements__name").textContent = this._name;
    this._likeElement = this._element.querySelector(".elements__like");
    this._deleteElement = this._element.querySelector(
      ".elements__delete-button"
    );
    this._setEventListeners(this._likeElement, this._deleteElement, this._imageZoom);
    return this._element;
  }
}
