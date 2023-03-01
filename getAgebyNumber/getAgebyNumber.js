const getAgeByNumber = (number) => {
  isInputNumber(number);
  isNumberHigherThanZero(number);
  let age;

  if (number < 10) {
    age = "young";
  } else if (number > 10 && number < 50) {
    age = "adult";
  } else {
    age = "old";
  }
  return age;
};

const isInputNumber = (input) => {
  if (typeof input !== "number") {
    throw new Error("You must type a number");
  }
};

const isNumberHigherThanZero = (input) => {
  if (input <= 0) {
    throw new Error("You must type number higher than 0");
  }
};

const result1 = getAgeByNumber(0);
console.log(result1);
