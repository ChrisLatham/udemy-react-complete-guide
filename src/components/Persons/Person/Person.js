import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Person.module.css";
import AuthenticationContext from "../../../context/AuthenticationContext";

class Person extends Component {
  constructor(props) {
    super(props);
    if (this.props.id === 2) {
      this.inputElement = React.createRef();
    }
  }
  static contextType = AuthenticationContext;
  componentDidMount() {
    console.log(this.context);
    if (this.props.id === 2) {
      this.inputElement.current.focus();
    }
  }
  render() {
    const { name, age, click, changed, children } = this.props;
    const isAuthenticated = this.context.isAuthenticated ? (
      <p>Authenticated!</p>
    ) : (
      <p>Please log in.</p>
    );

    return (
      <div className={styles.Person}>
        {isAuthenticated}
        <button onClick={click} type="button">
          Delete
        </button>
        <p>
          My name is {name}, and I'm {age} years old.
        </p>
        <p>{children}</p>
        <input
          type="text"
          //ref={(inputEl) => { this.inputElement = inputEl; }}
          ref={this.inputElement}
          onChange={changed}
          value={name}
        />
      </div>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func,
};

export default Person;
