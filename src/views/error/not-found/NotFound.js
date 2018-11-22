import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import style from './style.module.scss';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.gotoIndex = this.gotoIndex.bind(this);
  }

  gotoIndex() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className={style.main}>
        <p className={style.text}>找不到此页面</p>
        <button className={`btn ${style.btn}`} onClick={this.gotoIndex}>
          返回首页
        </button>
      </div>
    );
  }
}

export default withRouter(NotFound);
