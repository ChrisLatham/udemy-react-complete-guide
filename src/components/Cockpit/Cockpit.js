import React, { useRef, useEffect, useContext } from "react";
import styles from "./Cockpit.module.css";
import AuthenticationContext from "../../context/AuthenticationContext";

const Cockpit = ({ personsLength, showPersons, toggle, title }) => {
  const authContext = useContext(AuthenticationContext);
  const toggleButtonRef = useRef({});
  useEffect(() => {
    toggleButtonRef.current.click();
  }, []);
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
      <button ref={toggleButtonRef} className={styles.button} onClick={toggle}>
        {buttonText}
      </button>
      <button className={styles.button} onClick={authContext.login}>
        Log In
      </button>
    </div>
  );
};

export default Cockpit;
