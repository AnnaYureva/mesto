export default class Card {
  constructor(name, photo, template) {
    this._name = name;
    this._photo = photo;
    this._template = template;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(".template")
      .content.querySelector(".elements__item")
      .cloneNode(true);
    return cardElement;
  }

  _toggleLike(likeElement) {
    likeElement.target.classList.toggle("elements__like_active");
  }

  _removeElement(deleteElement) {
    const itemElement = deleteElement.target.closest(".elements__item");
    itemElement.remove();
  }

  _handleZoomPopup() {
    const popupZoom = document.querySelector("#popup-image");
    popupZoom.querySelector(".popup__image").src = this._photo;
    document.querySelector(".popup__image").alt = this._name;
    document.querySelector(".popup__figcaption").textContent = this._name;
  }

  _setEventListeners(likeElement, deleteElement, imageZoom) {
    imageZoom.addEventListener("click", () => this._handleZoomPopup());
    likeElement.addEventListener("click", this._toggleLike);
    deleteElement.addEventListener("click", this._removeElement);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".elements__photo").src = this._photo;
    this._element.querySelector(".elements__photo").alt = this._name;
    this._element.querySelector(".elements__name").textContent = this._name;
    const likeElement = this._element.querySelector(".elements__like");
    const deleteElement = this._element.querySelector(
      ".elements__delete-button"
    );
    const imageZoom = this._element.querySelector(".elements__photo");
    this._setEventListeners(likeElement, deleteElement, imageZoom);
    return this._element;
  }
}
