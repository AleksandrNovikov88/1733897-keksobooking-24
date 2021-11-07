const createCardElement = (notice) => {

  const cardTemplate = document.querySelector('#card').content;
  const newCardTemplate = cardTemplate.querySelector('.popup');
  const cardElement = newCardTemplate.cloneNode(true);

  const popupTitle = cardElement.querySelector('.popup__title');
  if (notice.offer && notice.offer.title) {
    popupTitle.textContent = notice.offer.title;
  } else {
    hideElement(popupTitle);
  };

  const popupTextAddress = cardElement.querySelector('.popup__text--address');
  if (notice.offer && notice.offer.address) {
    popupTextAddress.textContent = notice.offer.address;
  } else {
    hideElement(popupTextAddress);
  };

  const popupTextPrice = cardElement.querySelector('.popup__text--price');
  if (notice.offer && notice.offer.price) {
    popupTextPrice.textContent = notice.offer.price;
  } else {
    hideElement(popupTextPrice);
  };

  const popupType = cardElement.querySelector('.popup__type');
  if (notice.offer && notice.offer.type) {
    popupType.textContent = notice.offer.type;
  } else {
    hideElement(popupType);
  };
  switch (popupType) {
    case 'palace':
      popupType.textContent = 'Дворец';
      break;
    case 'flat':
      popupType.textContent = 'Квартира';
      break;
    case 'house':
      popupType.textContent = 'Дом';
      break;
    case 'bungalow':
      popupType.textContent = 'Бунгало';
      break;
    case 'hotel':
      popupType.textContent = 'Отель';
      break;
  };

  const popupTextCapacity = cardElement.querySelector('.popup__text--capacity');
  if (notice.offer && notice.offer.rooms, notice.offer && notice.offer.guests) {
    notice.offer.rooms + 'комнаты для' + notice.offer.guests + 'гостей';
  } else {
    hideElement(popupTextCapacity);
  };

  const popupTextTime = cardElement.querySelector('.popup__text--time');
  if (notice.offer && notice.offer.checkin, notice.offer && notice.offer.checkout) {
    'Заезд после' + notice.offer.checkin + ',' + 'выезд до' + notice.offer.checkout;
  } else {
    hideElement(popupTextTime);
  };

  const popupFeatures = cardElement.querySelector('.popup__features');
  if (notice.offer && notice.offer.features) {
    popupFeatures.textContent = notice.offer.features;
  } else {
    hideElement(popupFeatures);
  };

  const popupDescription = cardElement.querySelector('.popup__description');
  if (notice.offer && notice.offer.description) {
    popupDescription.textContent = notice.offer.description;
  } else {
    hideElement(popupDescription);
  };

  const popupPhoto = cardElement.querySelector('.popup__photo');
  if (notice.offer && notice.offer.photos) {
    popupPhoto.src = notice.offer.photos;
  } else {
    hideElement(popupPhoto);
  };

  const popupAvatar = cardElement.querySelector('.popup__avatar');
  if (notice.author && notice.author.avatar) {
    popupPhoto.src = notice.author.avatar;
  } else {
    hideElement(popupAvatar);
  };
};


createCardElement();

export {createCardElement};
