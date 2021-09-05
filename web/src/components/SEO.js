import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
// import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
          }
        }
      }
    `
  );

  const metaDesc = description || site.siteMetadata.description;

  return (
    <Helmet
      title={` ${title} | ${site.siteMetadata.title}`}
      meta={[{ name: `description`, content: metaDesc }]}
    />
  );
};

export default Seo;

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  siteUrl: PropTypes.string,
  article: PropTypes.bool,
};

Seo.defaultProps = {
  title: null,
  description: null,
  siteUrl: null,
  article: false,
};
