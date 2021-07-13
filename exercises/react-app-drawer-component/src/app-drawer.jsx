import React from 'react';
export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.isOpen ? this.setState({ isOpen: false }) : this.setState({ isOpen: true });
  }

  render() {
    const isOpen = this.state.isOpen ? '' : 'hidden';
    return (
      <>
      <i className="fas fa-bars navBar" onClick={ this.handleClick }></i>
      <div className={`drawer ${isOpen}`}>
        <h2 className="menu" onClick={this.handleClick}>Menu</h2>
        <h3 className="about" onClick={this.handleClick}>About</h3>
        <h3 className="getStarted" onClick={this.handleClick}>Get Started</h3>
        <h3 className="signIn" onClick={this.handleClick}>Sign In</h3>
      </div>
      <div className={`dimBackground ${isOpen}`} onClick={this.handleClick}></div>
      </>
    );
  }
}
