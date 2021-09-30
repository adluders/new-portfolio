import React from "react";
import styled from "styled-components";
import Blog from "./Blog";

const Wrapper = styled.section`
  margin-bottom: 5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 2.3rem auto;
  font-family: "Gravitas One", cursive;
`;

const Blogs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
`;

const HomeBlogs = ({ blogs }) => {
  return (
    <Wrapper>
      <Title>Articles</Title>
      <Blogs>
        {blogs.map(blog => (
          <Blog key={Math.random()} blog={blog} />
        ))}
      </Blogs>
    </Wrapper>
  );
};

export default HomeBlogs;
