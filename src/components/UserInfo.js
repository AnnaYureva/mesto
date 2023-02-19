export default class UserInfo {
  constructor({ nameSelector, infoSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._infoElement = document.querySelector(infoSelector);
  }

  getUserInfo() {
    return {
      profileName: this._nameElement.textContent,
      profileInfo: this._infoElement.textContent,
    };
  }

  setUserInfo({ profileName, profileInfo }) {
    this._nameElement.textContent = profileName;
    this._infoElement.textContent = profileInfo;
  }
}
