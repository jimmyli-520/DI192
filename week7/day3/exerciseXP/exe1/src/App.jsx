import React from 'react';
import ErrorBoundary from './ErrorBoundary'
import './App.css'

class BuggyCounter extends React.Component{
  constructor (props) {
    super(props);
    this.state = {counter:0}
  }

  handleClick() {
    this.setState(({counter})=> ({
      counter: counter + 1
    }));
  }

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }

    return (
      <div onClick={() => this.handleClick()}>
        {this.state.counter}
      </div>
    );
  }
}

function App() {


  return (
    <>
      <section id="center">
        <div>
          <BuggyCounter />
        </div>
      </section>

    </>
  )
}

export default App
