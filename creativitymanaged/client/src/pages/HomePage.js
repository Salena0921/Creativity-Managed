import React, {Component} from "react";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

class HomePage extends Component {    
  
  render() {
    return (
      <div>
        <Home />
        <SignIn />
        <SignUp />

      </div>
    );
  }
}
  
  export default HomePage;