import React from 'react';
import ReactDOM from 'react-dom';

const Square = props => {
  const { handleClick, rowNum, squareNum, text } = props;

  return (
    <div className="square" onClick={() => props.handleClick(rowNum, squareNum)}>
      {text}
    </div>
  );
};

export default Square;
