import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoMenu, IoClose } from "react-icons/io5";
import InnerLink from "./InnerLink";
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
  border-radius: 0.5rem;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const NavItem = styled.li`
  margin: 2rem 0;
`;

const NavLinkItem = styled(Link)`
  color: #000;
`;

const Toggler = styled.button`
  background-color: transparent;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
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

        <Toggler onClick={toggleNav}>
          {showNav ? <IoClose /> : <IoMenu />}{" "}
        </Toggler>
      </NavHeader>

      {showNav && (
        <NavItems>
          {navLinks.map(linkItem => {
            const { id, path, text } = linkItem;
            return (
              <NavItem key={id}>
                <NavLinkItem to={path}> {text} </NavLinkItem>
              </NavItem>
            );
          })}
          <InnerLink userRoute="contact" text="get in touch" />
        </NavItems>
      )}
    </Wrapper>
  );
};

export default MobileNav;
