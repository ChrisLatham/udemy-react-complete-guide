import React from "react";
import styles from "./Cockpit.module.css";

const cockpit = ({ personsLength, showPersons, toggle, title }) => {
  let buttonText = "Show Persons";
  if (showPersons) {
    buttonText = "Hide Persons";
  }

  let classes = [];
  if (personsLength <= 2) {
    classes.push(styles.red);
  }
  if (personsLength <= 1) {
    classes.push(styles.bold);
  }
  return (
    <div>
      <h1>{title}</h1>
      <p className={classes.join(" ")}>
        There are {personsLength} items in this list.
      </p>
      <button className={styles.button} onClick={toggle}>
        {buttonText}
      </button>
    </div>
  );
};

export default cockpit;
