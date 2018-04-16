import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import '../App.css';

class FabricsInStock extends Component {
  state = {
    fabrics: [],
    fabricname: "",
    fabrictype: "",
    fabricyardage: "",
    fabricwashing: ""
  };

  componentDidMount() {
    this.loadFabrics();
  }

  loadFabrics = () => {
    API.getFabrics()
      .then(res =>
        this.setState({ fabrics: res.data, fabricname: "", fabrictype: "", fabricyardage: "", fabricwashing: "" })
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
    console.log("submit button")
    event.preventDefault();
    if (this.state.fabricname && this.state.fabrictype && this.state.fabricyardage && this.state.fabricwashing ) {
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
        <Container fluid>
          <Row>
            <Nav handleLogout={this.props.handleLogout} />
          </Row>
          <Row>
            <Col size="xl-6">
              <Card headertext="Fabrics In Stock" {...this.props} id="fabricinstock">
                {this.state.fabrics.length ? (
                  <List>
                    {this.state.fabrics.map(fabric => {
                      if (fabric.fabricyardage >= 0.5) {
                        return (
                          <ListItem key={fabric._id}>
                            <a href={"/fabrics/" + fabric._id} />
                            <ul>
                              <li>{fabric.fabricname} {fabric.fabrictype} {fabric.fabricyardage} {fabric.fabricwashing} {fabric.fabricstatus}</li>
                            </ul>
                          </ListItem>
                        );
                      }
                      else {
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
              <form style={{ position: "relative", float: "left", left: 50, margin: 10, top: 150, width: 500 }}>
                <Input
                  value={this.state.fabricname}
                  onChange={this.handleInputChange}
                  name="fabricname"
                  placeholder="Fabric Name (required)"
                />
                <Input
                  value={this.state.fabrictype}
                  onChange={this.handleInputChange}
                  name="fabrictype"
                  placeholder="Fabric Type (required)"
                />
                <Input
                  value={this.state.fabricyardage}
                  onChange={this.handleInputChange}
                  name="fabricyardage"
                  placeholder="Fabric Yardage (required)"
                />
                <TextArea
                  value={this.state.fabricwashing}
                  onChange={this.handleInputChange}
                  name="fabricwashing"
                  placeholder="Fabric Washing Instructions (Optional)"
                />
                <Input
                  value={this.state.filepicture}
                  onChange={this.handlePictureChange}
                  type="file"
                  name="picture"
                  placeholder="Fabric Picture (required)"
                />
                <FormBtn
                  onClick={this.handleFormSumbit}
                >
                  Submit Fabric
              </FormBtn>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FabricsInStock;