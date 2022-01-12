// given an array of numbers,
// replace each even number
// with 2 of the same

const duplicateEvenNumbers = (arr) => {
  let end = arr.length;
  let i = 4;
  while (i >= 0) {
    if (arr[i] % 2 === 0) {
      end--;
      arr[end] = arr[i];
      end--;
      arr[end] = arr[i];
    } else {
      end--;
      arr[end] = arr[i];
    }
    i--;
  }
  return arr;
};

module.exports = duplicateEvenNumbers;
