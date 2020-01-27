import React, {Component} from 'react';
import Header from './Header';
import Navbar from './Navbar';
import GameBoard from './Gameboard'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: 'New Colors',
      level: 'Hard',
      boxColors: Array(9).fill().map(this.randomColor, this),
      rgb: '',
      hex: ''
    };
    this.randomColor = this.randomColor.bind(this);
    this.numToHex = this.numToHex.bind(this);
    this.getRGB = this.getRGB.bind(this);
    this.getHex = this.getHex.bind(this);

    setTimeout(() => {
      const rgb = this.getRGB();
      const hex = this.getHex(rgb)
      this.setState({rgb, hex})
    }, 1000)
  }

  getRGB() {
    return this.state.boxColors[Math.floor(Math.random() * 9)]
  }

  getHex(rgb) {
    var r = Number(rgb.split("b(")[1].split(", ")[0]);
    var g = Number(rgb.split("b(")[1].split(", ")[1]);
    var b = Number(rgb.split("b(")[1].split(", ")[2].split(")")[0]);
    var hex = "#" + this.numToHex(r) + this.numToHex(g) + this.numToHex(b);
    return hex;
  }

  randomColor(colorCode) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";

    var rr = this.numToHex(r);
    var gg = this.numToHex(g);
    var bb = this.numToHex(b);
    var hex = "#" + rr + gg + bb;

    if (rgb === "rgb(35, 35, 35)") {
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

  render() {
    return (
      <div className="App">
        <Header rgb={this.state.rgb} hex={this.state.hex} />
        <Navbar />
        <GameBoard boxColors={this.state.boxColors}/>
      </div>
    )
  }
}

export default App;
