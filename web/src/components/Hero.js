import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import InnerLink from "./InnerLink";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const HeroMessage = styled.div`
  text-transform: capitalize;

  color: #000;
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

const Headshot = styled.div`
  margin: 1rem auto;
  border-radius: 50%;
  img {
    display: inline-block;
    border-radius: 50%;
  }
`;

const Hero = ({ name, headshot }) => {
  return (
    <Wrapper>
      <HeroMessage>
        <Title>{name}</Title>
        <SubTitle>orlando based developer</SubTitle>
        <InnerLink userRoute="portfolio" text="view my work" />
      </HeroMessage>

      <Headshot>
        <GatsbyImage image={headshot} alt={name} placeholder={"blurred"} />
      </Headshot>
    </Wrapper>
  );
};

Hero.proptype = {
  name: PropTypes.string.isRequired,
  headshot: PropTypes.object.isRequired,
};

Hero.defaultProps = {
  name: "",
  headshot: "",
};

export default Hero;
