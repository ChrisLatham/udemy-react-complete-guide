import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manuel", age: 29 },
      { id: 3, name: "Stephanie", age: 26 },
    ],
    showPersons: false,
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
    this.setState({ persons: persons });
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
      <div className="App">
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          toggle={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
