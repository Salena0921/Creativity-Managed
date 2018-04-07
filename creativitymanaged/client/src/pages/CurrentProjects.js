import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Nav from "../components/Nav";
import DesignForm from "../components/DesignForm";

class CurrentProjects extends Component {

  render() {
    return (
      <div>
        <Nav handleLogout={this.props.handleLogout}/>
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Card headertext="Current Projects" {...this.props}>
              hello world
            </Card>
          </Col>
          <Col size="md-6">
            <DesignForm />
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default CurrentProjects;