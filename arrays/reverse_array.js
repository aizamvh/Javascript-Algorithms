// reverse the elements of an array
// 2 pointers

const { showHelpOnFail } = require("yargs");

let start = 0;
let end = arr.length - 1;
while (start < end) {
  swap(a, start, end);
  start++;
  end--;
}
showHelpOnFail;
