const app = {
  title: 'Visibility Toggle',
  show: []
};

const show = () => {
  app.show = 'Hey! These are some details you can now see!';
  renderListApp();
};

const reset = () => {
  app.show = [];
  renderListApp();
};

const renderListApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.show.length === 0 ? <button onClick={show}>Show Details</button> : <button onClick={reset}>Hide Details</button>}
      {app.show && <p>{app.show}</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
};


const appRoot = document.getElementById('app');
renderListApp();
