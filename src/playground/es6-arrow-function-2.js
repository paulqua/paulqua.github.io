// const user = {
//   name: 'Paul',
//   cities: ['Tullahoma', 'San Diego', 'Dinuba'],
//   PrintPlacesLived() {
//     return this.cities.map((city) => this.name + ' has lived in ' + city);
//
//
//     console.log(this.name);
//     console.log(this.cities);
//
//
//   }
// };
//
// console.log(user.PrintPlacesLived());

const multiplier = {
  numbers: [1, 5, 10],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  }
};

console.log(multiplier.multiply());
