import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import styles from "./App.module.css";
import WithStyles from "../hoc/WithStyles";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manuel", age: 29 },
      { id: 3, name: "Stephanie", age: 26 },
    ],
    showPersons: false,
    changeCounter: 0,
  };
  nameChangedHandler = (event, id) => {
    // Get index of person from id
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    // Get a copy of the person object using index and update their name using the event target value
    // ALTERNATIVE SYNTAX: const person = Object.assign({}, this.state.persons[personIndex])
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    // Get a copy of the persons array and replace the person object at the index with our new person object
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // Update the state with our new copy of the persons array
    // State updated here using a function that has prevState as a property as it needs the previous state in order to update changeCounter
    this.setState((prevState) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <WithStyles styles={styles.App}>
        <Cockpit
          title={this.props.appTitle}
          personsLength={this.state.persons.length.valueOf()}
          showPersons={this.state.showPersons}
          toggle={this.togglePersonsHandler}
        />
        {persons}
      </WithStyles>
    );
  }
}

export default App;
