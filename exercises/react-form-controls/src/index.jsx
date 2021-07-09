import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    event.preventDefault();
    console.log(this.state.value);
  }

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={this.handleChange}/>
        <button>Sign Up</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.getElementById('root')
);
