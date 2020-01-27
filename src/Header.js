import React from 'react';
import './Header.css'

const Header = props => {
  const colorCode = props.curLevel === 'Expert' ? <h1>{props.hex}</h1> : <h1>{props.rgb}</h1>
  return (
    <header className="header">
      <h3>The Great Color Code</h3>
      {colorCode}
      <h3>Guessing Game</h3>
    </header>
  )
}

export default Header;