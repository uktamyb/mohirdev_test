import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Container } from "./style";

import Header from "../Header";
import Content from "../Content";
import Footer from "../Content";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Header />
          {/* <Content /> */}
          {/* 192px */}
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
