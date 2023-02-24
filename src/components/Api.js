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
  // метод запроса с проверкой ответа
  _request(url, options) {
    return fetch(url, options).then(this._handleResponse);
  }

  //получить все карточки в виде массива методом GET
  getInitialCards() {
    return this._request(`${this._url}/cards`, {
      headers: this._headers,
    });
  }

  // добавить карточку методом POST

  addNewCard({ name, link }) {
    return this._request(`${this._url}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({ name, link }),
    });
  }

  // удалить карточку методом DELETE

  deleteCard(cardId) {
    return this._request(`${this._url}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    });
  }

  // получить данные пользователя (GET)

  getUserData() {
    return this._request(`${this._url}/users/me`, {
      headers: this._headers,
    });
  }

  //  заменить данные пользователя (PATCH)

  saveUserData(data) {
    return this._request(`${this._url}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({ name: data.name, about: data.description }),
    });
  }

  // “залайкать” карточку (PUT)
  addLike(cardId) {
    return this._request(`${this._url}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: "PUT",
    });
  }

  //удалить лайк карточки (DELETE)

  deleteLike(cardId) {
    return this._request(`${this._url}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: "DELETE",
    });
  }

  //Сохранить аватар

  saveAvatar(avatar) {
    return this._request(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({ avatar: avatar.avatar }),
    });
  }
}
