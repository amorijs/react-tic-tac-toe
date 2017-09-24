import React from 'react';
import Square from './Square';

const Row = props => {
  const { rowNum, rowText, handleClick } = props;
  const squares = [];

  for (let i = 0; i < 3; i += 1) {
    squares.push(
      <Square
        key={`square ${i}`}
        rowNum={rowNum}
        squareNum={i}
        text={rowText[i]}
        handleClick={handleClick}
      />
    );
  }

  return <div className="row">{squares}</div>;
};

export default Row;
