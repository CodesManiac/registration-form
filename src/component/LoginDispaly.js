import React, { Component } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import { Route, BrowserRouter as Router } from "react-router-dom";

class LoginDispaly extends Component {
  render() {
    return (
      // <RegistrationForm/>
      <Router>
        <Route  exact path="/" component={RegistrationForm}></Route>
        <Route path="/loginform" component={LoginForm}></Route>
      </Router>
    );
  }
}
export default LoginDispaly;
