import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import '../App.css';

class ProjectPlan extends Component {
    
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Nav handleLogout={this.props.handleLogout} />
                    </Row>
                    <Row>
                        <Col size="xl-6">
                            <Card>
                               hello 
                            </Card>
                        </Col>
                        <Col size="xl-6">
                            <Card>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default ProjectPlan;