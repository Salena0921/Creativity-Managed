import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Card from "../components/Card"
import Nav from "../components/Nav";
import API from "../utils/API";

class FabricsHalfOrLess extends Component {
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

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Nav handleLogout={this.props.handleLogout} />
          </Row>
          <Row>
            <Col size="md-6">
              <Card headertext="Fabric Half Yard or Less" {...this.props}>
                {this.state.fabrics.length ? (
                  <List>
                    {this.state.fabrics.map(fabric => {
                      if (fabric.fabricyardage <= 0.5) {
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
          </Row>
        </Container>
      </div>
    );
  }
}

export default FabricsHalfOrLess;