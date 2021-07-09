import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const setState = this.handleClick;
    const boundSetState = setState.bind(this);
    if (!this.state.isClicked) {
      return <button onClick={boundSetState}>Click Me!</button>;
    } else {
      return <button onClick={boundSetState}>Thanks!</button>;
    }
  }
}

ReactDOM.render(
  <CustomButton/>,
  document.getElementById('root')
);
