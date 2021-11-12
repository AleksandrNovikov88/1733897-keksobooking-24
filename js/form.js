const button = document.querySelector('.ad-form__submit');
const roomNumberInput = document.querySelector('#room_number');
const roomNumber = roomNumberInput.getElementsByTagName('option');
const capacityInput = document.querySelector('#capacity');
const capacity = capacityInput.getElementsByTagName('option');


const onInputCapacity = function (evt) {
  if (capacity(evt.target.value) > roomNumber(evt.target.value)) {
    capacity.setCustomValidity('Выберите соответствующее гостям количество комнат');
  } else {
    capacity.setCustomValidity('');
  }
};

const onButton = button.addEventListener('submit', function (event) {
  event.preventDefault();
});

onInputCapacity();
onButton();

export {roomNumber, capacity};
