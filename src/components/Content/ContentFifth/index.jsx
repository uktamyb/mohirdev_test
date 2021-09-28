import React from "react";
import {
  Container,
  Wrapper,
  WrapperData,
  WrapperH1,
  WrapperP,
  TopImg
} from "./style";
import topImg from "../../../Assets/img/Fifth/topImg.svg";

export const ContentFifth = () => {
  return (
    <Container>
      <Wrapper>
        <TopImg src={topImg} alt="alt" />
      </Wrapper>
      <WrapperData>
        <WrapperH1>
          Share business insights before your team even asks for them
        </WrapperH1>
        <WrapperP>
          Lightweight, modern analytics that will have your team asking, “Hey,
          can I do that, too?” (Spoiler alert: Yes, they can!)
        </WrapperP>
      </WrapperData>
    </Container>
  );
};

export default ContentFifth;
