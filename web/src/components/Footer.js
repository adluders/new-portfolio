import React from "react";
import styled from "styled-components";

const FooterWrap = styled.footer`
  margin-top: 5rem;
  text-align: center;
  padding: 3rem 0;
  background-color: #f3f1f5;
`;
const Para = styled.p`
  margin: 1rem auto;
  font-size: 1.2rem;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <Para>
        Designed and developed by Adler Luders &copy;{" "}
        {`${new Date().getFullYear()}`}
      </Para>
    </FooterWrap>
  );
};

export default Footer;
