

  const findSubsequence = (arr, subsequence) => {
    let subIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if(subsequence[subIndex] === arr[i]) {
        subIndex++
      }
      if(subIndex === subsequence.length) return true;
    }
    return false;
  }




const arr1 = [5, 1, 22, 25, 6, -1, 8, 10]
const subsequence1 = [1, 6, -1, 10]
const arr2 = [6, 1, 7, 25, -1, -1, 8, 11]
const subsequence2 = [6, 7, -1, 11]

console.log(findSubsequence(arr1, subsequence1)); 
console.log(findSubsequence(arr2, subsequence2));