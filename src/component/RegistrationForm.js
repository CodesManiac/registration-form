import React, { Component } from "react";
import {Link} from 'react-router-dom'

class RegistrationForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password:"",
      phone: "",
      residentialAddress: "",
      gender: "selectGender",
      
    };
    this.changeGender=this.changeGender.bind(this);
    this.saveData=this.saveData.bind(this);
  }
  fieldChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  changeGender(event){
    this.setState({
      gender: event.target.value,
    });
  };
  saveData = (event)=>{
    event.preventDefault();
    alert(`Welcome here ${this.state.firstName}`);
  }

  render() {
    const {firstName,lastName,emailAddress,password,phone,residentialAddress,gender}=this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Take a few minutes to sign up here</h3>

        <input
          type="text"
          placeholder="FirstName"
          name="firstName"
          value={firstName}
          onChange={this.fieldChange}
          required
        />
        <br />
        <input
          type="text"
          placeholder="LastName"
          name="lastName"
          value={lastName}
          onChange={this.fieldChange}
        />
        <br />

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

        <input
          type="number"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={this.fieldChange}
        />
        <br />
        <textarea
          placeholder="Residence"
          name="residentialAddress"
          value={ residentialAddress}
          rows={5}
          onChange={this.fieldChange}
        />
        <br />
        <select value ={gender} onChange={this.changeGender}>
          <option value="selectGender">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        {/* <input type="button" value="Submit" /> */}
        <button>Submit</button>
        <p>Already have an account? <Link to="/loginform" className="li">Login</Link></p>
      </form>
    );
  }
}

export default RegistrationForm;
