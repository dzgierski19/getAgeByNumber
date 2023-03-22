const getAgeByNumber = (input) => {
  return isNumberLessOrEqual10(input);
};

const isNumberLessOrEqual10 = (input) => {
  isInputNumber(input);
  isNumberHigherThanZero(input);
  if (input < 10) {
    return "young";
  }
  return isNumberLessThan50(input);
};

const isNumberLessThan50 = (input) => {
  if (input < 50) {
    return "adult";
  }
  return "old";
};

const isInputNumber = (input) => {
  if (typeof input !== "number" && isNaN(input)) {
    throw new Error("You must type a number");
  }
};

const isNumberHigherThanZero = (input) => {
  if (input <= 0) {
    throw new Error("You must type number higher than 0");
  }
};

const result1 = getAgeByNumber(1.5);
console.log(result1);
