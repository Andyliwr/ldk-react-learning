import React, { Component } from 'react';

class TestInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enable: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ enable: !this.state.enable });
  }
  render() {
    return (
      <p>
        <input type="text" disabled={this.state.enable} />
        <button onClick={this.handleClick}>Change state</button>
      </p>
    );
  }
}

export default TestInput;
