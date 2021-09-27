import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 150px;
`;

Wrapper.Logo = styled.img`
  width: 93.5px;
  height: 32px;
  margin-right: 28.5px;
`;

export const Link = styled(NavLink)`
  display: flex;
  text-decoration: none;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 22px;
  color: #333333;
  transition: all 0.3s;
  margin: 0 24px 0 0;
`;

export const activeStyle = {
  color: "#159939",
  fontWeight: "bold"
};

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 22px;
  border: none;
  background: none;
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  line-height: 22px;
  color: #3d455c;
  margin: 0 12px 0 206px;
`;

export const Buttons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 169px;
  height: 40px;
  font-weight: 800;
  background: #21264f;
  border: none;
  border-radius: 32px;
  color: #fff;
`;
