import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card"
import Nav from "../components/Nav";

class FabricsHalfOrLess extends Component {

  render() {
    return (
      <div>
        <Nav />
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Card headertext="Fabric Half Yard or Less" {...this.props}>
              hello world
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default FabricsHalfOrLess;