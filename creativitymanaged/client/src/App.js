import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

import HomePage from "./pages/HomePage";
import Admin from "./pages/AdminHome";
import CurrentProjects from "./pages/CurrentProjects";
import CompletedFutureProjects from "./pages/CandFProjects";
import PatternsInStock from "./pages/PatternsInStock";
import PatternsDW from "./pages/PatternsDandW";
import FabricsInStock from "./pages/FabricsInStock";
import FabricsHalfOrLess from "./pages/FabricsHalforLess";

class App extends Component {
  state = {
    username: "",
    password: "",
    auth: {
      userId: "",
      username: "",
      isAuthenticated: false
    }
  };

  componentWillMount() {
    axios.get("/auth/isAuthenticated").then((result) => {
      const { userId, isAuthenticated, username } = result.data
      this.setState({
        auth: {
          userId,
          isAuthenticated,
          username
        }
      });
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({
      username: "",
      password: ""
    });
    const { name } = event.target;
    axios.post(name, newUser).then((data) => {
      if (data.data.isAuthenticated) {
        const { userId, isAuthenticated, username } = data.data;
        this.setState({
          auth: {
            userId,
            isAuthenticated,
            username
          }
        });
      }
    });
  }

  handleLogout = (event) => {
    event.preventDefault();
    axios.get("/auth/logout").then((result) => {
      this.setState({
        auth: {
          userId: "",
          username: "",
          isAuthenticated: false
        }
      });
    })
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router>
        <div>          
          <Route exact path="/" render={() => {
            if (loggedIn) {
              return <Redirect to="/adminhome" />
            } else {
              return <SignIn
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                email={this.state.email}
                password={this.state.password}
              />
            }
          }} />
          <Route exact path="/signup" render={() => {
            if (loggedIn) {
              return <Redirect to="/adminhome" />
            } else {
              return <SignUp
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                email={this.state.email}
                password={this.state.password}
              />
            }
          }} />
          {/* <Route exact path="/home" render={() => {
            if (!loggedIn) {
              return <Redirect to="/" />
            } else {
              return <Home handleLogout={this.handleLogout} auth={this.state.auth} />
            }
          }
          } /> */}
          <Route exact path="/home" component={HomePage} render={() => {
            if (!loggedIn) {
              return <Redirect to="/adminhome" />
            } else {
              return <Home handleLogout={this.handleLogout} auth={this.state.auth} />
            }
          }
          } />          
          <Route exact path="/adminhome" render={ ()=>{return <Admin />} } />
          <Route exact path="/current-projects" render={()=>{return <CurrentProjects handleLogout={this.handleLogout} />}} />
          <Route exact path="/completedfuture" component={CompletedFutureProjects} />
          <Route exact path="/patterns-in-stock" component={PatternsInStock} />
          <Route exact path="/damagedwishlist-patterns" component={PatternsDW} />
          <Route exact path="/fabrics-in-stock" component={FabricsInStock} />
          <Route exact path="/fabricshalfyardunder" component={FabricsHalfOrLess} />
        </div>
      </Router>

    );
  }
}

export default App;