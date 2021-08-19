import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { navLinks } from "./Navbar";

const Wrapper = styled.nav`
  position: relative;
  margin: 1.5rem 0;
`;

const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavItems = styled.ul`
  background-color: #838ede;
  position: absolute;
  margin-top: 0.8rem;
  width: 100%;
  height: max-content;
`;

const NavItem = styled.li`
  margin: 2rem 0;
`;

const NavLinkItem = styled(Link)`
  color: #555;
`;

const Toggler = styled.button`
  border: solid blue;
  background-color: transparent;
`;

const MobileNav = () => {
  const [showNav, setShowNav] = useState();

  useEffect(() => {
    setShowNav(false);
  }, []);

  const toggleNav = () => setShowNav(!showNav);

  return (
    <Wrapper>
      <NavHeader>
        <NavLinkItem to={"/"}>
          <h1>AL</h1>
        </NavLinkItem>

        <Toggler onClick={toggleNav}> C </Toggler>
      </NavHeader>
      <NavItems>
        {showNav &&
          navLinks.map(link => {
            const { id, path, text } = link;
            return (
              <NavItem key={id}>
                <NavLinkItem to={path}> {text} </NavLinkItem>
              </NavItem>
            );
          })}
      </NavItems>
    </Wrapper>
  );
};

export default MobileNav;
