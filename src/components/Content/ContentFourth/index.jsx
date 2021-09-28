import React from "react";
import {
  Container,
  Wrapper,
  WrapperData,
  WrapperH1,
  WrapperP,
  TopImg
} from "./style";
import topImg from "../../../Assets/img/Fourth/top.svg";

export const ContentFourth = () => {
  return (
    <Container>
      <Wrapper>
        <TopImg src={topImg} alt="alt" />
      </Wrapper>
      <WrapperData>
        <WrapperH1>Reach yout goals with confidence</WrapperH1>
        <WrapperP>
          Monitor and track your metrics in real time so you can celebrate your
          wins as they happen or address issues before it’s too late.
        </WrapperP>
      </WrapperData>
    </Container>
  );
};

export default ContentFourth;
