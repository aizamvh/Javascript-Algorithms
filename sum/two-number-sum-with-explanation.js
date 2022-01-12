// Given an array A[] and a number x, check for pair in A[] with sum as x

const arr = [3, 5, 4, -4, 8, 11, 1, -1, 6]

// 3 ways to solve this

class twoNumberSum {

  /**
   * @param {any[]} arr
   * @param {number} targetSum
   */
  firstMethod(arr, targetSum) {
      for(let [key, num] of arr.entries()) {
        const remainder = targetSum - num // -1
        if (arr.indexOf(remainder)!== -1 &&  arr.indexOf(remainder)!== key) {
          return [remainder, num]
        }
      }
   return false;
  }
  /**
   * @param {any[]} arr
   * @param {number} targetSum
   */
  secondMethod(arr, targetSum) {
    for(let i =0; i<arr.length; i++) {

    }
  }

}

const twoNumSum = new twoNumberSum()
twoNumSum.secondMethod(arr, 10)


// Problem

/* given a number (11) 
  determine if the sum of a pair of values (?,?)
  in the given array [1, 9, 10, 32, 5, 4, 12, 6, 7, 2]
  equals the number (11)
  right answer: 5 + 6 = 11 (Correct!)
  wrong answer: 1 + 9 = 10 (wrong)
*/

/* --------------------------------------First method--------------------------------------
  Psuedo Code | Two For Loops (nested)
    targetSum = 11 
    arr = [1, 9, 10, 32, 5, 4, 12, 6, 7, 2] 
  --------------------------------------Tracing Steps---------------------------------------
  Step1: iterate through the array (for loop) [i]
    Step2: store the result of subtraction of value at current Index [i] from targetSum (remainder = targetSum - arr[i])
      Step3: using array method (includes) determine if the remainder exists in the array (if condition)
*/

/* --------------------------------------Second method--------------------------------------
  Psuedo Code | Array Method .includes or .indexOf
    targetSum = 11 
    arr = [1, 9, 10, 32, 5, 4, 12, 6, 7, 2] 
  --------------------------------------Tracing Steps---------------------------------------
  Step1: iterate through the array (for loop) [i]
    Step2[variable]: store the result of subtraction of value at array's current Index [i] from targetSum (remainder = targetSum - arr[i]) we now know what number we need
    Step3[if]: using array method (includes) try to find the other pair and determine if the remainder exists in the array
    step3.1[if]: && the index of that other pair must not be equal to the index of the value at current index *more info on the bottom about this
      step4: [exists] sum of the current value and the other value we found using Array.includes equalts the targetSum
      step5: [doesn't exist] go to next iteration
        step6?: if the loop finishes without finding the value, execute the return statement that resides outside the for-loop block
*/


// step 3.1
// TL;DR: we only want to add unique values (not at the same index)
// if the given targetSum was 10 and the given array was [5, 6, 2, 4, 9]
// by executing array.includes on first iteration of for loop, we get the value at index[1] => which is 5
// and 5 + 5 = 10, and we have found our targetSum and we'll get no errors but we have added the same array value to itself