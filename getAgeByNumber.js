const GET_AGE_BY_NUMBER = (number) => {
  var age = null;

  if (number < 10) {
    age = "young";
  } else if (number > 10 && number < 50) {
    age = "adult";
  } else {
    age = "old";
  }

  console.log(age);
};
