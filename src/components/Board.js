import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    // Create 2-Dimensional 3x3 array representing our board.  Each sub-array is a row.
    const rows = new Array(3).fill(new Array(3).fill(null));
    return { rows, turn: 0 };
  };

  handleTurn = (rowNum, squareNum) => {
    if (this.state.rows[rowNum][squareNum]) return;
    const newRows = [...this.state.rows].map(row => [...row]);
    newRows[rowNum][squareNum] = this.state.turn % 2 === 0 ? 'X' : 'O';

    this.setState({ rows: newRows }, () => {
      if (this.checkWin()) this.handleWin();
      else this.setState({ turn: this.state.turn + 1 });
    });
  };

  checkWin = () => {
    // Horizontal win combos
    const { rows } = this.state;

    // Vertical win combos
    const columns = [0, 1, 2].map(colNum => [0, 1, 2].map(rowNum => rows[rowNum][colNum]));

    // Diaganal win combos
    const diags = [[rows[0][0], rows[1][1], rows[2][2]], [rows[0][2], rows[1][1], rows[2][0]]];

    // Put all combos into a single array, and filter out combos without turn values
    const allCombos = [...rows, ...columns, ...diags].filter(combo => !combo.includes(null));

    // Iterate through all combos, and check if any contain values that are all equal
    for (let i = 0; i < allCombos.length; i += 1) {
      const currentCombo = allCombos[i];
      if (currentCombo.every(val => val === currentCombo[0])) return true;
    }

    return false;
  };

  handleWin = () => {
    setTimeout(() => {
      alert(`${this.state.turn % 2 === 0 ? 'X' : 'O'} WINS! VERY WOW!`);
      this.resetGame();
    }, 5);
  };

  resetGame = () => {
    this.setState(this.getInitialState());
  };

  render = () => {
    const rows = [];

    for (let i = 0; i < 3; i += 1) {
      rows.push(
        <Row
          key={`row ${i}`}
          rowNum={i}
          rowText={this.state.rows[i]}
          handleClick={this.handleTurn}
        />
      );
    }

    return (
      <div>
        <div className="board">{rows}</div>
        <button onClick={this.resetGame}>Reset Game </button>
      </div>
    );
  };
}
