import React from 'react';
import './Gameboard.css';

const GameBoard = props => {
  const boxes = props.boxColors.map((c,ind) => (
    <div key={ind} className="box" onClick={props.boxClick} style={{
      width: '100px',
      height: '100px',
      borderRadius: '10px',
      backgroundColor: c,
      margin: '.5rem'
    }}
      ></div>
  ))
  
  return (
    <div className="gameboard">
      {boxes}
    </div>
  )
}

export default GameBoard;