import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import NavMenu from "../components/NavMenu";
import Jumbotron from "../components/Jumbotron";
import '../App.css';

class Admin extends Component {

  render() {
    return (
      <div className="adminpage" >        
        <Container fluid>
          <Row>
            <Jumbotron>
              <h1>Midnight Fairy Realm Designs</h1>
            </Jumbotron>  
          </Row>    
          <Row>
            <Col size="md-4">
              <NavMenu handleLogout={this.props.handleLogout} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Admin;