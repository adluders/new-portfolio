import React from "react";
import styled from "styled-components";
import PortableText from "@sanity/block-content-to-react";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 4rem;
  margin: 3rem 0;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Div = styled.div``;

const Title = styled.h1`
  font-family: "Gravitas One", cursive;
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 400;
  text-align: center;
`;

const Details = styled.p`
  line-height: 1.8rem;
`;

const About = ({ info }) => {
  return (
    <Wrapper>
      <Div>
        <Title>who am i?</Title>
      </Div>
      <Div>
        <Details>
          <PortableText blocks={info} />
        </Details>
      </Div>
    </Wrapper>
  );
};

export default About;
