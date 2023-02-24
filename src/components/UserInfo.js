export default class UserInfo {
  constructor({ nameSelector, infoSelector, profileImageSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._infoElement = document.querySelector(infoSelector);
    this._profileImage = document.querySelector(profileImageSelector);
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

  setProfileImage(profileImageLink) {
    this._profileImage.src = profileImageLink;
  }
}
