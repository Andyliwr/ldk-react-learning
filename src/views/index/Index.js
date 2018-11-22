import React, { Component } from 'react';
import Hello from '../../components/Hello';
import logo from '../../logo.svg';
import style from './style.module.scss';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.gotoDemos = this.gotoDemos.bind(this);
  }

  gotoDemos() {
    this.props.history.push('/demos');
  }

  render() {
    return (
      <div className={style.home}>
        <header className={style['home-header']}>
          <img src={logo} className={style['home-logo']} alt="logo" />
          <Hello name="Andyliwr" />
          <span className={style['home-link']} onClick={this.gotoDemos}>
            Look Demos
          </span>
        </header>
      </div>
    );
  }
}

export default Index;
