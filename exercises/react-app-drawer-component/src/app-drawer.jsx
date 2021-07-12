import React from 'react';
export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <div>
        <i className="fas fa-bars navBar"></i>
      </div>
      <div>
        <div className="drawer">
          <h2>Menu</h2>
          <h3>About</h3>
          <h3>Get Started</h3>
          <h3>Sign In</h3>
        </div>
      </div>
      </>
    );
  }
}
