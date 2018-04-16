import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import '../App.css';

class PatternsInStock extends Component {
  state = {
    patterns: [],
    patternname: "",
    patterncategory: "",
    patternnumber: "",
    patternbrand: "",
    patternsizes: "",
    patternstatus: ""
  };

  componentDidMount() {
    this.loadPatterns();
  }

  loadPatterns = () => {
    API.getPatterns()
      .then(res =>
        this.setState({ patterns: res.data, patternname: "", patterncategory: "", patternnumber: "", patternbrand: "", patternsizes: "" })
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
    if (this.state.patternname && this.state.patterncategory && this.state.patternnumber && this.state.patternbrand && this.state.patternsizes && this.state.patternstatus) {
      API.savePattern({
        patternname: this.state.patternname,
        patterncategory: this.state.patterncategory,
        patternnumber: this.state.patternnumber,
        patternbrand: this.state.patternbrand,
        patternsizes: this.state.patternsizes,
        patternstatus: this.state.patternstatus
      })
        .then(res => this.loadPatterns())
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
              <Card headertext="Patterns In Stock" {...this.props} id="patterninstock">
              {this.state.patterns.length ? (
                  <List>
                    {this.state.patterns.map(pattern => {
                      if (pattern.patternstatus === "in-stock") {
                        return (
                          <ListItem key={pattern._id}>
                            <a href={"/patterns/" + pattern._id} />
                            <ul>
                              <li>{pattern.patternname} {pattern.patterncategory} {pattern.patternnumber} {pattern.patternbrand} {pattern.patternsizes} {pattern.patternstatus}</li>
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
              <form style={{ position: "relative", float: "left", left: 50, margin: 10, top: 150, width: 500 }}>
                <Input
                  value={this.state.patternname}
                  onChange={this.handleInputChange}
                  name="patternname"
                  placeholder="Pattern Name (required)"
                />
                <Input
                  value={this.state.patterncategory}
                  onChange={this.handleInputChange}
                  name="patterncategory"
                  placeholder="Pattern Category (required)"
                />
                <Input
                  value={this.state.patternnumber}
                  onChange={this.handleInputChange}
                  name="patternnumber"
                  placeholder="Pattern Number (required)"
                />
                <Input
                  value={this.state.patternbrand}
                  onChange={this.handleInputChange}
                  name="patternbrand"
                  placeholder="Pattern Brand (required)"
                />
                <Input
                  value={this.state.patternstatus}
                  onChange={this.handleInputChange}
                  name="patternstatus"
                  placeholder="Pattern Status (in-stock, damaged, wishlist)"
                />
                <TextArea
                  value={this.state.patternsizes}
                  onChange={this.handleInputChange}
                  name="patternsizes"
                  placeholder="Pattern Sizes (required)"
                />
                <Input
                  value={this.state.filepicture}
                  onChange={this.handlePictureChange}
                  type="file"
                  name="picture"
                  placeholder="Pattern Picture (required)"
                />
                <FormBtn
                  onClick={this.handleFormSumbit}
                >
                  Submit Pattern
              </FormBtn>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PatternsInStock;