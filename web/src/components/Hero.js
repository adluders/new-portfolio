import React from "react";
import styled from "styled-components";
import InnerLink from "./InnerLink";

const Wrapper = styled.section`
  border-radius: 0.5rem;
  background-color: purple;
`;

const HeroMessage = styled.div`
  text-transform: capitalize;

  color: #fff;
  margin: 2rem;

  a {
    @media screen and (max-width: 768px) {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-family: "Gravitas One", cursive;
  font-size: 4rem;
  @media screen and (max-width: 505px) {
    font-size: 3rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0 1.5rem;
`;

const Hero = () => {
  return (
    <Wrapper>
      <HeroMessage>
        <Title>adler luders</Title>
        <SubTitle>orlando based developer</SubTitle>
        <InnerLink userRoute="portfolio" text="view my work" />
      </HeroMessage>
    </Wrapper>
  );
};

export default Hero;
