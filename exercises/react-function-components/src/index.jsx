import React from 'react';
import ReactDOM from 'react-dom';

function Button(props) {
  return <button>{props.name}</button>;
}

const clickMeButton = <Button name="Click Me!"/>;

ReactDOM.render(
  clickMeButton,
  document.getElementById('root')
);
