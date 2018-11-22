/**
 * 使用React实现一款井字棋游戏
 * 创建时间: 2018年11月22日
 * 创建人: Andyliwr(andyliwr@outlook.com)
 */
import React, { Component } from 'react';
import './style.scss';

class JingZiQi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demos: [
        {
          title: '井字棋',
          des: '使用react实现一款井字棋小游戏',
          link: '/demo/jing-zi-qi'
        }
      ]
    };
  }

  render() {
    return <ul className="demos" />;
  }
}
export default JingZiQi;
