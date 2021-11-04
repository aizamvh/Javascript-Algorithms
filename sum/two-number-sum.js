const arr = [3, 5, 4, -4, 8, 11, 1, -1, 6]

// 3 ways to solve this

class twoNumberSum {

  
  first(arr, sum) {

      for(let num of arr) {
        const remainder = sum - num // -1
        if (arr.includes(remainder) && remainder !== sum / 2) {
          return [remainder, num]
        }
      }
   
  }
  /**
   * @param {any[]} arr
   * @param {number} num
   */
  second(arr, num) {
    for(let [i, val] of arr.entries()) {
      for(let [j, val] of arr.entries()) {
        console.log(arr[i] + arr[j + 1]);
      }
    }
  }

}

const obj = {}
/**
 * @param {number[]} arr
 */

const twoNumSum = new twoNumberSum()
twoNumSum.second(arr, 10)

