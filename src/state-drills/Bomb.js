import React, { Component } from "react";

class Bomb extends Component {
  state = {
    count: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderDisplay() {
    const { count } = this.state;
    if (count >= 8) {
      clearInterval(this.interval);
      return "BOOM!!!!";
    } else if (count % 2 === 0) {
      return "tick";
    } else {
      return "tock";
    }
  }

  render() {
    console.log(this.state.count);
    return (
      <div>
        <p>{this.renderDisplay()}</p>
      </div>
    );
  }
}

export default Bomb;
