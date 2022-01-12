const duplicateEvenNumbers = require("./1st");

const input = [2, 4, 1, 0, 3, -1, -1, -1];
const output = [2, 2, 4, 4, 1, 0, 0, 3];

test("expect output to be equal to input", () => {
  const result = duplicateEvenNumbers(input);
  expect(result).toEqual(output);
});
