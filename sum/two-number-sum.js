// Given an array A[] and a number x, check for pair in A[] that sum up to x
// what to return if the value is not found?

const arr = [3, 5, 4, -4, 8, 11, 1, -1, 6];

class twoNumberSum {
  firstMethod(arr, target) {
    for (let num of arr) {
      const remainder = target - num; // -1
      if (arr.includes(remainder) && remainder !== target / 2) {
        return [remainder, num];
      }
    }
  }
  //TODO
  secondMethod(arr, target) {
    for (let [i, val] of arr.entries()) {
      for (let [j, val] of arr.entries()) {
        console.log(arr[i] + arr[j + 1]);
      }
    }
  }

  //! array is sorted
  // 2 pointer
  thirdMethod(arr, target) {
    let startPointer = 0;
    let endPointer = arr.length;
    while (startPointer < endPointer) {
      let sum = arr[startPointer] + arr[endPointer];
      if (sum < target) {
        startPointer++;
      } else if (sum > target) {
        endPointer--;
      } else {
        return sum;
      }
    }
    return null;
  }
}

const twoNumSum = new twoNumberSum();
twoNumSum.firstMethod(arr, 10);
