import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 64px 0 0 0;
  align-items: center;
  width: 100%;
  height: 1000px;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 1200px;
  height: 940px;
  border: 1px solid red;
  background: #303881;
  border-radius: 40px;
`;

export const SecondData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 700px;
  height: 373px;
  margin-top: 60px;
  border: 1px solid red;
`;

export const SecondH1 = styled.h1`
  width: 771px;
  height: 245px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 66px;
  line-height: 82px;
  letter-spacing: 2.04px;
  color: #ffffff;
`;

export const SecondP = styled.p`
  width: 639px;
  height: 116px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
`;

export const SecondStatistics = styled.div`
  position: absolute;
  height: 664px;
  left: 7%;
  right: 7%;
  top: 496.56px;
  filter: drop-shadow(0px 44px 44px rgba(33, 38, 79, 0.2));
  border-radius: 32px;
  background-color: #fff;
  border: 1px solid red;
`;
