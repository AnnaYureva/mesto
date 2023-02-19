export default class Api {
  constructor({ url, headers }) {
    (this._url = url), (this._headers = headers);
  }
  //метод обработки ошибок
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //получить все карточки в виде массива методом GET
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  // добавить карточку методом POST

  addNewCard({ name, link }) {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({ name, link }),
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  // удалить карточку методом DELETE

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  // получить данные пользователя (GET)

  getUserData() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  //  заменить данные пользователя (PATCH)

  saveUserData(data) {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({ name: data.name, about: data.description }),
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  // “залайкать” карточку (PUT)
  addLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: "PUT",
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  //удалить лайк карточки (DELETE)

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: "DELETE",
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  //Сохранить аватар

  saveAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({ avatar: avatar.avatar }),
    }).then((res) => {
      return this._handleResponse(res);
    });
  }
}
