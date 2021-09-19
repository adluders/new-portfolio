import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import PortableText from "@sanity/block-content-to-react";
import styled from "styled-components";
import InnerLink from "./InnerLink";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: center;
  margin: 2rem 0 4rem 2rem;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const HeroMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  text-transform: capitalize;
  font-family: "Gravitas One", cursive;
  font-size: 4rem;
  @media screen and (max-width: 505px) {
    font-size: 3rem;
  }
`;

const Headshot = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  img {
    display: inline-block;
    border-radius: 50%;
  }
`;

const Hero = ({ name, headshot, bio }) => {
  return (
    <Wrapper>
      <HeroMessage>
        <Title>{name}</Title>
        <PortableText blocks={bio} />
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
