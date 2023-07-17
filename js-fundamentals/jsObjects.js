/* Objects */
const factObj = {
  text: "Lisabon is tbhe capital of Portugal",
  category: "society",
  createdIn: 2015,
  isCorrect: true,

  createSumary: function () {
    return `The fact ${
      this.text
    } is from the category ${this.category.toUpperCase()}`;
  },
};

console.log(factObj.category);

// Create multiple variables using the structure (object or array)
const { category, isCorrect } = factObj;

console.log(isCorrect);
console.log(factObj.createSumary());
