import React from "react";
import PortableText from "@sanity/block-content-to-react";
import styled from "styled-components";
import Layout from "../Layout";

const Wrapper = styled.section`
  h1,
  h2,
  h3,
  h4 {
    margin: 1rem 0;
  }
`;

const BlogDetail = ({ pageContext }) => {
  const { _rawBlog, blogTitle } = pageContext;
  return (
    <Layout title={blogTitle || "word"}>
      <Wrapper>
        <PortableText blocks={_rawBlog} />
      </Wrapper>
    </Layout>
  );
};

export default BlogDetail;
