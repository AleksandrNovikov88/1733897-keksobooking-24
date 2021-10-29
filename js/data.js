import {randomAvatarImage, randomTitle, setAddress, randomPrice, randomTypePlaces, randomRooms, randomCheckIn,
  randomCheckOut, randomFeatures, randomDescription, randomPhotos, randomLocation} from './util.js';

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

export {createWizardNotice};
