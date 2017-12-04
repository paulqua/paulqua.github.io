const app = {
  title1: 'True Random Number Generator',
  subtitle1: 'Type the information below and click generate',
  title2: 'Pseudorandom Number Generator',
  subtitle2: 'Click the generate button to get your random number',
  numbers: [],
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

// if (option) {
//   app.options.push(option);
//   e.target.elements.option.value = '';
//   renderListApp();
// }

const onFormSubmit = (e) => {
  e.preventDefault();
  const shirtColor = e.target.elements.shirtColor.value;
  const age = e.target.elements.age.value;
  const name = e.target.elements.name.value;
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

const shirt = (shirtColor) => {
  const shirtLower = shirtColor.toLowerCase();
  console.log(shirtLower);
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
      <h1>{app.title1}</h1>
      {app.subtitle1 && <p>{app.subtitle1}</p>}

      <form onSubmit={onFormSubmit}>
        <input type="text" name="shirtColor" placeholder="Shirt Color"/>
        <input type="text" name="age" placeholder="Age"/>
        <input type="text" name="name" placeholder="Name"/>
        <button>Generate</button>
      </form>

      {app.numbers.length >= 1 && <h2>{app.numbers + ','}</h2>}
      <h1>{app.title2}</h1>
      <p>{app.subtitle2}</p>
      <button onClick={pseudoRandom}>Generate</button>
      {app.random.length >= 1 && <h2>{app.random + ','}</h2>}
    </div>
  );
  ReactDOM.render(template, appRoot);
};


const appRoot = document.getElementById('app');
renderListApp();
