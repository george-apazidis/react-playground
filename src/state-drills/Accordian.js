import React, { Component } from "react";

class Accordian extends Component {
  static defaultProps = {
    sections: []
  };

  state = {
    lastClicked: null
  };

  renderItem(section, index) {
    return (
      <li key={index}>
        <button onClick={() => this.handleButtonClick(index)}>
          {section.title}
        </button>
        {/* review with Alfredo */}
        {this.state.lastClicked === index && <p>{section.content}</p>}
      </li>
    );
  }

  handleButtonClick(index) {
    // change state
    this.setState({ lastClicked: index });
  }

  render() {
    // destruct
    const { sections } = this.props;

    return (
      <ul>
        {sections.map((section, index) =>
          this.renderItem(section, index)
        )}
      </ul>
    );
  }
}

export default Accordian;
