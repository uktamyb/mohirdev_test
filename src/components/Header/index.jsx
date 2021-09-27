import React from "react";
import {
  Container,
  Wrapper,
  Link,
  Button,
  Buttons,
  activeStyle
} from "./style";
import logo from "../../Assets/img/logo.svg";
import navlink from "../../Utils/navlink";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Logo src={logo} alt="alt" />
        {navlink.map(({ title, path }) => (
          <Link activeStyle={activeStyle} to={path}>
            {title}
          </Link>
        ))}
        <Button>Log In</Button>
        <Buttons>Get Started Free</Buttons>
      </Wrapper>
    </Container>
  );
};

export default Header;
