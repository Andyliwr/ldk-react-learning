/**
 * 组件说明
 * 创建时间: 2018年xx月xx日
 * 创建人: Andyliwr(andyliwr@outlook.com)
 */
import React, { Component } from 'react';
import style from './style.module.scss';

class Ceil extends Component {
  render() {
    return (
      <div className={style.ceil} onClick={this.props.click}>
        <span>{this.props.value}</span>
      </div>
    );
  }
}
export default Ceil;
