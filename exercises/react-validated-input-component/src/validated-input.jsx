import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ value: event.target.value });
  }

  render() {
    const passRequired = this.state.value.length === 0
      ? ''
      : 'hidden';
    const passShort = this.state.value.length > 0 && this.state.value.length < 8
      ? ''
      : 'hidden';
    const checkMark = this.state.value.length > 7
      ? ''
      : 'hidden';
    const xMark = (this.state.value.length === 0) || (this.state.value.length < 8)
      ? ''
      : 'hidden';
    return (
      <>
      <div className="formContainer">
        <div className="col-half">
          <form action="">
            <label htmlFor="pass">Password</label>
            <input
            type="password"
            id="pass"
            required
            value={this.state.value}
            onChange={this.handleChange}
            />
              <i className={`fas fa-check green ${checkMark}`}></i>
              <i className={`fas fa-times red ${xMark}`}></i>
            <p className={`red ${passRequired}`}>A password is required</p>
            <p className={`red ${passShort}`}>Your password is too short</p>
          </form>
        </div>
      </div>
      </>
    );
  }
}
