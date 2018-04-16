import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import '../App.css';


class CurrentProjects extends Component {
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handlePictureChange = event => {
    const { name, value } = event.target;
    const file = event.target.files[0];
    console.log(event.target.files);
    //  const file = ;
    if (file == null) {
      return alert('No file selected.');
    }
    this.getSignedRequest(file);
  }

  handleFormSumbit = event => {
    console.log("submit button")
    event.preventDefault();
    if (this.state.designname && this.state.designconcept && this.state.designdescription && this.state.designstatus) {
      API.saveDesign({
        designname: this.state.designname,
        designconcept: this.state.designconcept,
        designdescription: this.state.designdescription,
        designstatus: this.state.designstatus
      })
        .then(res => this.loadDesigns())
        .catch(err => console.log(err));
    }
  };

  uploadFile = (file, signedRequest, url) => {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          document.getElementById('preview').src = url;
          document.getElementById('avatar-url').value = url;
        }
        else {
          alert('Could not upload file.');
        }
      }
    };
    xhr.send(file);
  }

  getSignedRequest = (file) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = JSON.stringify(xhr.responseText);
          this.uploadFile(file, response.signedRequest, response.url);
        }
        else {
          alert('Could not get signed URL.');
        }
      }
    };
    xhr.send();
  }

  render() {
    return (
      <div className="currentproject">
        <Container fluid>
          <Row>
            <Nav handleLogout={this.props.handleLogout} />
          </Row>
          <Row>
            <Col size="xl-6">
              <Card headertext="Current Projects" {...this.props} id="currentcard">
                {this.state.designs.length ? (
                  <List>
                    {this.state.designs.map(design => {
                      if (design.designstatus === "current") {
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
              <form style={{ position: "relative", float: "left", left: 50, margin: 10, top: 150, width: 500 }}>
                <Input
                  value={this.state.designname}
                  onChange={this.handleInputChange}
                  name="designname"
                  placeholder="Design Name (required)"
                />
                <Input
                  value={this.state.designconcept}
                  onChange={this.handleInputChange}
                  name="designconcept"
                  placeholder="Design Concept (required)"
                />
                <Input
                  value={this.state.designstatus}
                  onChange={this.handleInputChange}
                  name="designstatus"
                  placeholder="Design Status (current, future, completed)"
                />
                <TextArea
                  value={this.state.designdescription}
                  onChange={this.handleInputChange}
                  name="designdescription"
                  placeholder="Design Description (Optional)"
                />
                <Input
                  value={this.state.filepicture}
                  onChange={this.handlePictureChange}
                  type="file"
                  name="picture"
                  placeholder="Design Picture (required)"
                />
                <FormBtn
                  onClick={this.handleFormSumbit}>
                  Submit Design
                  </FormBtn>

              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CurrentProjects;