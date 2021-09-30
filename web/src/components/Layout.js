import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import * as globalStyles from "../global.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import useResizer from "../hooks/useResizer";
import SEO from "./SEO";

const BigDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  @media screen and (max-width: 505px) {
    margin: 0 1rem;
  }
`;

const Layout = ({ children, title }) => {
  const screenSize = useResizer();

  return (
    <BigDiv>
      <Wrapper style={globalStyles}>
        <SEO title={title} />
        {screenSize < 678 ? <MobileNav /> : <Navbar />}
        {children}
      </Wrapper>
      <Footer />
    </BigDiv>
  );
};

Layout.proptype = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

Layout.defaultProps = {
  title: "",
  children: {},
};

export default Layout;
