import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 192px 0 0 0;
  align-items: center;
  width: 100%;
  height: 437px;
  border: 1px solid green;
`;

// Footer Wrapper Top

export const WrapperTop = styled.div`
  width: 100%;
  height: 326px;
  display: flex;
  justify-content: center;
  background: #333;
`;

export const InnerTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 81.25%;
  height: 266px;
  margin-top: 29.91px;
`;

// Footer Top Nav

export const InnerTopLink = styled.div`
  display: flex;
  width: 97.43%;
  height: 13.15%;
  margin-bottom: 30px;
  border-bottom: 1px solid #f0f0f2;
`;
export const linkStyles = {
  textDecoration: "none",
  fontStyle: "normal",
  fontWeight: "800",
  fontSize: "15px",
  lineHeight: "15px",
  color: "#FFFFFF"
};

// Footer Top Bottom Nav

export const InnerTopLinkBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 97.43%;
  height: 77.44%;
`;

const topLinkBoxes = (height) => {
  switch (height) {
    case "solutions":
      return "74.75%";
    case "templates":
      return "90.2%";
    case "partner":
      return "74.75%";
    case "award":
      return "59.22%";
    default:
      return "unset";
  }
};

export const Solutions = styled.div`
  display: flex;
  flex-direction: column;
  width: 22%;
  height: ${({ height }) => topLinkBoxes(height)};
`;

export const NavH4 = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
  margin-bottom: 4px;
`;

export const linkStyleBottom = {
  textDecoration: "none",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "21px",
  color: "#FFFFFF",
  marginTop: "11px"
};

// Footer Center

export const WrapperCenter = styled.div`
  width: 100%;
  height: 63px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
`;

export const InnerCenter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 81.25%;
  height: 33px;
`;

export const InnerCenterLeft = styled.div`
  width: 50%;
  height: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #aaaaaa;
`;

export const SocialCenter = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const InnerCenterRight = styled.div`
  width: 47.47%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
`;

export const LinkA = styled.a``;

export const DownloadCenter = styled.img`
  width: 110px;
  height: 33px;
  margin: 0 15.79px 0 15px;
`;

export const LineBottom = styled.div`
  width: 100%;
  height: 2px;
  background: #222222;
  border-radius: 0px;
`;

// Footer Bottom

export const WrapperBottom = styled.div`
  width: 100%;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222;
`;

export const InnerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 81.25%;
  height: 19px;
`;

export const InnerBottomLeft = styled.div`
  width: 50%;
  height: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #aaaaaa;
`;
export const Link = styled(NavLink)`
  display: flex;
  text-decoration: none;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 22px;
  color: #aaaaaa;
  transition: all 0.3s;
  margin: 0 20px 0 0;
`;

export const linkStyle = {
  textDecoration: "none",
  color: "#aaaaaa"
};

export const InnerBottomRight = styled.div`
  width: 47.47%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #aaaaaa;
`;
