import React from 'react'

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: 'red' };
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

  render() {
    return (
      <>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={() => this.changeColor()}>Change Color</button>
      </>
    );
  }
}

export default Color
