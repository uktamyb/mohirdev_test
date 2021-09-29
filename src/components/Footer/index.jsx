import React from "react";
import {
  Container,
  WrapperTop,
  InnerTop,
  InnerTopLink,
  linkStyles,
  InnerTopLinkBottom,
  Solutions,
  linkStyleBottom,
  WrapperCenter,
  InnerCenter,
  InnerCenterLeft,
  SocialCenter,
  InnerCenterRight,
  LinkA,
  DownloadCenter,
  WrapperBottom,
  InnerBottom,
  InnerBottomRight,
  InnerBottomLeft,
  Link,
  linkStyle,
  NavH4
} from "./style";

import footernavbottom from "../../Utils/footerNav";
import twitter from "../../Assets/img/Footer/twitter.svg";
import facebook from "../../Assets/img/Footer/facebook.svg";
import linkedin from "../../Assets/img/Footer/linkedin.svg";
import instagram from "../../Assets/img/Footer/instagram.svg";
import youtube from "../../Assets/img/Footer/youtube.svg";
import appStore from "../../Assets/img/Footer/appstore.svg";
import googlePlay from "../../Assets/img/Footer/googleplay.svg";
import topNav from "../../Utils/footerNavTop";
import navlinkSolutions from "../../Utils/footerNavTopCenter";
import navlinkTemplates from "../../Utils/footerNavTemplates.js";
import navlinkPartner from "../../Utils/footerNavPartner";
import navlinkAwards from "../../Utils/footerNavAwards";

const currentDate = new Date();
const year = currentDate.getFullYear();

export const Footer = () => {
  return (
    <Container>
      <WrapperTop>
        <InnerTop>
          <InnerTopLink>
            {topNav.map(({ title, path }) => (
              <Link to={path} style={linkStyles}>
                {title}
              </Link>
            ))}
          </InnerTopLink>
          <InnerTopLinkBottom>
            <Solutions height="solutions">
              <NavH4>Solutions</NavH4>
              {navlinkSolutions.map(({ title, path }) => (
                <Link to={path} style={linkStyleBottom}>
                  {title}
                </Link>
              ))}
            </Solutions>
            <Solutions height="templates">
              <NavH4>Templates and Examples</NavH4>
              {navlinkTemplates.map(({ title, path }) => (
                <Link to={path} style={linkStyleBottom}>
                  {title}
                </Link>
              ))}
            </Solutions>
            <Solutions height="partner">
              <NavH4>Partner With Us</NavH4>
              {navlinkPartner.map(({ title, path }) => (
                <Link to={path} style={linkStyleBottom}>
                  {title}
                </Link>
              ))}
            </Solutions>
            <Solutions height="award">
              <NavH4>Award Winning Support</NavH4>
              {navlinkAwards.map(({ title, path }) => (
                <Link to={path} style={linkStyleBottom}>
                  {title}
                </Link>
              ))}
            </Solutions>
          </InnerTopLinkBottom>
        </InnerTop>
      </WrapperTop>
      <WrapperCenter>
        <InnerCenter>
          <InnerCenterLeft>
            <SocialCenter src={twitter} alt="alt" />
            <SocialCenter src={facebook} alt="alt" />
            <SocialCenter src={linkedin} alt="alt" />
            <SocialCenter src={instagram} alt="alt" />
            <SocialCenter src={youtube} alt="alt" />
          </InnerCenterLeft>
          <InnerCenterRight>
            Available on:
            <LinkA
              href="https://play.google.com/store/apps/details?id=com.klipfolio.www"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DownloadCenter src={appStore} alt="alt" />
            </LinkA>
            <LinkA
              href="https://apps.apple.com/us/app/klipfolio/id1018846291?ls=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DownloadCenter src={googlePlay} alt="alt" />
            </LinkA>
          </InnerCenterRight>
        </InnerCenter>
      </WrapperCenter>

      <WrapperBottom>
        <InnerBottom>
          <InnerBottomLeft>
            Copyright © 2001 - {year} Klipfolio Inc. All Rights Reserved.
          </InnerBottomLeft>
          <InnerBottomRight>
            {footernavbottom.map(({ title, path }) => (
              <Link to={path} style={linkStyle}>
                {title}
              </Link>
            ))}
          </InnerBottomRight>
        </InnerBottom>
      </WrapperBottom>
    </Container>
  );
};

export default Footer;
