import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    const incrementState = this.handleClick;
    const boundHandleClick = incrementState.bind(this);
    const clicks = this.state.clicks;
    if (clicks >= 0 && clicks < 3) {
      return <button onClick={boundHandleClick} className="purple">Hello World!</button>;
    } else if (clicks >= 3 && clicks < 6) {
      return <button onClick={boundHandleClick} className="blue">Hello World!</button>;
    } else if (clicks >= 6 && clicks < 9) {
      return <button onClick={boundHandleClick} className="green">Hello World!</button>;
    } else if (clicks >= 9 && clicks < 12) {
      return <button onClick={boundHandleClick} className="yellow">Hello World!</button>;
    } else if (clicks >= 12 && clicks < 15) {
      return <button onClick={boundHandleClick} className="orange">Hello World!</button>;
    } else if (clicks >= 15) {
      return <button onClick={boundHandleClick} className="red">Hello World!</button>;
    }
  }
}
