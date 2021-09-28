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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 664px;
  left: 7%;
  right: 7%;
  top: 496.56px;
  filter: drop-shadow(0px 44px 44px rgba(33, 38, 79, 0.2));
  border-radius: 32px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid red;
`;

export const StatisticsInnerBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 228px);
  grid-template-rows: repeat(3, 236px 160px 160px);
  width: 992px;
  height: 620px;
  grid-gap: 16px;
  padding: 16px;
  background-color: #f6f8fe;
  border-radius: 40px;
`;

const innerBoxesType = (grid) => {
  switch (grid) {
    case "one":
      return "1 / 2";
    case "two":
      return "2 / 3";
    case "three":
      return "3 / 4";
    case "four":
      return "4 / 5";
    case "five":
      return "1 / 3";
    case "six":
      return "1 / 3";
    default:
      return "unset";
  }
};

export const InnerBoxes = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  padding: 14.34px;
  background: #fff;
  border-radius: 40px;
  color: #000;
  grid-column: ${({ grid }) => innerBoxesType(grid)};
`;

export const InnerBoxeSeven = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  padding: 14.34px;
  background: #fff;
  border-radius: 40px;
  grid-column: 3 / 5;
  grid-row: 2 / 4;
`;
// export const InnerBoxesTwo = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 14.34px;
//   background: red;
//   border-radius: 40px;
// `;
// export const InnerBoxesThree = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 14.34px;
//   background: red;
//   border-radius: 40px;
// `;
// export const InnerBoxesFour = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 14.34px;
//   background: red;
//   border-radius: 40px;
// `;
// export const InnerBoxesFive = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 14.34px;
//   background: red;
//   border-radius: 40px;
//   grid-column: 1 / 3;
// `;
// export const InnerBoxesSix = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 14.34px;
//   background: red;
//   border-radius: 40px;
//   grid-column: 1 / 3;
//   grid-row: 3 / 4;
// `;
// export const InnerBoxesSeven = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 14.34px;
//   background: red;
//   border-radius: 40px;
//   grid-column: 3 / 5;
//   grid-row: 2 / 4;
// `;

export const Customer = styled.div`
  width: 472px;
  height: 160px;
`;
