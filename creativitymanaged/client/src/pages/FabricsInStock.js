import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import FabricForm from "../components/FabricForm";
import Nav from "../components/Nav";

class FabricsInStock extends Component {

  render() {
    return (
      <div>
        <Nav handleLogout={this.props.handleLogout} />
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Card headertext="Fabrics In Stock" {...this.props}>
              hello world
            </Card>
          </Col>
          <Col size="md-6">
            <FabricForm />
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default FabricsInStock;