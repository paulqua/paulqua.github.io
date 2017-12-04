console.log("app.js is running");

const app = {
  title: 'Cool App',
  subtitle: 'Yeah it is pretty dope!',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderListApp();
  }
};

const reset = (e) => {
  e.preventDefault();
  app.options = [];
  renderListApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const numbers = [0, 10, 20];


const renderListApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options: ': 'There are no options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={reset}>Remove All</button>
      <ol>
      {
        app.options.map((opt) => {
          return <li key={opt}>{opt}</li>;
        })
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};


const appRoot = document.getElementById('app');
renderListApp();
