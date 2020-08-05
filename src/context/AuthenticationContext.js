import React from "react";

const AuthenticationContext = React.createContext({
  isAuthenticated: false,
  login: () => {},
});

export default AuthenticationContext;
