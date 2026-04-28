function App() {
  return(
    <p>Hello World!</p>
  );
}

export default App;

function App() {
  const myelement = <h1>I Love JSX!</h1>

  return(
    <div>
      <p>Hello World!</p>
      {myelement}
    </div>
  );
}

function App() {
  const sum = 5+5;

  return(
    <p>React is {sum} times better with JSX</p>
  );
}