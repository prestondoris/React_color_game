import React from 'react';

const GameBoard = props => {
  const boxes = props.boxColors.map((c,ind) => (
    <div key={ind} style={{
      width: '100px',
      height: '100px',
      borderRadius: '10px',
      backgroundColor: c}}
      ></div>
  ))
  
  return (
    <div>
      {boxes}
    </div>
  )
}

export default GameBoard;