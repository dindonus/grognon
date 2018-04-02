import React, { Component } from 'react';
import './styles.css';
import Sprite from '../Sprite/index';
import spriteFile from '../../images/caverman.png';

const CaverManSprite = ({ frame }) => (
  <Sprite file={spriteFile} columns={6} rows={7} frame={frame} ratio={1} />
);

class App extends Component {
  constructor() {
    super();
    this.state = { frame: 0 };
    this.onTick = this.onTick.bind(this);
  }

  componentDidMount() {
    window.setInterval(this.onTick, 120);
  }

  onTick() {
    this.setState(previousState => ({
      frame: previousState.frame + 1,
    }));
  }

  render() {
    return (
      <div className="App">
        <CaverManSprite frame={this.state.frame % 6} />
        <CaverManSprite frame={this.state.frame % 8 + 6} />
        <CaverManSprite frame={this.state.frame % 3 + 14} />
        <CaverManSprite frame={this.state.frame % 3 + 17} />
      </div>
    );
  }
}

export default App;
