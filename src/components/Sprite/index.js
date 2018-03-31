import React from 'react';
import { getDimensions } from '../../helpers/image';

class Sprite extends React.Component {
  constructor() {
    super();
    this.element = null;
    this.frame = null;
    this.setDimensions = this.setDimensions.bind(this);
  }

  componentDidMount() {
    this.element.style.backgroundImage = `url(${this.props.file})`;
    this.element.style.backgroundSize = `${this.props.columns}00%`;
    getDimensions(this.props.file).then(this.setDimensions);
  }

  componentWillReceiveProps(newProps) {
    this.setFrame(newProps.frame);
  }

  setDimensions(dimensions) {
    const ratio = this.props.ratio;
    this.frame = {
      width: dimensions.width / this.props.columns,
      height: dimensions.height / this.props.rows,
    };
    this.element.style.width = ratio * this.frame.width + 'px';
    this.element.style.height = ratio * this.frame.height + 'px';
    this.setFrame(this.props.frame);
  }

  setFrame(number) {
    if (this.frame) {
      const { collumn, row } = this.getCollumnAndRowFromFrameNumber(number);
      const positionX = -this.frame.width * collumn * this.props.ratio;
      const positionY = -this.frame.height * row * this.props.ratio;
      this.element.style.backgroundPosition = `${positionX}px ${positionY}px`;
    }
  }

  getCollumnAndRowFromFrameNumber(number) {
    number = number % (this.props.columns * this.props.rows);
    const collumn = number % this.props.columns;
    const row = Math.floor(number / this.props.columns);
    return { collumn, row };
  }

  render() {
    return (
      <div
        className="Sprite-element"
        ref={element => (this.element = element)}
      />
    );
  }
}

export default Sprite;
