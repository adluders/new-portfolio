import React from "react";
import Layout from "../../components/Layout";
import Blog from "../../components/Blog";
import styled from "styled-components";
import Banner from "../../components/Banner";
import { graphql } from "gatsby";

const Wrapper = styled.section`
  max-width: 75%;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 5rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin: auto;
    padding: 0;
    gap: 2.5rem;
  }
  @media screen and (max-width: 414px) {
    margin-top: 1.5rem;
  }
`;

const BlogIndex = ({ data }) => {
  return (
    <Layout title="Blog">
      <Banner
        title="my articles"
        subtitle="come get inside the mind of a self-taught developer. Here you can read about different pain points and the various experiences I faced teaching myself how to code"
      />
      <Wrapper>
        {data.allSanityBlog.nodes.map(blogItem => (
          <Blog key={blogItem._id} blog={blogItem} />
        ))}
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  {
    allSanityBlog {
      nodes {
        _id
        blogTitle
        topic
        blogLink {
          current
        }
      }
    }
  }
`;

export default BlogIndex;
