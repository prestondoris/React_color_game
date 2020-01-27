import React from 'react';
import './Navbar.css'

const Navbar = props => {
  return (
    <nav className="nav-bar">
      <div>
        <p>New Colors</p>
      </div>
      <ul>
        <li className="game-type">Easy</li>
        <li className="game-type">Hard</li>
        <li className="game-type">Expert</li>
      </ul>
    </nav>
  )
}

export default Navbar;