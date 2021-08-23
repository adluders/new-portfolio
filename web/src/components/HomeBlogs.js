import React from "react";
import styled from "styled-components";
import Blog from "./Blog";

const Wrapper = styled.section`
  margin-bottom: 5rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 2.3rem auto;
  font-family: "Gravitas One", cursive;
`;

const Blogs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
`;

const HomeBlogs = () => {
  return (
    <Wrapper>
      <Title>Articles</Title>
      <Blogs>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </Blogs>
    </Wrapper>
  );
};

export default HomeBlogs;
