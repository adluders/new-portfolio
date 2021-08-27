import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import InnerLink from "./InnerLink";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 2rem auto;
`;

const NavItems = styled.ul`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  color: #888;
  &:hover {
    color: #000;
  }
`;

const NavCta = styled.div``;

export const navLinks = [
  {
    id: 1,
    path: "/portfolio",
    text: "Portfolio",
  },
  {
    id: 2,
    path: "/blog",
    text: "Blog",
  },
  {
    id: 3,
    path: "/tips",
    text: "Dev Tips",
  },
];

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <h1 style={{ fontSize: "2.5rem" }}>AL</h1>
      </NavLink>

      <NavItems>
        {navLinks.map(navLink => {
          const { id, path, text } = navLink;
          return (
            <NavItem key={id}>
              <NavLink to={path}> {text} </NavLink>
            </NavItem>
          );
        })}
      </NavItems>

      <NavCta>
        <InnerLink userRoute={"contact"} text="get in touch" />
      </NavCta>
    </Nav>
  );
};

export default Navbar;
