import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import * as globalStyles from "../global.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import useResizer from "../hooks/useResizer";
import Seo from "../components/Seo";

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
    <Wrapper style={globalStyles}>
      <Seo title={title} />
      {screenSize < 678 ? <MobileNav /> : <Navbar />}
      {children}
      <Footer />
    </Wrapper>
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
