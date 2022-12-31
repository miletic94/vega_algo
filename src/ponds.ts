// Zadatak Barice u putu

// TIME COMPLEXITY O(N) WHERE N IS i * j (column.length * raw.length)
// It's hard to tell from the task setting what should be done with
// some special cases, so we add them here in test cases.

const matrix = [
  [0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];
const matrix2 = [
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

// If it happens that ground is over puddle we throw error because it seems illogical
const matrix3 = [
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1],
];

const matrix4 = [
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1],
];

// It is not specified if rain drops fall first on the deepest pond or
// ponds are treated equally. For simplicity we treat them equally
const matrix5 = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

// It is not specified if this case of last row having 0 is possible.
// We treat it like it is impossible and if the ground was under everything
const matrix6 = [
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1],
];

const matrix7 = [
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

// If we have illogical ponds on the ends of the road
const matrix8 = [
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 0],
];

// Simple cute test case
const matrix9 = [
  [1, 0, 1],
  [1, 1, 1],
];

//SECOND SOLUTION - MORE COMPACT
function checkIfZeroOrOne(
  matrix: Array<Array<number>>,
  row: number,
  col: number
) {
  if (matrix[row][col] !== 0 && matrix[row][col] !== 1) {
    console.log(
      `Your input for this cell is ${matrix[row][col]}. It will be considered 1. To avoid unpredicted behavior, please use 0s and 1s.`
    );
  }
}
function isInputValid(matrix: Array<Array<number>>, row: number, col: number) {
  checkIfZeroOrOne(matrix, row, col);
  if (row - 1 >= 0 && matrix[row - 1][col] === 1) {
    throw Error(
      "It seems like cell of ground is standing on nothing: 1 can't be on top of 0"
    );
  }
  if (row + 1 >= matrix.length)
    throw Error(
      "This pond doesn't have the bottom. 0 can't be in the last row"
    );
}
function numberOfPonds(matrix: Array<Array<number>>) {
  const numberOfPonds = { value: 0 };
  for (let row = 0; row < matrix.length; row++) {
    let firstColumnZero = false;
    for (let col = 0; col < matrix[row].length; col++) {
      if (firstColumnZero) continue;
      if (matrix[row][col] !== 0) continue;
      isInputValid(matrix, row, col);
      if (matrix[row][col - 1] == undefined) {
        numberOfPonds.value = 0;
        firstColumnZero = true;
        continue;
      }
      if (matrix[row][col + 1] == undefined) {
        numberOfPonds.value = 0;
        continue;
      }
      numberOfPonds.value++;
    }
  }
  return numberOfPonds;
}

console.log(numberOfPonds(matrix));
console.log(numberOfPonds(matrix2));
// console.log(numberOfPonds(matrix3));
// console.log(numberOfPonds(matrix4));
console.log(numberOfPonds(matrix5));
// console.log(numberOfPonds(matrix6));
// console.log(numberOfPonds(matrix7));
// console.log(numberOfPonds(matrix8));
console.log(numberOfPonds(matrix9));
