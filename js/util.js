function getRandomPositiveInteger (min, max) {

  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomPositiveFloat (min, max, digits) {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

// Avatar

function randomAvatarImage() {
  const randomImage = getRandomPositiveInteger(1,10);
  return `img/avatars/users0${randomImage}.png`;
}

// Title

const randomTitle = () => {
  const TITLES = ['title','title1','title2','title3','title4', 'title5','title6','title7','title8','title9'];
  const randomNotice = getRandomPositiveInteger(0,TITLES.length - 1);
  return TITLES[randomNotice];
};

// Address

const addressLatMin = 35.65000;
const addressLatMax = 35.70000;
const addressLngMin = 139.70000;
const addressLngMax = 139.80000;


const setAddress = () => {
  const addressLat = getRandomPositiveFloat(addressLatMin, addressLatMax, 5);
  const addressLng = getRandomPositiveFloat(addressLngMin, addressLngMax, 5);
  const first = addressLat;
  const second = addressLng;
  return `${first}, ${second}`;
};


// Price

const randomPrice = () => {
  const randomIndex = getRandomPositiveInteger(5, 25);
  return randomIndex;
};

// Type

const randomTypePlaces = () => {
  const TYPE_PLACES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  const randomIndex = getRandomPositiveInteger(0, TYPE_PLACES.length - 1);
  return TYPE_PLACES[randomIndex];
};

// Rooms

const randomRooms = () => {
  const randomIndex = getRandomPositiveInteger(1, 5);
  return randomIndex;
};

// Guests
const randomGuests = () => {
  const randomIndex = getRandomPositiveInteger(1, 10);
  return randomIndex;
};

// Checkin

const randomCheckIn = () => {
  const TIMES_IN = ['12:00', '13:00', '14:00'];
  const randomIndex = getRandomPositiveInteger(0, TIMES_IN.length - 1);
  return TIMES_IN[randomIndex];
};

// Checkout

const randomCheckOut = () => {
  const TIMES_OUT = ['12:00', '13:00', '14:00'];
  const randomIndex = getRandomPositiveInteger(0, TIMES_OUT.length - 1);
  return TIMES_OUT[randomIndex];
};

// Features

const randomFeatures = () => {
  const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const randomIndex = getRandomPositiveInteger(0, FEATURES.length - 1);
  return FEATURES[randomIndex];
};

// Description

const randomDescription = () => {
  const DESCRIPTIONS = ['Просторное', 'Чистое', 'Удобное', 'Светлое', 'С ремонтом', 'Без ремонта'];
  const randomIndex = getRandomPositiveInteger(0, DESCRIPTIONS.length - 1);
  return DESCRIPTIONS[randomIndex];
};

// Photos

const randomPhotos = () => {
  const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
  const randomIndex = getRandomPositiveInteger(0, PHOTOS.length - 1);
  return PHOTOS[randomIndex];
};

// Location

const locationLatMin = 35.65000;
const locationLatMax = 35.70000;
const locationLngMin = 139.70000;
const locationLngMax = 139.80000;

const randomLocation = () => {
  const locationLat = getRandomPositiveFloat(locationLatMin, locationLatMax, 5);
  const locationLng = getRandomPositiveFloat(locationLngMin, locationLngMax, 5);
  return location = {lat: locationLat, lng: locationLng};
};

export {randomAvatarImage, randomTitle, setAddress, randomPrice, randomTypePlaces, randomRooms, randomGuests,  randomCheckIn,
  randomCheckOut, randomFeatures, randomDescription, randomPhotos, randomLocation};

