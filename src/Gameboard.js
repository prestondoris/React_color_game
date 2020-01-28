import React from 'react';
import './Gameboard.css';

const GameBoard = props => {
  const boxes = props.boxColors.map((c,ind) => (
    <div key={ind} className="box" onClick={props.boxClick} style={{
      width: '250px',
      height: '250px',
      borderRadius: '10px',
      backgroundColor: c,
      margin: '1rem'
    }}
      ></div>
  ))
  
  return (
    <div className="gameboard">
      <div className="gameboard-boxes">
        {boxes}
      </div>
    </div>
  )
}

export default GameBoard;