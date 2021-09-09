import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
// import InnerLink from "./InnerLink";

const Wrapper = styled(Link)`
  background-color: #f3f1f5;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #000;
  text-align: center;
`;

const Title = styled.h3`
  font-family: "Gravitas One", cursive; ;
`;

const SubTitle = styled.p`
  margin: 1rem 0;
`;

const Blog = () => {
  return (
    <Wrapper to="/blog">
      <Title> Title </Title>
      <SubTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
        eveniet.
      </SubTitle>
    </Wrapper>
  );
};

export default Blog;
