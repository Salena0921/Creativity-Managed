import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import '../App.css';


class HomePage extends Component {

  render() {
    return (
      <div>
        <Container>        
          <Row>
            <SignIn/>
          </Row>
          <Row>
            <SignUp />
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;