import React from 'react';

const animate = SpriteComponent =>
  class extends React.Component {
    constructor() {
      super();
      this.state = { frame: 0 };
      this.onTick = this.onTick.bind(this);
      this.interval = null;
    }

    componentDidMount() {
      const delay = 1000 / this.props.fps;
      this.interval = window.setInterval(this.onTick, delay);
    }

    componentWillUnmount() {
      window.clearInterval(this.interval);
    }

    onTick() {
      this.setState(previousState => ({
        frame: previousState.frame + 1
      }));
    }
    render() {
      const length = this.props.frames.length;
      const frame = this.props.frames[this.state.frame % length];
      return <SpriteComponent frame={ frame } />;
    }
  };

export default animate;
