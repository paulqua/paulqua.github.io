class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi I am ${this.name} and my age is ${this.age}!`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  getGreeting() {
    return `Hi, my name is ${this.name}, my age is ${this.age} and my major is ${this.major}!`
  }
}

const me = new Student('Paul Qua', 28, 'Computer Science');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());
