/* ARRAYS */
const facts = ["Lisabon is tbhe capital of Portugal", 2015, true];
console.log(facts);
console.log(facts[1]);
console.log(facts[facts.length - 1]);

// Destructuring
const [text1, createdIn, isCorrext] = facts;
console.log(createdIn, isCorrext);

// Spreading
const newFact = [...facts, "sociaty"];
console.log(newFact);
