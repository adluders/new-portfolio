import { graphql } from "gatsby";
import React from "react";
import Hero from "../components/Hero";
import HomeBlogs from "../components/HomeBlogs";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";
import TwitterDeck from "../components/TwitterDeck";

const IndexPage = ({ data }) => {
  const projects = data.allSanityProject.nodes.filter(
    project => project.showOnHome === true
  );

  const blogs = data.allSanityBlog.nodes.filter(blog => blog.featured === true);

  const tweets = data.allTwitterStatusesUserTimelineAdlertweets.nodes;

  return (
    <Layout title="Home">
      <Hero
        name={data.sanityAuthor.name}
        bio={data.sanityAuthor._rawBio}
        headshot={data.sanityAuthor.headshot.asset.gatsbyImageData}
      />
      <ProjectList projects={projects} />
      <HomeBlogs blogs={blogs} />
      <TwitterDeck tweets={tweets} />
    </Layout>
  );
};

export const query = graphql`
  {
    allSanityProject {
      nodes {
        id
        projectTitle
        blurb
        showOnHome
        projectImg {
          asset {
            gatsbyImageData
          }
        }
        slug {
          current
        }
      }
    }

    allSanityBlog {
      nodes {
        blogTitle
        featured
        topic
        blogLink {
          current
        }
      }
    }

    sanityAuthor {
      name
      _rawBio
      headshot {
        asset {
          gatsbyImageData
        }
      }
    }

    allTwitterStatusesUserTimelineAdlertweets(
      filter: {
        entities: { hashtags: { elemMatch: { text: { eq: "100DaysOfCode" } } } }
      }
    ) {
      nodes {
        entities {
          hashtags {
            text
          }
        }
        full_text
        id_str
        retweet_count
        favorite_count
      }
    }
  }
`;

export default IndexPage;
