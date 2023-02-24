export default class Card {
  constructor(
    { id, name, photo, myCard, isLiked, likesCount },
    templateSelector,
    handleImageClick,
    handleCardRemove,
    handleLike
  ) {
    this._name = name;
    this._photo = photo;
    this._id = id;
    this._myCard = myCard;
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
    this._handleCardRemove = handleCardRemove;
    this._isLikedByMe = isLiked;
    this._likesCount = likesCount;
    this._handleLike = handleLike;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);
    return cardElement;
  }

  _removeElement() {
    this._handleCardRemove(this._id)
      .then(() => {
        this._element.remove();
        this._element = null;
      })
      .catch((err) => {
        console.log(`Ошибка при удалении карточки: ${err}`);
      });
  }

  _handleZoomPopup() {
    this._handleImageClick(this._name, this._photo);
  }

  _setEventListeners() {
    this._imageZoom.addEventListener("click", () => this._handleZoomPopup());
    this._likeElement.addEventListener("click", () => this._handleLikeClick());
    this._deleteElement.addEventListener("click", () => this._removeElement());
  }

  _handleLikesCount() {
    if (this._likesCount === 0) {
      this._likesCountElement.textContent = "";
    } else {
      this._likesCountElement.textContent = this._likesCount;
    }
  }

  _handleLikeClick() {
    this._handleLike(this._id, !this._isLikedByMe)
      .then((likesCount) => {
        this._likesCount = likesCount;
        this._handleLikesCount();
        if (this._isLikedByMe) {
          this._likeElement.classList.remove("elements__like_active");
        } else {
          this._likeElement.classList.add("elements__like_active");
        }
        this._isLikedByMe = !this._isLikedByMe;
      })
      .catch((err) => {
        console.log(`Ошибка при установке лайка: ${err}`);
      });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._imageZoom = this._element.querySelector(".elements__photo");
    this._likeElement = this._element.querySelector(".elements__like");
    this._deleteElement = this._element.querySelector(
      ".elements__delete-button"
    );
    this._likesCountElement = this._element.querySelector(
      ".elements__likes-count"
    );
    this._imageZoom.src = this._photo;
    this._imageZoom.alt = this._name;
    this._element.querySelector(".elements__name").textContent = this._name;
    if (this._isLikedByMe) {
      this._likeElement.classList.add("elements__like_active");
    }
    this._setEventListeners();
    this._handleLikesCount();
    if (!this._myCard) {
      this._deleteElement.remove();
      this._deleteElement = null;
    }

    return this._element;
  }
}
