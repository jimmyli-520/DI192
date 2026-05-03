import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      message: "",
      inputValue: "",
      serverResponse: ""
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:3001/api/hello");
    const data = await response.text();
    this.setState({ message: data });
  }

  async handleSubmit() {
    const response = await fetch("http://localhost:3001/api/world", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post: this.state.inputValue })
    });
    const data = await response.text();
    this.setState({ serverResponse: data });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h2>Post to Server:</h2>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
        />
        <button onClick={() => this.handleSubmit()}>Submit</button>
        <p>{this.state.serverResponse}</p>
      </div>
    );
  }
}

export default App;