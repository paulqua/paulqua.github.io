const square = function (x) {
  return x * x;
};

const squareArrow = (x) => {
  return x * x;
};

console.log(squareArrow(8));

const getFirstName = (name) => {
  return name.split(' ')[0];
};

const getFirstNames = (name) => name.split(' ')[0];

console.log(getFirstNames('Paul Qua'));
