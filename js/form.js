const adForm = document.querySelector('.ad-form');
const titleInput = adForm.querySelector('#title');
const MIN_LENGTH = 30;
const MAX_LENGTH = 100;


titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;

  if (valueLength < MIN_LENGTH) {
    titleInput.setCustomValidity(`Ещё ${  MIN_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_LENGTH } симв.`);
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
});


const priceInput = adForm.querySelector('#price');
const MAX_PRICE = 1000000;

priceInput.addEventListener('input', () => {
  const valuePrice = priceInput.value;

  if (valuePrice < MAX_PRICE) {
    priceInput.setCustomValidity('');
  } else {
    priceInput.setCustomValidity(`Максимальная цена за ночь ${MAX_PRICE}`);
  }

  priceInput.reportValidity();
});

const roomsNumberSelect = adForm.querySelector('#room_number');
const capacitySelect = adForm.querySelector('#capacity');


const onRoomsNumberSelect = () => {
  const seatingCapacityOptions = capacitySelect.querySelectorAll('option');
  const roomsNumber = Number(roomsNumberSelect.value);
  seatingCapacityOptions.forEach((option) => {
    option.disabled = true;
  });
  const roomValues = 0;
  roomValues[roomsNumber].forEach((seatsAmount) => {
    seatingCapacityOptions.forEach((option) => {
      if (Number(option.value) === seatsAmount) {
        option.disabled = false;
      }
    });
    if (!roomValues[roomsNumber].includes(Number(capacitySelect.value))) {
      const maxCapacity = roomValues[roomsNumber][roomValues[roomsNumber].length - 1];
      capacitySelect.value = maxCapacity;
    }
  });
};

roomsNumberSelect.addEventListener('change', (evt) => {
  const roomsNumber = Number(evt.target.value);
  onRoomsNumberSelect(roomsNumber);
});
