import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';

class IndexCard extends Component {
  constructor(props) {
    super(props);
    this.gotoDemoDetail = this.gotoDemoDetail.bind(this);
  }

  gotoDemoDetail(event) {
    console.log(event, this.props);
    this.props.history.push(this.props.link);
  }

  render() {
    return (
      <li className="index-card">
        <div className="left">
          <p className="index-card-title">{this.props.title}</p>
          <p className="index-card-des">{this.props.des}</p>
        </div>
        <button onClick={this.gotoDemoDetail}>点击查看</button>
      </li>
    );
  }
}

export default withRouter(IndexCard);
