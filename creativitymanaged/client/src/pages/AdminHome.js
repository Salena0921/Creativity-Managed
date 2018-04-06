import React, {Component} from "react";
import Nav from "../components/Nav";
import Home from "../components/Home"

class Admin extends Component {    
  
  render() {
    return (
      <div>
        <Nav />
        <Home />      
      </div>
    );
  }
}
  
  export default Admin;