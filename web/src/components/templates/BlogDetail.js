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
  h2 {
    text-align: center;
    font-size: 3rem;
  }
  p {
    line-height: 2rem;
    text-indent: 5rem;
    @media screen and (max-width: 500px) {
      line-height: 1.5rem;
    }
  }
  a {
    color: #06c;
    text-decoration: underline;
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
