import React from "react";
import styled from "styled-components";
import * as globalStyles from "../global.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import useResizer from "../hooks/useResizer";
import SEO from "./SEO";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
  min-height: 100vh;
  margin: 0 auto;
  @media screen and (max-width: 505px) {
    margin: 0 1rem;
  }
`;

const Layout = ({ children, title }) => {
  const screenSize = useResizer();

  return (
    <Wrapper>
      <SEO title={title} />
      {screenSize < 678 ? <MobileNav /> : <Navbar />}
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
