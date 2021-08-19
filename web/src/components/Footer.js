import React from "react";
import styled from "styled-components";

const FooterWrap = styled.footer`
  margin-top: auto;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <p>&copy; {`${new Date().getFullYear()}`} Adler Luders </p>
    </FooterWrap>
  );
};

export default Footer;
