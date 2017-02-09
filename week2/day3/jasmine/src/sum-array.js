function sumArray (arrayOfNumbers) {
  var total = 0;

  arrayOfNumbers.forEach(function (num) {
    total += num;
  });

  return total;
}
