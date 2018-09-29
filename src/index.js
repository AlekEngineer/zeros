module.exports = function getZerosCount(number) {
  let counter = 0;
      i = 5;
  while (number/i >= 1) {
    counter += Math.floor(number/i);
    i *= 5;
  }
return counter;
}
