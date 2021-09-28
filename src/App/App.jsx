import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "./style";

import Header from "../components/Header";
import ContentFirst from "../components/Content/ContentFirst";
import ContentSecond from "../components/Content/ContentSecond";
// import ContentThird from "../Content";
// import ContentFourth from "../Content";
// import ContentFifth from "../Content";
// import ContentSixth from "../Content";

export const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <ContentFirst />
        {/* margin top: 191px */}
        <ContentSecond />
        {/* 369.5px */}
        {/* <ContentThird /> */}
        {/* 228px */}
        {/* <ContentFourth /> */}
        {/* 252px */}
        {/* <ContentFifth /> */}
        {/* 252px */}
        {/* <ContentSixth /> */}
        {/* 192px */}
      </Container>
    </Router>
  );
};

export default App;
