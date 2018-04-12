import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { List, ListItem } from "../components/List";
import FabricForm from "../components/FabricForm";
import API from "../utils/API";
import '../App.css';

class FabricsInStock extends Component {
  state = {
    fabrics:[],
    fabricname: "",
    fabrictype: "",
    fabricyardage: "",
    fabricwashing: ""
  };

  componentDidMount(){
    this.loadFabrics();
  }

  loadFabrics = () => {
    API.getFabrics()
    .then(res =>
      this.setState({ fabrics: res.data, fabricname: "", fabrictype: "", fabricyardage: "", fabricwashing: ""})
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
    if (this.state.fabricname && this.state.fabrictype && this.state.fabricyardage) {
      API.saveFabric({
        fabricname: this.state.fabricname,
        fabrictype: this.state.fabrictype,
        fabricyardage: this.state.fabricyardage,
        fabricwashing: this.state.fabricwashing
      })
        .then(res => this.loadFabrics())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Nav handleLogout={this.props.handleLogout} />
      <Container fluid>
        <Row>
          <Col size="md-4">
            <Card headertext="Fabrics In Stock" {...this.props} id="fabricinstock">
            {this.state.fabrics.length ? (
                  <List>
                    {this.state.fabrics.map(fabric => {
                      return (
                        <ListItem key={fabric._id}>                        
                          <a href={"/fabrics/" + fabric._id} />
                          <ul>
                            <li>{fabric.fabricname} {fabric.fabrictype} {fabric.fabricyardage} {fabric.fabricwashing}</li>                            
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
            <FabricForm handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSumbit}/>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default FabricsInStock;