import React, { Component } from "react";

class HelloWorld extends Component {
  state = {
    who: "world"
  };

  handleButtonClick = e => {
    const newWho = e.target.innerText;
    this.setState({
      who: newWho
    });
  };

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        <button onClick={this.handleButtonClick}>World</button>
        <button onClick={this.handleButtonClick}>Friend</button>
        <button onClick={this.handleButtonClick}>React</button>
      </div>
    );
  }
}

export default HelloWorld;
