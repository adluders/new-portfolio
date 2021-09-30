import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description }) => {
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
      htmlAttributes={{ lang: "en" }}
      title={` ${title} | ${site.siteMetadata.title}`}
      meta={[{ name: `description`, content: metaDesc }]}
    />
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  siteUrl: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  siteUrl: null,
  article: false,
};
