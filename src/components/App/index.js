import React from 'react';
import './styles.css';
import Sprite from '../Sprite/index';
import spriteFile from '../../images/caverman.png';
import animate from '../Sprite/animate';

const CaverManSprite = ({frame}) => (
  <Sprite file={spriteFile} columns={6} rows={7} frame={frame} ratio={1} />
);

const CaverManAnimation = animate(CaverManSprite);

const App = () => {
  return (
    <div className="App">
      <CaverManAnimation frames={[1, 2, 3, 4, 5]} fps={7} />
      <CaverManAnimation frames={[6, 7, 8, 9, 10, 11, 12, 13]} fps={11} />
      <CaverManAnimation frames={[14, 15, 16]} fps={10} />
      <CaverManAnimation frames={[17, 18, 19]} fps={10} />
    </div>
  );
};

export default App;
