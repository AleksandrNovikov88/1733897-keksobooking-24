// Функция, возвращающая случайное целое число из переданного диапазона, включительно

function getRandomIntInclusive(min, max) {
  if (min >= 0, max > min) {
    min = Math.ceil(min);
    max = Math.round(max);
    return Math.round(Math.random() * (max - min)) + min;
  }
}

getRandomIntInclusive();

// С плавающей точкой из переданного диапазона включительно

function getRandomArbitrary(min, max, numberAfterPoint) {
  if (min >= 0, max > min) {
    return Math.random() * (max - min + 1) + min;
  }
}

getRandomArbitrary();
