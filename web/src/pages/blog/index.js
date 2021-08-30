import React from "react";
import Layout from "../../components/Layout";
import Blog from "../../components/Blog";
import styled from "styled-components";
import Banner from "../../components/Banner";

const Wrapper = styled.section`
  max-width: 75%;
  margin: 3rem auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5rem;
`;

const BlogIndex = () => {
  return (
    <Layout title="Blog">
      <Banner
        title="my articles"
        subtitle="Come get inside the mind of a self-taught developer. Here you can read about different pain points and the various experiences I faced teaching myself how to code"
      />
      <Wrapper>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </Wrapper>
    </Layout>
  );
};

export default BlogIndex;
