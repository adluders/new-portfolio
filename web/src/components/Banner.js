import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useResizer from "../hooks/useResizer";

const Wrapper = styled.section`
  border-radius: 0.5rem;
  background-color: #fff;
  color: #000;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-family: "Gravitas One", cursive;
  font-size: 2.5rem;
  text-transform: capitalize;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  &::first-letter {
    text-transform: capitalize;
  }
`;

const Banner = ({ title, subtitle }) => {
  const screenSize = useResizer();
  return (
    <Wrapper>
      <Title>{title}</Title>
      {screenSize > 768 && <SubTitle> {subtitle} </SubTitle>}
    </Wrapper>
  );
};

Banner.proptyes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

Banner.defaultProps = {
  title: "Title",
  subtitle: "",
};

export default Banner;
