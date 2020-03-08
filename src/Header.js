import React from 'react';
import './Header.css'

const Header = props => {
  const colorCode = props.curLevel === 'EXPERT' ? <p className="header-color">{props.hex}</p> : <p className="header-color">{props.rgb}</p>
  return (
    <header className="header">
      <p className="header-title">The Color Code Guessing Game</p>
      {colorCode}
      <p className="header-title">Built with Love in React!</p>
    </header>
  )
}

export default Header;