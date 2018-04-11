import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { List, ListItem } from "../components/List";
import DesignForm from "../components/DesignForm";
import API from "../utils/API";
import '../App.css';

class CurrentProjects extends Component {
  state = {
    designs:[],
    designname: "",
    designconcept: "",
    designdescription: ""
  };

  componentDidMount(){
    this.loadDesigns();
  }

  loadDesigns = () => {
    API.getDesigns()
    .then(res =>
      this.setState({ designs: res.data, designname: "", designconcept: "", designdescription: ""})
    )
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSumbit = event => {
    console.log ("submit button")
    event.preventDefault();
    if (this.state.designname && this.state.designconcept && this.state.designdescription) {
      API.saveDesign({
        designname: this.state.designname,
        designconcept: this.state.designconcept,
        designdescription: this.state.designdescription
      })
        .then(res => this.loadDesigns())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="currentproject">
        <Nav handleLogout={this.props.handleLogout} />
        <Container fluid>
          <Row>
            <Col size="md-4">
              <Card headertext="Current Projects" {...this.props} id="currentcard">
                {this.state.designs.length ? (
                  <List>
                    {this.state.designs.map(design => {
                      return (
                        <ListItem key={design._id}>                        
                          <a href={"/designs/" + design._id} />
                          <ul>
                            <li>{design.designname} {design.designconcept} {design.designdescription}</li>
                            
                          </ul>
                        </ListItem>
                      );
                    })}
                  </List>
                ) : (
                    <h3>No Results to Display</h3>
                  )}
              </Card>
            </Col>
            <Col size="md-6">
              <DesignForm handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSumbit}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CurrentProjects;