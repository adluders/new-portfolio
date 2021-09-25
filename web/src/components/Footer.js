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
  @media screen and (max-width: 414px) {
    font-size: 0.8rem;
    margin: 0.5rem auto;
  }
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
