import React from 'react';
import './Navbar.css'

const Navbar = props => {
  const boxStyles = {
    listStyleType: 'none',
    margin: '0 1em 0 1em',
    height: '100%',
    padding: '0 1em 0 1em',
  }
  const gameLevels = props.levels.map((level,ind) => {
    if(props.curLevel === level) {
      const selectedStyles = Object.assign({}, boxStyles, { backgroundColor: "#4682B4"});
      return <li key={ind} onClick={props.changeDifficulty} style={selectedStyles}>{level}</li>
    } else {
      return <li key={ind} onClick={props.changeDifficulty} style={boxStyles}>{level}</li>
    }
  })
  return (
    <nav className="nav-bar">
      <div>
        <p className="newColors" onClick={props.newColors}>{props.gameState}</p>
      </div>
      <ul>
        {gameLevels}
      </ul>
    </nav>
  )
}

export default Navbar;