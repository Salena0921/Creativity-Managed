import React, { Component } from "react";
import Nav from "./Nav";
import AdminHome from "../../pages/AdminHome";
import PatternsInStock from "../../pages/PatternsInStock";


class Portfolio extends Component {
  state = {
    currentPage: "AdminHome"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "AdminHome") {
      return <AdminHome />;
    } else if (this.state.currentPage === "PatternsInStock") {
      return <PatternsInStock />;
    } 
    // else if (this.state.currentPage === "Blog") {
    //   return <Blog />;
    // } else {
    //   return <Contact />;
    // }
  };

  render() {
    return (
      <div>
        <Nav
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;