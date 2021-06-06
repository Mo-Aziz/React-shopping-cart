import React  from "react";
import { Button } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
  NavBtnLink,
  NavItemBtn,
} from "./Header-elemnts";

const Header = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />4 HER
          </NavLogo>

          <NavMenu>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">products</NavLink>
            </NavItem>
            <NavItemBtn>
              <NavBtnLink to="/">
                <Button primary> Subscribe for our news</Button>
              </NavBtnLink>
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
