import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import Card from "../components/Card"

class CompletedFutureProjects extends Component {

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Nav handleLogout={this.props.handleLogout} />
          </Row>          
          <Row>
              <Col size="xl-6">
                <Card headertext="Completed Projects" {...this.props}>
                  hello world
               </Card>
              </Col>
              <Col size="xl-6">
                <Card headertext="Future Projects" {...this.props}>
                  hello world
              </Card>
              </Col>
            </Row>
          </Container>
      </div>
        );
      }
    }
    
export default CompletedFutureProjects;