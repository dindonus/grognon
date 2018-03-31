import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './styles.css';
import Sprite from '../Sprite/index';
import spriteFile from '../../images/caverman.png';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Sprite
          file={spriteFile}
          columns={6}
          rows={7}
          frame={this.state.frame % 6}
          ratio={1}
        />
        <Sprite
          file={spriteFile}
          columns={6}
          rows={7}
          frame={this.state.frame % 8 + 6}
          ratio={1}
        />
        <Sprite
          file={spriteFile}
          columns={6}
          rows={7}
          frame={this.state.frame % 3 + 14}
          ratio={1}
        />
        <Sprite
          file={spriteFile}
          columns={6}
          rows={7}
          frame={this.state.frame % 3 + 17}
          ratio={1}
        />
      </div>
    );
  }
}

export default App;
