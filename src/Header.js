import React from 'react';
import './Header.css'

const Header = props => {
  return (
    <header className="header">
      <h3>The Great Color Code</h3>
      <h1>{props.rgb}</h1>
      <h3>Guessing Game</h3>
    </header>
  )
}

export default Header;