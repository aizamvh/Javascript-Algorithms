const testArr = [10, 22, 5, 75, 65, 80];

/**
 * @param {number[]} arr
 * @param {number} k
 */
const calculateMaxProfit = (arr, k) => {
  let steps = [];
  for (let i = 0; i < arr.length - 2; i++) {

    if(steps.length === k) break;

    for (let j = i + 1; j < arr.length - 2; j++) {
      if(-(arr[i] - arr[j]) > 0) {
        steps[i] ? [...steps[i], arr[j]] : [arr[j]];
      }
    }
  }
  console.log(steps);
}

const profit = calculateMaxProfit(testArr)

console.log(profit);


