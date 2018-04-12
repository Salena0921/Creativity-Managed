import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { List, ListItem } from "../components/List";
import PatternForm from "../components/PatternForm";
import API from "../utils/API";
import '../App.css';

class PatternsInStock extends Component {
  state = {
    patterns: [],
    patternname: "",
    patterncategory: "",
    patternnumber: "",
    patternbrand: "",
    patternsizes: ""
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
    if (this.state.patternname && this.state.patterncategory && this.state.patternnumber && this.state.patternbrand && this.state.patternsizes) {
      API.savePattern({
        patternname: this.state.patternname,
        patterncategory: this.state.patterncategory,
        patternnumber: this.state.patternnumber,
        patternbrand: this.state.patternbrand,
        patternsizes: this.state.patternsizes
      })
        .then(res => this.loadPatterns())
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
              <Card headertext="Patterns In Stock" {...this.props} id="patterninstock">
                {this.state.patterns.length ? (
                  <List>
                    {this.state.patterns.map(pattern => {
                      return (
                        <ListItem key={pattern._id}>
                          <a href={"/patterns/" + pattern._id} />
                          <ul>
                            <li>{pattern.patternname} {pattern.patterncategory} {pattern.patternnumber} {pattern.patternbrand} {pattern.patternsizes}</li>
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
              <PatternForm handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSumbit} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PatternsInStock;