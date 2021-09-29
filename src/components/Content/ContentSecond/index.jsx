import React from "react";
import {
  Container,
  ContainerWrapper,
  SecondH1,
  SecondP,
  SecondData,
  SecondStatistics,
  // StatisticsInnerBox,
  // InnerBoxes,
  // InnerBoxeSeven,
  ImageIcon
  // Span,
  // InnerH1,
  // InnerH5,
  // InnerP,
  // LeadsBoxes
} from "./style";

import { ReactComponent as Facebook } from "../../../Assets/img/Second/facebook-icon.svg";
import { ReactComponent as Blue } from "../../../Assets/img/Second/blue.svg";
import { ReactComponent as Chart } from "../../../Assets/img/Second/chart.svg";
import { ReactComponent as Girl } from "../../../Assets/img/Second/girl.svg";
import { ReactComponent as Green } from "../../../Assets/img/Second/green.svg";
import { ReactComponent as Man } from "../../../Assets/img/Second/man1.svg";
import { ReactComponent as Qb } from "../../../Assets/img/Second/icons8-qbittorrent.svg";
import StatisticsBox from "../../../Assets/img/Second/whiteBoard.svg";

// import { ReactComponent as BlueBox } from "../../../Assets/img/Second/LeadsBoxes/blue.svg";
// import { ReactComponent as LightBlue } from "../../../Assets/img/Second/LeadsBoxes/lightBluer.svg";
// import { ReactComponent as DarkBlue } from "../../../Assets/img/Second/LeadsBoxes/darkBlue.svg";
// import { ReactComponent as WhiteBox } from "../../../Assets/img/Second/LeadsBoxes/WhiteBox.svg";
// import { ReactComponent as DarkerBlue } from "../../../Assets/img/Second/LeadsBoxes/darkerBlue.svg";
// import { ReactComponent as Black } from "../../../Assets/img/Second/LeadsBoxes/black.svg";
// import { ReactComponent as CustomerAquisition } from "../../../Assets/img/Second/CustomerAquisition.svg";
// import { ReactComponent as CustomerRetension } from "../../../Assets/img/Second/CustomerRetension.svg";
// import { ReactComponent as MRR } from "../../../Assets/img/Second/MRR.svg";

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
          <img src={StatisticsBox} alt="alt" />
          {/* <StatisticsInnerBox>
            <InnerBoxes grid="one">
              <Span>MRR YTD</Span>
              <InnerH1> $25,215</InnerH1>
              <InnerH5>↑ 5.7%</InnerH5>
              <InnerP>vs previous 30 days</InnerP>
            </InnerBoxes>
            <InnerBoxes grid="two">
              <Span>New wins</Span>
              <InnerH1> 76</InnerH1>
              <InnerH5>↑ 1.7%</InnerH5>
              <InnerP>vs previous 30 days</InnerP>
            </InnerBoxes>
            <InnerBoxes grid="three">
              <Span>New trails</Span>
              <InnerH1> 2,140</InnerH1>
              <InnerH5>↑ 2.1%</InnerH5>
              <InnerP>vs previous 30 days</InnerP>
            </InnerBoxes>
            <InnerBoxes grid="four">
              <Span>Leads by plan</Span>
              <LeadsBoxes>
                <LightBlue />
                <BlueBox />
                <WhiteBox />
                <LightBlue />
                <WhiteBox />
                <DarkerBlue />
                <DarkBlue />
                <Black />
              </LeadsBoxes>
            </InnerBoxes>
            <InnerBoxes grid="five">
              <Span>Customer Aquisition</Span>
              <CustomerAquisition />
            </InnerBoxes>
            <InnerBoxes grid="six">
              <CustomerRetension />
            </InnerBoxes>
            <InnerBoxeSeven>
              <MRR />
            </InnerBoxeSeven>
          </StatisticsInnerBox> */}
        </SecondStatistics>
        <ImageIcon top="facebook" left="facebook">
          <Facebook />
        </ImageIcon>
        <ImageIcon top="blue" left="blue">
          <Blue />
        </ImageIcon>
        <ImageIcon top="chart" left="chart">
          <Chart />
        </ImageIcon>
        <ImageIcon top="girl" left="girl">
          <Girl />
        </ImageIcon>
        <ImageIcon top="green" left="green">
          <Green />
        </ImageIcon>
        <ImageIcon top="man" left="man">
          <Man />
        </ImageIcon>
        <ImageIcon top="qb" left="qb">
          <Qb />
        </ImageIcon>
      </ContainerWrapper>
    </Container>
  );
};

export default ContentSecond;
