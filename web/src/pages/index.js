import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  console.log(data.allSanityBlog.nodes);
  return (
    <main>
      <h1>Index</h1>
      {data.allSanityBlog.nodes.map(blog => (
        <BlockContent key={Math.random()} blocks={blog._rawBlog} />
      ))}
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  {
    allSanityBlog {
      nodes {
        _rawBlog
      }
    }
  }
`;
