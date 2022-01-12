// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = (str) => {
  const arr = str.split("");
  const reversedStr = arr.reverse().join("");
  return reversedStr;
};

const str = "abcd"; // dcba
const reverse2 = (str) => {
  let reversed = "";

  for (let char of str) {
    console.log(char + reversed);
    reversed = char + reversed;
  }

  return reversed;
};

const reverse3 = (str) => {
  debugger;
  const reversed = str
    .split("")
    .reduce((prev, character) => character + prev, "");
  return reversed;
};

reverse3("asdf");

module.exports = { reverse, reverse2, reverse3 };
