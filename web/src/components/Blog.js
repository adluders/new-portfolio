import React from "react";
import styled from "styled-components";
import InnerLink from "./InnerLink";

const Wrapper = styled.div``;

const Title = styled.h3`
  font-family: "Gravitas One", cursive; ;
`;

const SubTitle = styled.p`
  margin: 1rem 0;
`;

const Blog = () => {
  return (
    <Wrapper>
      <Title> Title </Title>
      <SubTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
        eveniet.
      </SubTitle>
      <InnerLink userRoute="" text="read more..." />
    </Wrapper>
  );
};

export default Blog;
