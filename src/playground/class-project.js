const app = {
  main: 'How Can a Computer Generate a Random Number and Why Does it Matter?',
  title1: 'True Random Number Generator',
  subtitle1: 'Type the information below and click generate',
  title2: 'Pseudorandom Number Generator',
  subtitle2: 'Click the generate button to get your random number',
  numbers: [0],
  random: []
};

const letters = {
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

const alreadyExists = (ranNum) => {
  const arrayLength = app.numbers.length;
  for (var i = 0; i < arrayLength; i++) {
    if (ranNum === app.numbers[i]) {
      return true;
    };
  };
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const shirtColor = e.target.elements.shirtColor.value;
  const age = e.target.elements.age.value;
  const name = e.target.elements.name.value;
  if (shirtColor, age, name) {
    if (isNaN(age) === false) {
      const ranNum = shirt(shirtColor) + ages(age) + names(name);
      if (alreadyExists(ranNum)) {
        console.log('equals true!');
        app.numbers.push(ranNum * app.numbers.length);
        } else {
          console.log('else statement');
          app.numbers.push(ranNum);
      };

    } else {
          app.numbers.push(`${age} is not a number. Please enter a valid number!`);
      };
    renderListApp();
  };
};

const shirt = (shirtColor) => {
  const shirtLower = shirtColor.toLowerCase();
  return letters[shirtLower.charAt(0)] * 3;
};

const ages = (age) => {
  if (isNaN(age) === false) {
    return age * 4;
  }

};

const names = (name) => {
  const nameLower = name.toLowerCase();
  return letters[nameLower.charAt(0)] * 5;
};


const pseudoRandom = () => {
  app.random.push(Math.floor(Math.random() * 10));
  renderListApp();
};


const renderListApp = () => {
  const template = (
    <div>
      <h1>{app.main}</h1>
      <h2>{app.title1}</h2>
      {app.subtitle1 && <p>{app.subtitle1}</p>}

      <form onSubmit={onFormSubmit}>
        <input type="text" name="shirtColor" placeholder="Shirt Color"/>
        <input type="text" name="age" placeholder="Age"/>
        <input type="text" name="name" placeholder="Name"/>
        <button>Generate</button>
      </form>

      {app.numbers.length >= 2 && <h3>{app.numbers.slice(1, ) + ','}</h3>}
      <h2>{app.title2}</h2>
      <p>{app.subtitle2}</p>
      <button onClick={pseudoRandom}>Generate</button>
      {app.random.length >= 1 && <h3>{app.random + ','}</h3>}
    </div>
  );
  ReactDOM.render(template, appRoot);
};


const appRoot = document.getElementById('app');
renderListApp();