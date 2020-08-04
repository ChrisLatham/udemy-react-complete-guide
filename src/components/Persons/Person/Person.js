import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    const { name, age, click, changed, children } = this.props;
    return (
      <div className="Person">
        <button onClick={click} type="button">
          Delete
        </button>
        <p>
          My name is {name}, and I'm {age} years old.
        </p>
        <p>{children}</p>
        <input type="text" onChange={changed} value={name} />
      </div>
    );
  }
}

export default Person;
