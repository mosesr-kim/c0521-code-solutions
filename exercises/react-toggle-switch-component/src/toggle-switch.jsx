import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: true };
  }

  handleClick() {
    if (this.state.on === true) {
      this.setState({ on: false });
    } else {
      this.setState({ on: true });
    }
  }

  render() {
    const setState = this.handleClick;
    const boundHandleClick = setState.bind(this);
    if (this.state.on === true) {
      return (
        <div onClick={boundHandleClick} className="toggleSwitch">
          <div className="outerBorderOn">
            <div className="innerBorderOn">
            </div>
          </div>
          <h1>
            On
          </h1>
        </div>);
    } else {
      return (
        <div onClick={boundHandleClick} className="toggleSwitch">
          <div className="outerBorderOff">
            <div className="innerBorderOff">
            </div>
          </div>
          <h1>
            Off
          </h1>
        </div>);
    }
  }
}
