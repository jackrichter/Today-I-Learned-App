// Template Literals
const text = "Lisabon is tbhe capital of Portugal";
const str = `the current fact is "${text}". It is ${calcFactAge(
  2015
)} years old. It is probably ${
  totalUpVotes > votesFalse ? "correct" : "not true"
}.`;
console.log(str);
