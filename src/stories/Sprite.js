import React from 'react';
import { storiesOf } from '@storybook/react';
import Sprite from '../components/Sprite/index';
import spriteFile from '../images/caverman.png';
import animate from '../components/Sprite/animate';
import '../components/App/styles.css';

const CaverManSprite = ({ frame }) => (
  <Sprite file={spriteFile} columns={6} rows={7} frame={frame} ratio={1} />
);

const CaverManAnimation = animate(CaverManSprite);

storiesOf('Sprite', module).add('with Caverman', () => (
  <CaverManAnimation frames={[1, 2, 3, 4, 5]} fps={7} />
));
