import React from "react";
import "./Cockpit.css";

const cockpit = ({ persons, showPersons, toggle, title }) => {
  let buttonText = "Show Persons";
  if (showPersons) {
    buttonText = "Hide Persons";
  }

  let classes = [];
  if (persons.length <= 2) {
    classes.push("red");
  }
  if (persons.length <= 1) {
    classes.push("bold");
  }
  return (
    <div>
      <h1>{title}</h1>
      <p className={classes.join(" ")}>
        There are {persons.length} items in this list.
      </p>
      <button className="button" onClick={toggle}>
        {buttonText}
      </button>
    </div>
  );
};

export default cockpit;
