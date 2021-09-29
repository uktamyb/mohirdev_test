import styled from "styled-components";
import bgImg from "../Assets/img/top-background.svg";
import bgImgBottom from "../Assets/img/bottom-background.svg";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 1440px;
  height: 7354px;
  margin: 0 auto;
  padding: 0;
  background: url(${bgImg}) no-repeat 0% 2%,
    url(${bgImgBottom}) no-repeat 0% 57%;
`;
