import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/stories/Sprite');
}

configure(loadStories, module);
