import React from "react";
import {
  Container,
  ContainerWrapper,
  SecondH1,
  SecondP,
  SecondData,
  SecondStatistics,
  StatisticsInnerBox,
  InnerBoxes,
  InnerBoxeSeven
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
        <SecondStatistics>
          <StatisticsInnerBox>
            <InnerBoxes grid="one">MRR YTD $25,215 </InnerBoxes>
            <InnerBoxes grid="two">New Wins 76</InnerBoxes>
            <InnerBoxes grid="three">New Trails 2,140</InnerBoxes>
            <InnerBoxes grid="four">Leads by plan</InnerBoxes>
            <InnerBoxes grid="five">Leads by plan</InnerBoxes>
            <InnerBoxes grid="six">Leads by plan</InnerBoxes>
            <InnerBoxeSeven>Leads by plan</InnerBoxeSeven>
          </StatisticsInnerBox>
        </SecondStatistics>
      </ContainerWrapper>
    </Container>
  );
};

export default ContentSecond;

// export const ContentSecond = () => {
//   return (
//     <Container>
//       <ContainerWrapper>
//         <SecondData>
//           <SecondH1>
//             Add “I can do anything with data” to your vocabulary
//           </SecondH1>
//           <SecondP>
//             Inspire confidence in your decision-making with accessible analytics
//             for leaders and teams.
//           </SecondP>
//         </SecondData>
//         <SecondStatistics>
//           <StatisticsInnerBox>
//             <InnerBoxesOne>MRR YTD $25,215</InnerBoxesOne>
//             <InnerBoxesTwo>New Wins 76</InnerBoxesTwo>
//             <InnerBoxesThree>New Trails 2,140</InnerBoxesThree>
//             <InnerBoxesFour>Leads by plan</InnerBoxesFour>
//             <InnerBoxesFive>Leads by plan</InnerBoxesFive>
//             <InnerBoxesSix>Leads by plan</InnerBoxesSix>
//             <InnerBoxesSeven>Leads by plan</InnerBoxesSeven>
//           </StatisticsInnerBox>
//         </SecondStatistics>
//       </ContainerWrapper>
//     </Container>
//   );
// };

// export default ContentSecond;
