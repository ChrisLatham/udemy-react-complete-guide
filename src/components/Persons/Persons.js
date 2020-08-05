import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  render() {
    const { persons, clicked, changed, isAuthenticated } = this.props;
    return persons.map(({ id, name, age }, index) => {
      return (
        <Person
          key={id}
          id={id}
          name={name}
          age={age}
          click={() => clicked(index)}
          changed={(event) => changed(event, id)}
          isAuthenticated={isAuthenticated}
        />
      );
    });
  }
}
export default Persons;
