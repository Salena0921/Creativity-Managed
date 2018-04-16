import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Card from "../components/Card";
import Nav from "../components/Nav";
import API from "../utils/API";

class PatternsDW extends Component {
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
              {this.state.patterns.length ? (
                  <List>
                    {this.state.patterns.map(pattern => {
                      if (pattern.patternstatus === "damaged") {
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
            <Col size="md-6">
              <Card headertext="Wishlist Patterns" {...this.props}>
              {this.state.patterns.length ? (
                  <List>
                    {this.state.patterns.map(pattern => {
                      if (pattern.patternstatus === "wishlist") {
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
          </Row>
        </Container>
      </div>
    );
  }
}

export default PatternsDW;