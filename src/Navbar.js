import React from 'react';
import './Navbar.css'

const Navbar = props => {
  const boxStyles = {
    listStyleType: 'none',
    height: '100%',
    padding: '0 1em 0 1em',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#4682B4'
  }
  const gameLevels = props.levels.map((level,ind) => {
    if(props.curLevel === level) {
      const selectedStyles = Object.assign({}, boxStyles, { backgroundColor: "#4682B4", color: 'white'});
      return <li key={ind} onClick={props.changeDifficulty} style={selectedStyles}>{level}</li>
    } else {
      return <li key={ind} onClick={props.changeDifficulty} style={boxStyles}>{level}</li>
    }
  })
  return (
    <nav className="navbar">
      <div className="navbar-contents">
        <p onClick={props.newColors}> {props.gameState}</p>
        <ul>
          {gameLevels}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
