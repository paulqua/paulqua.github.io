'use strict';

var app = {
  title1: 'True Random Number Generator',
  subtitle1: 'Type the information below and click generate',
  title2: 'Pseudorandom Number Generator',
  subtitle2: 'Click the generate button to get your random number',
  numbers: [],
  random: []
};

var letters = {
  a: 14,
  b: 83,
  c: 5,
  d: 9,
  e: 51,
  f: 48,
  g: 11,
  h: 77,
  i: 52,
  j: 4,
  k: 1,
  l: 91,
  m: 22,
  n: 7,
  o: 42,
  p: 28,
  q: 79,
  r: 99,
  s: 44,
  t: 85,
  u: 42,
  v: 18,
  w: 55,
  x: 33,
  y: 39,
  z: 66
};

// if (option) {
//   app.options.push(option);
//   e.target.elements.option.value = '';
//   renderListApp();
// }

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var shirtColor = e.target.elements.shirtColor.value;
  var age = e.target.elements.age.value;
  var name = e.target.elements.name.value;
  if (shirtColor, age, name) {
    if (isNaN(age) === false) {
      app.numbers.push(shirt(shirtColor) + ages(age) + names(name));
      renderListApp();
    } else {
      app.numbers.push('Age is not a valid number');
      renderListApp();
    }
  }
};

var shirt = function shirt(shirtColor) {
  var shirtLower = shirtColor.toLowerCase();
  console.log(shirtLower);
  return letters[shirtLower.charAt(0)] * 3;
};

var ages = function ages(age) {
  if (isNaN(age) === false) {
    return age * 4;
  }
};

var names = function names(name) {
  var nameLower = name.toLowerCase();
  return letters[nameLower.charAt(0)] * 5;
};

var pseudoRandom = function pseudoRandom() {
  app.random.push(Math.floor(Math.random() * 10));
  renderListApp();
};

var renderListApp = function renderListApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title1
    ),
    app.subtitle1 && React.createElement(
      'p',
      null,
      app.subtitle1
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'shirtColor', placeholder: 'Shirt Color' }),
      React.createElement('input', { type: 'text', name: 'age', placeholder: 'Age' }),
      React.createElement('input', { type: 'text', name: 'name', placeholder: 'Name' }),
      React.createElement(
        'button',
        null,
        'Generate'
      )
    ),
    app.numbers.length >= 1 && React.createElement(
      'h2',
      null,
      app.numbers + ','
    ),
    React.createElement(
      'h1',
      null,
      app.title2
    ),
    React.createElement(
      'p',
      null,
      app.subtitle2
    ),
    React.createElement(
      'button',
      { onClick: pseudoRandom },
      'Generate'
    ),
    app.random.length >= 1 && React.createElement(
      'h2',
      null,
      app.random + ','
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderListApp();
