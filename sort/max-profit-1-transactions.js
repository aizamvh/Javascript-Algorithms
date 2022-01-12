const arr = [1, 7, 9, 10, 970, 15, 50, 430]

/**
 * @param {number[]} arr
 */

// we can sort the array

const calcProfit = (arr) => {
  let maxProfit = 0;
  for(let i = 0; i< arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j] - arr[i] > maxProfit) {
        maxProfit = arr[j] - arr[i]
      }
    }
  }
  console.log(maxProfit);
}

calcProfit(arr);