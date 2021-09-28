import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 64px 0 0 0;
  align-items: center;
  width: 100%;
  height: 713px;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ left }) => (left ? "column" : "center")};
  width: ${({ left }) => (left ? "467px" : "701px")};
  height: ${({ left }) => (left ? "474px" : "713px")};
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 378px;
`;

export const DataH1 = styled.h1`
  width: 485px;
  height: 212px;
  font-style: normal;
  font-weight: 800;
  font-size: 86px;
  line-height: 106px;
  letter-spacing: 2.64px;
  color: #21264f;
  margin-bottom: 12px;
`;
export const DataP = styled.p`
  width: 445px;
  height: 154px;
  height: 48px;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 38px;
  color: #21264f;
  margin: 0;
`;

export const DataButtons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: auto;
`;

export const Buttons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ demo }) => (demo ? "147px" : "247px")};
  height: ${({ demo }) => (demo ? "28px" : "48px")};
  margin-left: ${({ demo }) => (demo ? "12px" : "0px")};
  font-weight: 800;
  font-size: 16px;
  line-height: ${({ demo }) => (demo ? "27px" : "16px")};
  background: ${({ demo }) => (demo ? "none" : "#21264f")};
  border: none;
  border-radius: 32px;
  color: ${({ demo }) => (demo ? "#21264F" : "#FFF")};
`;

export const ManGlass = styled.img`
  width: 100%;
  height: 713px;
`;
