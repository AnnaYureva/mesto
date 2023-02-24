(()=>{"use strict";var e={};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}e.p="";var r=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=n}var t,r;return t=e,(r=[{key:"appendItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){return e._renderer(t)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var u=function(){function e(t,n,r,o,i){var u=t.id,a=t.name,l=t.photo,c=t.myCard,s=t.isLiked,f=t.likesCount;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=a,this._photo=l,this._id=u,this._myCard=c,this._templateSelector=n,this._handleImageClick=r,this._handleCardRemove=o,this._isLikedByMe=s,this._likesCount=f,this._handleLike=i}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__item").cloneNode(!0)}},{key:"_removeElement",value:function(){var e=this;this._handleCardRemove(this._id).then((function(){e._element.remove(),e._element=null})).catch((function(e){console.log("Ошибка при удалении карточки: ".concat(e))}))}},{key:"_handleZoomPopup",value:function(){this._handleImageClick(this._name,this._photo)}},{key:"_setEventListeners",value:function(){var e=this;this._imageZoom.addEventListener("click",(function(){return e._handleZoomPopup()})),this._likeElement.addEventListener("click",(function(){return e._handleLikeClick()})),this._deleteElement.addEventListener("click",(function(){return e._removeElement()}))}},{key:"_handleLikesCount",value:function(){0===this._likesCount?this._likesCountElement.textContent="":this._likesCountElement.textContent=this._likesCount}},{key:"_handleLikeClick",value:function(){var e=this;this._handleLike(this._id,!this._isLikedByMe).then((function(t){e._likesCount=t,e._handleLikesCount(),e._isLikedByMe?e._likeElement.classList.remove("elements__like_active"):e._likeElement.classList.add("elements__like_active"),e._isLikedByMe=!e._isLikedByMe})).catch((function(e){console.log("Ошибка при установке лайка: ".concat(e))}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._imageZoom=this._element.querySelector(".elements__photo"),this._likeElement=this._element.querySelector(".elements__like"),this._deleteElement=this._element.querySelector(".elements__delete-button"),this._likesCountElement=this._element.querySelector(".elements__likes-count"),this._imageZoom.src=this._photo,this._imageZoom.alt=this._name,this._element.querySelector(".elements__name").textContent=this._name,this._isLikedByMe&&this._likeElement.classList.add("elements__like_active"),this._setEventListeners(),this._handleLikesCount(),this._myCard||(this._deleteElement.remove(),this._deleteElement=null),this._element}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-icon").addEventListener("click",(function(t){return e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target.closest(".popup__image")||t.target.closest(".popup__container")||e.close()}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmitForm=t,n._form=n._popup.querySelector(".popup__form"),n._inputs=Array.from(n._form.querySelectorAll(".popup__input")),n._saveButton=n._popup.querySelector(".popup__save-button"),n._saveButtonText=n._saveButton.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputs.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setSaveButtonText",value:function(){this._saveButton.textContent="Сохранение..."}},{key:"resetSaveButtonText",value:function(){this._saveButton.textContent=this._saveButtonText}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues())})),p(v(u.prototype),"setEventListeners",this).call(this)}},{key:"setInputValues",value:function(e){this._inputs.forEach((function(t){t.value=e[t.name]}))}},{key:"close",value:function(){p(v(u.prototype),"close",this).call(this),this._form.reset()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function w(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imageElement=t._popup.querySelector(".popup__image"),t._captionElement=t._popup.querySelector(".popup__figcaption"),t}return t=u,(n=[{key:"open",value:function(e,t){this._imageElement.src=t,this._imageElement.alt=e,this._captionElement.textContent=e,g(E(u.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}var P=function(){function e(t){var n=t.nameSelector,r=t.infoSelector,o=t.profileImageSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._infoElement=document.querySelector(r),this._profileImage=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{profileName:this._nameElement.textContent,profileInfo:this._infoElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.profileName,n=e.profileInfo;this._nameElement.textContent=t,this._infoElement.textContent=n}},{key:"setProfileImage",value:function(e){this._profileImage.src=e}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}var T=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"_request",value:function(e,t){return fetch(e,t).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return this._request("".concat(this._url,"/cards"),{headers:this._headers})}},{key:"addNewCard",value:function(e){var t=e.name,n=e.link;return this._request("".concat(this._url,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:t,link:n})})}},{key:"deleteCard",value:function(e){return this._request("".concat(this._url,"/cards/").concat(e),{headers:this._headers,method:"DELETE"})}},{key:"getUserData",value:function(){return this._request("".concat(this._url,"/users/me"),{headers:this._headers})}},{key:"saveUserData",value:function(e){return this._request("".concat(this._url,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.name,about:e.description})})}},{key:"addLike",value:function(e){return this._request("".concat(this._url,"/cards/").concat(e,"/likes"),{headers:this._headers,method:"PUT"})}},{key:"deleteLike",value:function(e){return this._request("".concat(this._url,"/cards/").concat(e,"/likes"),{headers:this._headers,method:"DELETE"})}},{key:"saveAvatar",value:function(e){return this._request("".concat(this._url,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.avatar})})}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==q(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=x(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function x(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function D(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(r);if(o){var n=N(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._popup.querySelector(".popup__form"),n._handleSubmitForm=t,n}return t=u,(n=[{key:"open",value:function(e,t){this._cardId=e,this._removeCardElement=t,R(N(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._cardId,e._removeCardElement)})),R(N(u.prototype),"setEventListeners",this).call(this)}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);e.p,e.p,e.p,e.p,e.p,e.p;var V={formSelector:".popup__form",inputSelector:".popup__input",submitButton:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},M=document.querySelector(".elements"),Z=document.querySelector(".profile__edit-button"),F=document.querySelector(".profile__add-button"),H=document.querySelector("#popup-edit-profile"),J=document.querySelector("#popup-add-card"),z=document.querySelector(".profile__image-edit"),$=document.querySelector("#popup-avatar-change");function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==G(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===G(o)?o:String(o)),r)}var o}var Q=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationConfig=t,this._form=n,this._inputs=Array.from(this._form.querySelectorAll(this._validationConfig.inputSelector)),this._button=this._form.querySelector(this._validationConfig.submitButton)}var t,n;return t=e,(n=[{key:"_setInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._validationConfig.inputErrorClass),t.classList.add(this._validationConfig.errorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._validationConfig.inputErrorClass),t.classList.remove(this._validationConfig.errorClass),t.textContent=""}},{key:"_validateInput",value:function(e){e.validity.valid?this._hideInputError(e):this._setInputError(e)}},{key:"_hasError",value:function(){return this._inputs.some((function(e){return!e.validity.valid}))}},{key:"toggleButton",value:function(){this._hasError()?this.disableButton():(this._button.classList.remove(this._validationConfig.inactiveButtonClass),this._button.disabled=!1)}},{key:"_setHandlers",value:function(){var e=this;this.toggleButton(),this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._validateInput(t),e.toggleButton()}))}))}},{key:"enableValidation",value:function(){this._setHandlers()}},{key:"disableButton",value:function(){this._button.classList.add(this._validationConfig.inactiveButtonClass),this._button.disabled=!0}}])&&K(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var X,Y,ee=new P({nameSelector:".profile__username",infoSelector:".profile__profession",profileImageSelector:".profile__image"}),te=new T({url:"https://mesto.nomoreparties.co/v1/cohort-57",headers:{authorization:"dde92b4e-039a-4bf6-9370-cec53bed9950","Content-Type":"application/json"}});Promise.all([te.getUserData(),te.getInitialCards()]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],u=o[1];Y=i._id,ee.setUserInfo({profileName:i.name,profileInfo:i.about}),ee.setProfileImage(i.avatar),(X=new r({items:u,renderer:function(e){var t=!1;e.likes.forEach((function(e){e._id===Y&&(t=!0)}));var n=re({id:e._id,name:e.name,photo:e.link,myCard:e.owner._id===Y,likesCount:e.likes.length,isLiked:t});X.appendItem(n)}},M)).renderItems()})).catch((function(e){console.log("Ошибка загрузки данных: ".concat(e))}));var ne=new C("#popup-image");ne.setEventListeners();var re=function(e){return new u(e,".template",(function(e,t){ne.open(e,t)}),(function(e){return new Promise((function(t){ae.open(e,t)}))}),(function(e,t){return t?te.addLike(e).then((function(e){return Promise.resolve(e.likes.length)})):te.deleteLike(e).then((function(e){return Promise.resolve(e.likes.length)}))})).generateCard()},oe=new d("#popup-avatar-change",(function(e){oe.setSaveButtonText(),te.saveAvatar({avatar:e.avatar}).then((function(e){ee.setProfileImage(e.avatar)})).then((function(){oe.close()})).catch((function(e){console.log("Ошибка при загрузке фото профиля: ".concat(e))})).finally((function(){return oe.resetSaveButtonText()}))}));oe.setEventListeners();var ie=new d("#popup-add-card",(function(e){ie.setSaveButtonText(),te.addNewCard({name:e.username,link:e.profession}).then((function(t){var n=re({id:t._id,name:e.username,photo:e.profession,myCard:!0,isLikedByMe:!1,likesCount:0});X.prependItem(n)})).then((function(){ie.close()})).catch((function(e){console.log("Ошибка при добавлении карточки: ".concat(e))})).finally((function(){return ie.resetSaveButtonText()}))}));ie.setEventListeners();var ue=new d("#popup-edit-profile",(function(e){ue.setSaveButtonText(),te.saveUserData({name:e.username,description:e.profession}).then((function(){ee.setUserInfo({profileName:e.username,profileInfo:e.profession})})).then((function(){ue.close()})).catch((function(e){console.log("Ошибка при редактировании профиля: ".concat(e))})).finally((function(){return ue.resetSaveButtonText()}))}));ue.setEventListeners();var ae=new U("#popup__delete-card",(function(e,t){te.deleteCard(e).then((function(){t(),ae.close()})).catch((function(e){console.log("Ошибка при удалении карточки: ".concat(e))}))}));ae.setEventListeners(),new Q(V,H.querySelector(".popup__form")).enableValidation();var le=new Q(V,J.querySelector(".popup__form"));le.enableValidation();var ce=new Q(V,$.querySelector(".popup__form"));ce.enableValidation(),Z.addEventListener("click",(function(){var e=ee.getUserInfo();ue.setInputValues({username:e.profileName,profession:e.profileInfo}),ue.open()})),F.addEventListener("click",(function(){ie.open(),le.disableButton()})),z.addEventListener("click",(function(){oe.open(),ce.disableButton()}))})();