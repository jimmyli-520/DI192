import React, { Component } from 'react';
import './Exercise.css';

class Exercise extends Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
      return (
      <div>
        <h1 style={{color: "red", backgroundColor: "lightblue"}}>Hello World</h1>
        
          <p className = "para">This is a paragraph</p>
          <a href="https://www.google.com">This is a Link</a>
          <form>
            <label>Enter your name:</label>
            <input type="text" />
            <input type="submit" value="Submit" />
          </form>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
          <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
      
      </div>
    );
  }
}

export default Exercise;