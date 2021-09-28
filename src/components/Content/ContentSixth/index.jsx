import React from "react";
import {
  Container,
  Wrapper,
  WrapperData,
  WrapperH1,
  WrapperP,
  Buttons
} from "./style";

export const ContentSixth = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperData>
          <WrapperH1>
            Take action. <br /> Get results.
          </WrapperH1>
          <WrapperP>
            Our customers love Klipfolio because it brings focus, agility, and
            confidence to their work. It's for people who take action and get
            results. Sound like you? Let's get started.
          </WrapperP>
          <Buttons>Get PowerMetrics Free</Buttons>
        </WrapperData>
      </Wrapper>
    </Container>
  );
};

export default ContentSixth;
