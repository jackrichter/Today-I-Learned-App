/* Functions */
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) {
    return age;
  } else {
    return `Impossible year. The year needs to be less or equal to ${currentYear}.`;
  }
}

console.log(calcFactAge(2016));
console.log(calcFactAge(2037));

const calcFactAgent2 = (year) =>
  new Date().getFullYear() >= year
    ? new Date().getFullYear() - year
    : `Impossible year. The year needs to be less or equal to ${new Date().getFullYear()}.`;

console.log(calcFactAgent2(2016));
console.log(calcFactAgent2(2029));
