import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from "./components/Nav"
import Admin from "./pages/AdminHome"
import CurrentProjects from "./pages/CurrentProjects";
import CompletedFutureProjects from "./pages/CandFProjects";
import PatternsInStock from "./pages/PatternsInStock";
import PatternsDW from "./pages/PatternsDandW";
import FabricsInStock from "./pages/FabricsInStock";
import FabricsHalfOrLess from "./pages/FabricsHalforLess"

class PageRouter extends Component {

  render(){
    return(
        <Router>
          <div>
            <Nav />
            <Route exact path="/" pages={Admin} />
            <Route exact path="/current-projects" pages={CurrentProjects} />
            <Route exact path="/completedfuture" pages={CompletedFutureProjects} />
            <Route exact path="/patterns-in-stock" pages={PatternsInStock} />
            <Route exact path="/damagedwishlist-patterns" pages={PatternsDW} />
            <Route exact path="/fabrics-in-stock" pages={FabricsInStock} />
            <Route exact path="/fabricshalfyardunder" component={FabricsHalfOrLess} />
          </div>
        </Router>
    );
  };   
};

export default PageRouter;