import React, { Component } from "react";
import Card from "../components/Card";
import { Col, Row, Container } from "../components/Grid";
import PatternForm from "../components/PatternForm";
import Nav from "../components/Nav";

class PatternsInStock extends Component {

  render() {
    return (
      <div>
        <Nav handleLogout={this.props.handleLogout} />
        <Container fluid>
          <Row>
            <Col size="md-6">
              <Card headertext="Patterns In Stock" {...this.props}>
                hello world
              </Card>
            </Col>
            <Col size="md-6">
              <PatternForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PatternsInStock;