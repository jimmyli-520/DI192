import React from 'react'

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }

  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: 'red', show: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 1000);
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    console.log("after update");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  changeColor() {
    this.setState({ favoriteColor: 'blue' });
  }

  deleteHeader() {
    this.setState({ show: false });
  }

  render() {
    return (
      <>
        {this.state.show && <Child />}
        <button onClick={() => this.deleteHeader()}>Delete Header</button>
      </>
    );
  }
}

export default Color