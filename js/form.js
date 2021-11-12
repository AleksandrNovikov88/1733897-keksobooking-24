const adForm = document.querySelector('.ad-form');
const titleInput = adForm.querySelector('#title');
const minlength = 30;
const maxlength = 100;
const minlengthInput = Number(titleInput.minlength);
const maxlengthInput = Number(titleInput.maxlength);


const titleValid = () => {
  titleInput.addEventListener('input', function (event) {
  if (titleInput.textContent = '', minlengthInput < minlength, maxlengthInput > maxlength) {

    }
  });
};

const priceInput = adForm.querySelector('#price');
const maxPrice = 1000000;

const priceValid = () => {
  if (Number(priceInput.value) > maxPrice) {

  }
};


const roomsNumberSelect = adForm.querySelector('#room_number');
const capacitySelect = adForm.querySelector('#capacity');

const onRoomsNumberSelect = () => {
  const seatingCapacityOptions = capacitySelect.querySelectorAll('option');
  const roomsNumber =  Number(roomsNumberSelect.value);
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

titleValid();
priceValid();
onRoomsNumberSelect();
