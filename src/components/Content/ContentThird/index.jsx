import React from "react";
import {
  Container,
  Wrapper,
  WrapperData,
  WrapperH1,
  WrapperP,
  TopImg
} from "./style";
import Top from "../../../Assets/img/Third/top.svg";
import BackTop from "../../../Assets/img/Third/top2.svg";

export const ContentThird = () => {
  return (
    <Container>
      <Wrapper>
        <TopImg src={BackTop} alt="alt" />
        <TopImg src={Top} alt="alt" />
      </Wrapper>
      <WrapperData>
        <WrapperH1>Pull yourself out of the spreadsheet haze</WrapperH1>
        <WrapperP>
          Find clarity in your data. Bring all of your metrics together in one
          place so you and your team can validate business decisions from a
          single source of truth.
        </WrapperP>
      </WrapperData>
    </Container>
  );
};

export default ContentThird;
