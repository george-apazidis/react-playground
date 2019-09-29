import React, { Component } from "react";

class RouletteGun extends Component {
  // Set default props
  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false
  };

  renderDisplay() {
    const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props
    console.log(`chamber ${chamber}, bulletInChamber ${bulletInChamber}`)
    if (spinningTheChamber) {
      return "spinning the chamber and pullint the trigger!...";
    } else if (chamber === bulletInChamber) {
      return "BANG!!!!";
    } else {
      return "you're safe!";
    }
  }

  handleButtonClick = () => {
    this.setState({
      spinningTheChamber: true
    });

    this.interval = setTimeout(() => {
      // generate random # 1-8
      const randomChamber = Math.ceil(Math.random() * 8);
      // update state so random # is new value of chamber and the spinningTheChamber should be false
      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false
      });
    }, 2000);
  };

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    return (
      <div>
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleButtonClick}>Pull the trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;
