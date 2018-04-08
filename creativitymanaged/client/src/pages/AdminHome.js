import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import NavMenu from "../components/NavMenu";

class Admin extends Component {

  render() {
    return (
      <div>        
        <Container fluid>
          <Row>
            <Col size="md-6">
              <NavMenu handleLogout={this.props.handleLogout} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Admin;