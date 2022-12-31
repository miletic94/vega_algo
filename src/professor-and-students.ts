// Zadatak Profesori i studenti

function numberOfPerfectSquaresInArrayOfNNumbers(n: number) {
  let squares = [];
  for (let i = 1; i < n + 1; i++) {
    if (Math.sqrt(i) % 1 === 0) squares.push(i);
  }
  return squares.length;
}

function numberOfStudentsSitting(numberOfStudents: number) {
  return (
    numberOfStudents - numberOfPerfectSquaresInArrayOfNNumbers(numberOfStudents)
  );
}

console.log(numberOfPerfectSquaresInArrayOfNNumbers(10000));
console.log(numberOfStudentsSitting(10000));
