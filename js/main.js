
function getRandomPositiveInteger (a, b) {

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

// Avatar

function randomAvatarImage(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return 'img/avatars/user' + '0' + Math.floor(result) + '.png';
};

randomAvatarImage(1, 10)

// Title

const title = 'Квартира';

function randomTitle() {
  return title
}

randomTitle (title);

// Address

const address = ['location.lat', 'location.lng'];
const message = address.join(', ');
console.log(message);

// Price

const price = 0;

function randomPrice(price) {
  return Math.random();
}

randomPrice(price);

// Type

function randomTypePlaces (a, b) {

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

let palace = 'palace';
let flat = 'flat';
let house = 'house';
let bungalow = 'bungalow';
let hotel = 'hotel';


const places = [palace, flat, house, bungalow, hotel];

places[randomTypePlaces(0,4)];

// Rooms

const rooms = 0;

function randomPrice(rooms) {
  return Math.random();
}

randomPrice(rooms);

// Checkin

function randomCheckIn (a, b) {

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

let midday = '12:00';
let oneHours = '13:00';
let twoHours = '14:00';


const time = ['12:00', '13:00', '14:00'];

time[randomCheckIn(0,2)];

// Checkout

function randomCheckOut (a, b) {

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

let midday = '12:00';
let oneHours = '13:00';
let twoHours = '14:00';


const time = ['12:00', '13:00', '14:00'];

time[randomCheckOut(0,2)];

// Features

function randomFeatures (a, b) {

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

let wifi = 'wifi';
let dishwasher = 'dishwasher';
let parking = 'parking';
let washer = 'washer';
let elevator = 'elevator';
let conditioner = 'conditioner';


const features = [wifi, dishwasher, parking, washer, elevator, conditioner];

features[randomFeatures(0,5)];

// Description

const description = 'Шикарная квартира';

function randomDescription() {
  return description
}

randomDescription (description);


const createWizardNotice = () => {

  const notice = {
    author: ({
      avatar: randomAvatarImage(),
    }),
    offer: ({
      title: randomTitle(),
      address: ',',
      price: randomPrice(),
      type: randomTypePlaces(),
      rooms: randomRooms(),
      guests: randomGuests(),
      checkin: randomCheckIn(),
      checkout: randomCheckOut(),
      features: randomFeatures(),
      description: randomDescription(),
      photos: randomPhotos(),
    }),
    location: randomLocation(),

    setAddress() {
      this.offer.address = setAddress(this.location);
    },
  };

  notice.setAddress();
  return notice;
};


