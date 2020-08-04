import React from "react";

const withStyles = (props) => (
  <div className={props.styles}>{props.children}</div>
);

export default withStyles;
