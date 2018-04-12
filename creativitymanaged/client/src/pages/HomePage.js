import React, { Component } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import '../App.css';
import { Container } from "../components/Grid";

class HomePage extends Component {

  render() {
    return (
      <div>
          <SignIn />
          <SignUp />        
      </div>
    );
  }
}

export default HomePage;