import React, { Component } from 'react';

class Greet extends Component {
  render() {
    return <span>Hello {this.props.name} !</span>;
  }
}

export default Greet;
