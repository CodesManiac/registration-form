import React, { Component } from "react";
import {Link} from 'react-router-dom'

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailAddress: "",
      password:"",
      ready:false
    };
    this.saveData=this.saveData.bind(this);
  }
  fieldChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  saveData = event=>{
    alert(`You're welcome ${this.state.emailAddress}`);
    event.preventDefault();
  }
  

  render() {
      const{emailAddress,password}=this.state
    return (
      <form onSubmit={this.saveData}>
        <h3>Login here</h3>
        <input
          type="email"
          placeholder="Email Address"
          name="emailAddress"
          value={emailAddress}
          onChange={this.fieldChange}
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={this.fieldChange}
        />
        <br />
    
        <br />
        {/* <input type="button" value="Login" /> */}
        <button>Login</button>
        <p>Don't have an account? <Link to="/" id="login" className="li">Register</Link></p>

      </form>
    );
  }
}

export default LoginForm;
