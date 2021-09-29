import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "./style";
import "../index.css";

import Header from "../components/Header";
import ContentFirst from "../components/Content/ContentFirst";
import ContentSecond from "../components/Content/ContentSecond";
import ContentThird from "../components/Content/ContentThird";
import ContentFourth from "../components/Content/ContentFourth";
import ContentFifth from "../components/Content/ContentFifth";
import ContentSixth from "../components/Content/ContentSixth";
import Footer from "../components/Footer/index";

export const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <ContentFirst />
        {/* margin top: 191px */}
        <ContentSecond />
        {/* 369.5px */}
        <ContentThird />
        {/* 228px */}
        <ContentFourth />
        {/* 252px */}
        <ContentFifth />
        {/* 252px */}
        <ContentSixth />
        {/* 192px */}
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
