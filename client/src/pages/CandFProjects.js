import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Nav from "../components/Nav";
import Card from "../components/Card";
import API from "../utils/API";

class CompletedFutureProjects extends Component {
  state = {
    designs: [],
    designname: "",
    designconcept: "",
    designdescription: "",
    filepicture: "",
    designstatus: ""
  };

  componentDidMount() {
    this.loadDesigns();
  }

  loadDesigns = () => {
    API.getDesigns()
      .then(res =>
        this.setState({ designs: res.data, designname: "", designconcept: "", designdescription: "" })
      )
      .catch(err => console.log(err));
  }

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
                {this.state.designs.length ? (
                  <List>
                    {this.state.designs.map(design => {
                      if (design.designstatus === "completed") {
                        return (
                          <ListItem key={design._id}>
                            <a href={"/designs/" + design._id} />
                            <ul>
                              <li>{design.designname} {design.designconcept} {design.designdescription} {design.designstatus}</li>
                            </ul>
                          </ListItem>
                        );
                      }
                      else{
                        return null;
                      }
                    })}
                  </List>
                ) : (
                    <h3>No Results to Display</h3>
                  )}              
               </Card>
              </Col>
              <Col size="xl-6">
                <Card headertext="Future Projects" {...this.props}>
                {this.state.designs.length ? (
                  <List>
                    {this.state.designs.map(design => {
                      if (design.designstatus === "future") {
                        return (
                          <ListItem key={design._id}>
                            <a href={"/designs/" + design._id} />
                            <ul>
                              <li>{design.designname} {design.designconcept} {design.designdescription} {design.designstatus}</li>
                            </ul>
                          </ListItem>
                        );
                      }
                      else{
                        return null;
                      }
                    })}
                  </List>
                ) : (
                    <h3>No Results to Display</h3>
                  )}         
              </Card>
              </Col>
            </Row>
          </Container>
      </div>
        );
      }
    }
    
export default CompletedFutureProjects;