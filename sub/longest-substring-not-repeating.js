const string = "abcdabcdefabcdefghijklabcdefgh"

const nonRepeatingSubString = (string) => {
  let longestSubString = ""
  let subStringTemp = ""
  for (let char of string) {
    if (subStringTemp.indexOf(char) === -1) {
      subStringTemp += char
    } else {
      if (subStringTemp.length > longestSubString.length) {
        longestSubString = subStringTemp
      }
    }
  }
  console.log(longestSubString);
}
/**
 * @param {string} str
 */
const nonRepeatingSubString2 = (str) => { //"abcdabcdefabcdefghijklabcdefgh"

  let newSet = new Set()
  let i = 0, j = 0, max = 0
  while(i < str.length) {
    let char = str.charAt(i)
    while(newSet.has(char)) {
      newSet.delete(char);
      j++
    }
    newSet.add(char)
    max = Math.max(max, i - j + 1)
    i++
  }
  console.log([...newSet].join(''));
  return max;
}
const result = nonRepeatingSubString2(string)

console.log(result);
