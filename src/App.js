import React, {Component} from 'react';
import Header from './Header';
import Navbar from './Navbar';
import GameBoard from './Gameboard'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: 'NEW COLORS',
      levels: ['EASY','HARD','EXPERT'],
      curLevel: 'HARD',
      boxColors: Array(6).fill().map(this.randomColor, this),
      numBoxes: 6,
      rgb: '',
      hex: '',
    };
    this.randomColor = this.randomColor.bind(this);
    this.numToHex = this.numToHex.bind(this);
    this.getRGB = this.getRGB.bind(this);
    this.getHex = this.getHex.bind(this);
    this.boxClick = this.boxClick.bind(this);
    this.newColors = this.newColors.bind(this);
    this.changeDifficulty = this.changeDifficulty.bind(this);
    this.newColorArray = this.newColorArray.bind(this);

    setTimeout(() => {
      const rgb = this.getRGB()
      const hex = this.getHex(rgb)
      this.setState({rgb, hex})
    }, 1000)
  }

  newColorArray(numBoxes) {
    return Array(numBoxes).fill().map(this.randomColor, this)
  }

  newColors() {
    const boxColors = this.newColorArray(this.state.numBoxes);
    const rgb = boxColors[Math.floor(Math.random() * this.state.numBoxes)];
    const hex = this.getHex(rgb)
    const gameState = 'NEW COLORS'
    this.setState({boxColors, rgb, hex, gameState});
  }

  getRGB() {
    return this.state.boxColors[Math.floor(Math.random() * this.state.numBoxes)]
  }

  getHex(rgb) {
    var r = Number(rgb.split("B(")[1].split(", ")[0]);
    var g = Number(rgb.split("B(")[1].split(", ")[1]);
    var b = Number(rgb.split("B(")[1].split(", ")[2].split(")")[0]);
    var hex = "#" + this.numToHex(r) + this.numToHex(g) + this.numToHex(b);
    return hex;
  }

  randomColor(colorCode) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = "RGB(" + r + ", " + g + ", " + b + ")";

    var rr = this.numToHex(r);
    var gg = this.numToHex(g);
    var bb = this.numToHex(b);
    var hex = "#" + rr + gg + bb;

    if (rgb === "RGB(35, 35, 35)") {
      this.randomColor(colorCode);
    } else {
      if (colorCode === "hex") {
        return hex;
      } else {
        return rgb;
      }
    }
  }

  numToHex(num) {
    var hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    var sixteens = "" + hexArr[Math.floor(num / 16)];
    var ones = "" + hexArr[num % 16];
    var hex = sixteens + ones;
    return hex;
  }

  boxClick(e) {
    let curBackground = e.target.style.backgroundColor
    curBackground = curBackground.split('').map(v => v.toUpperCase()).join('');

    if( curBackground === this.state.rgb) {
      const boxColors = Array(this.state.boxColors.length).fill().map(b => this.state.rgb, this);
      const gameState = 'PLAY AGAIN?';
      this.setState({boxColors, gameState});
    } else {
      e.target.style.backgroundColor = 'RGB(53,53,53)';
    }
  }
  
  changeDifficulty(e) {
    const curLevel = e.target.innerHTML;
    let numBoxes = 6;
    if(curLevel === 'EASY') numBoxes = 3;
    const boxColors = this.newColorArray(numBoxes);
    const rgb = boxColors[Math.floor(Math.random() * numBoxes)];
    const hex = this.getHex(rgb)
    this.setState({curLevel, boxColors, numBoxes, rgb, hex});
  }

  render() {
    return (
      <div className="App">
        <Header rgb={this.state.rgb} curLevel={this.state.curLevel} hex={this.state.hex} />
        <Navbar changeDifficulty={this.changeDifficulty} newColors={this.newColors} gameState={this.state.gameState} curLevel={this.state.curLevel} levels={this.state.levels}/>
        <GameBoard boxClick = {this.boxClick} boxColors={this.state.boxColors}/>
      </div>
    )
  }
}

export default App;
