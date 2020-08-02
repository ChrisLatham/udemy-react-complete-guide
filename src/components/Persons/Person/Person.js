import React from "react";
import "./Person.css";

const person = ({ name, age, click, changed, children }) => {
  return (
    //<div className="Person" style={style}>
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
};

export default person;
