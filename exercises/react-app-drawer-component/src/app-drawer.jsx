import React from 'react';
export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isOpen === false) {
      this.setState({ isOpen: true });
    } else {
      this.setState({ isOpen: false });
    }
  }

  render() {
    let isOpen = null;
    if (this.state.isOpen === true) {
      isOpen = 'drawer';
    } else {
      isOpen = 'drawer hidden';
    }
    return (
      <>
      <div>
        <i className="fas fa-bars navBar" onClick={ this.handleClick }></i>
      </div>
      <div>
        <div className={ isOpen }>
          <h2 className="menu" onClick={this.handleClick}>Menu</h2>
          <h3 className="about" onClick={this.handleClick}>About</h3>
          <h3 className="getStarted" onClick={this.handleClick}>Get Started</h3>
          <h3 className="signIn" onClick={this.handleClick}>Sign In</h3>
        </div>
      </div>
      </>
    );
  }
}
