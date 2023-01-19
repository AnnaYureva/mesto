export default class Card {
  constructor(name, photo, templateSelector, openPopup) {
    this._name = name;
    this._photo = photo;
    this._templateSelector = templateSelector;
    this._openPopup = openPopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);
    return cardElement;
  }

  _toggleLike(event) {
    event.target.classList.toggle("elements__like_active");
  }

  _removeElement() {
    this._element.remove();
  }

  _handleZoomPopup() {
    this._openPopup(this._name, this._photo);
  }

  _setEventListeners(likeElement, deleteElement, imageZoom) {
    imageZoom.addEventListener("click", () => this._handleZoomPopup());
    likeElement.addEventListener("click", this._toggleLike);
    deleteElement.addEventListener("click", () => this._removeElement());
  }

  generateCard() {
    this._element = this._getTemplate();
    const imageZoom = this._element.querySelector(".elements__photo");
    imageZoom.src = this._photo;
    imageZoom.alt = this._name;
    this._element.querySelector(".elements__name").textContent = this._name;
    const likeElement = this._element.querySelector(".elements__like");
    const deleteElement = this._element.querySelector(
      ".elements__delete-button"
    );
    this._setEventListeners(likeElement, deleteElement, imageZoom);
    return this._element;
  }
}
