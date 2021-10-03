// Функция, возвращающая случайное целое число из переданного диапазона, включительно

function getRandomIntInclusive(min, max) {
  if (min >= 0, max > min) {
    return Math.round(Math.random() * (max - min)) + min;
  }
}

getRandomIntInclusive();

// С плавающей точкой из переданного диапазона включительно

function getRandomArbitrary(min, max) {
  if (min >= 0, max > min) {
    const num = min + (Math.random() * (max - min));
    return (num.toFixed(2));
  }
}

getRandomArbitrary();
