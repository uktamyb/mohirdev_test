import React from "react";
import {
  Container,
  ContainerWrapper,
  SecondH1,
  SecondP,
  SecondData,
  SecondStatistics
} from "./style";

export const ContentSecond = () => {
  return (
    <Container>
      <ContainerWrapper>
        <SecondData>
          <SecondH1>
            Add “I can do anything with data” to your vocabulary
          </SecondH1>
          <SecondP>
            Inspire confidence in your decision-making with accessible analytics
            for leaders and teams.
          </SecondP>
        </SecondData>
        <SecondStatistics></SecondStatistics>
      </ContainerWrapper>
    </Container>
  );
};

export default ContentSecond;
