import React from 'react';
import ReactDOM from 'react-dom';

const Square = props => {
  const { handleClick, rowNum, squareNum, text } = props;
  const squareClassName = `square ${text ? `square-selected ${text}` : null}`;

  return (
    <div className={squareClassName} onClick={() => props.handleClick(rowNum, squareNum)}>
      <p className="xo">{text ? text : '-'}</p>
    </div>
  );
};

export default Square;
