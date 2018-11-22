import React, { Component } from 'react';
import IndexCard from './index-card/Card';
import './style.scss';

class Demos extends Component {
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
    return (
      <ul className="demos">
        {this.state.demos.map((item, index) => (
          <IndexCard key={index} title={item.title} des={item.des || '暂无描述'} link={item.link || '/'} />
        ))}
      </ul>
    );
  }
}

export default Demos;
