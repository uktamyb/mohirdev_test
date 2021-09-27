import React from "react";
import {
  Container,
  ContainerWrapper,
  Wrapper,
  ManGlass,
  Data,
  DataButtons,
  DataH1,
  DataP,
  Buttons
} from "./style";
import manGlassImg from "../../../Assets/img/man_glass.svg";

export const ContentFirst = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Wrapper left>
          <Data>
            <DataH1>Succeed with data</DataH1>
            <DataP>
              PowerMetrics is a lightweight BI tool that helps you explore and
              share the right insights at the right time.
            </DataP>
          </Data>
          <DataButtons>
            <Buttons>Get Power Metrics Free</Buttons>
            <Buttons demo>Request a Demo</Buttons>
          </DataButtons>
        </Wrapper>
        <Wrapper>
          <ManGlass src={manGlassImg} alt="alt" />
        </Wrapper>
      </ContainerWrapper>
    </Container>
  );
};

export default ContentFirst;
