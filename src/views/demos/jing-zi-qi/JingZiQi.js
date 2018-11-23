/**
 * 组件说明
 * 创建时间: 2018年xx月xx日
 * 创建人: Andyliwr(andyliwr@outlook.com)
 */
import React, { Component } from 'react';
import Ceil from './ceil/Ceil';
import style from './style.module.scss';

function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      currentCeilNum: [], // 当前落子方格
      xIsNext: true
    };
    // 落子函数
    this.handleCeilClick = this.handleCeilClick.bind(this);
    // 悔棋函数
    this.jumpToThis = this.jumpToThis.bind(this);
  }
  handleCeilClick(i) {
    // 保证悔棋之后能继续下棋才会使用stepNumber去截断历史记录
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1]; // 上一步落子步骤
    // 浅拷贝数组
    const squares = current.squares.slice(); // 上一步落子之后的棋盘布局

    // 当前方格内已经落子/有一方获胜就就无法继续
    if (calculateWinner(squares) || squares[i]) {
      return false;
    }
    const xIsNext = !this.state.xIsNext;

    // 修改当前步骤的squares的值
    squares[i] = this.state.xIsNext ? '✘' : 'O';

    // 记录当前落子方格
    const currentCeilNum = this.state.currentCeilNum.slice();
    currentCeilNum.push({
      num: i,
      name: squares[i]
    });

    // 更新state
    this.setState({
      currentCeilNum: currentCeilNum,
      xIsNext: xIsNext,
      history: history.concat([{ squares }]), // 将当前步骤加入到历史记录中
      stepNumber: history.length // step在history concat之后加1了
    });
  }
  jumpToThis(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 ? false : true // 奇数改X落子，偶数该O落子
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber]; // 当前落子步骤
    // 渲染棋盘
    let boards = [];
    for (let i = 0; i < 9; i++) {
      boards.push(<Ceil key={i} value={current.squares[i]} click={() => this.handleCeilClick(i)} />);
    }

    // 渲染游戏状态
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = `${winner}是赢家！`;
    } else {
      status = `该 ${this.state.xIsNext ? '✘' : 'O'} 方落子`;
    }

    // 渲染落子步骤
    const moves = history.map((step, index) => {
      // 判断当前落子方格
      let currentCeilNum = this.state.currentCeilNum[index - 1];
      let desc;
      if (index) {
        desc = (
          <span>
            <span>
              Move #{index}&nbsp;&nbsp;{`${currentCeilNum.name} 落子第${currentCeilNum.num}个方格`}
            </span>
            <i className={style.back} onClick={() => this.jumpToThis(index)} />
          </span>
        );
      } else {
        desc = <span>游戏开始</span>;
      }
      return (
        <li key={index}>
          <p>{desc}</p>
        </li>
      );
    });
    return (
      <div className={style['jing-zi-qi']}>
        <div className={style.square}>
          {/* 棋盘 */}
          {boards}
        </div>
        {/* 游戏信息 */}
        <p className={style.title}>游戏详情</p>
        <div className={style.info}>
          <p className={style.status}>游戏状态：{status}</p>
          <p className={style.step}>历史记录：</p>
          <ul className={style.history}>{moves}</ul>
        </div>
      </div>
    );
  }
}
export default Square;
