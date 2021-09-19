import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

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

const Blog = ({ blog }) => {
  const { blogLink, blogTitle, topic } = blog;
  return (
    <Wrapper to={`/blog/${blogLink.current}`}>
      <Title> {blogTitle} </Title>
      <SubTitle>{topic}</SubTitle>
    </Wrapper>
  );
};

export default Blog;
