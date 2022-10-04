import React from "react";
import { NavbarContainer, NavbarItem } from "../../standards/styledDivs";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarItem>Pets</NavbarItem>
      <NavbarItem>News</NavbarItem>
      <NavbarItem>Account</NavbarItem>
    </NavbarContainer>
  );
};

export default Navbar;
