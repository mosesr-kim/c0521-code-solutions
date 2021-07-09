import React from 'react';
export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, on: false };
  }

  handleStart() {
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
    this.setState({ on: true });
  }

  handleStop() {
    clearInterval(this.interval);
    this.setState({ on: false });
  }

  handleReset() {
    this.setState({ time: 0 });
  }

  render() {
    const incrementTime = this.handleStart;
    const boundHandleStart = incrementTime.bind(this);
    const pauseTime = this.handleStop;
    const boundHandleStop = pauseTime.bind(this);
    const resetTime = this.handleReset;
    const boundHandleReset = resetTime.bind(this);
    if (this.state.on === false) {
      return (
        <div>
          <h1 onClick={boundHandleReset}>{this.state.time}</h1>
          <i className="fas fa-play" onClick={boundHandleStart}></i>
        </div>
      );
    } else {
      return (
        <div>
          <h1>{this.state.time}</h1>
          <i className="fas fa-pause" onClick={boundHandleStop}></i>
        </div>
      );
    }
  }
}
