import React from "react";
import Layout from "../../components/Layout";
import Blog from "../../components/Blog";
import styled from "styled-components";
import Banner from "../../components/Banner";
import { graphql } from "gatsby";
import PortableText from "@sanity/block-content-to-react";

const Wrapper = styled.section`
  max-width: 75%;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
`;

const serializer = {
  types: {
    _rawBlog: props => <pre> {JSON.stringify(props, null, 2)} </pre>,
  },
};

const BlogIndex = ({ data }) => {
  console.log(data.sanityBlog);
  // const text = data.allSanityBlog.nodes.map(text => text._rawBlog);
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

      {/*
      <PortableText
        blocks={data.sanityBlog._rawBlog}
        serializers={serializer}
      />
      <div style={{ maxWidth: "50%", textAlign: "left" }}>
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          {JSON.stringify(data.sanityBlog, null, 2)}
        </pre>
      </div> */}
    </Layout>
  );
};

export const query = graphql`
  {
    sanityBlog {
      _rawBlog
    }
  }
`;

export default BlogIndex;
