import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Nav from "../components/Nav";

class PatternsDW extends Component {

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Nav handleLogout={this.props.handleLogout} />
          </Row>
          <Row>
            <Col size="md-6">
              <Card headertext="Damaged Patterns" {...this.props}>
                hello world
            </Card>
            </Col>
            <Col size="md-6">
              <Card headertext="Wishlist Patterns" {...this.props}>
                hello world
            </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PatternsDW;