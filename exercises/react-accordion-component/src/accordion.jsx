import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <div className="accordionContainer">
        <div className="headerContainer">
          <p className="headerText">
            Hypertext Markup Language
          </p>
        </div>
        <div className="details">
          <p>
            Hypertext Markup Language (HTML) is the standard markup language
            for creating web pages and web applications. With Cascading Style
            Sheets (CSS) and JavaScript, it forms a triad of cornerstone
            technologies for the World Wide Web.
          </p>
        </div>
        <div className="headerContainer">
          <p className="headerText">
            Cascading Style Sheets
          </p>
        </div>
        <div className="details">
          <p>
            Cascading Style Sheets (CSS) is a style sheet language used for
            describing the presentation of a document written in a markup
            language like HTML. CSS is a cornerstone technology of the World
            Wide Web alongside HTML and JavaScript.
          </p>
        </div>
        <div className="headerContainer">
          <p className="headerText">
            JavaScript
          </p>
        </div>
        <div className="details">
          <p>
            JavaScript, often abbreviated as JS, is a high-level interpreted
            programming language taht conforms to the ECMAScript specification.
            JavaSCript has curly-bracket syntax, dynamic typing, prototype-based,
            object-orientation, and first-class functions.
          </p>
        </div>
      </div>
      </>
    );
  }
}
