import { graphql } from "gatsby";
import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import HomeBlogs from "../components/HomeBlogs";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";

const IndexPage = ({ data }) => {
  const homeProjects = data.allSanityProject.nodes.filter(
    project => project.showOnHome === true
  );

  return (
    <Layout title="Home">
      <Hero
        name={data.sanityAuthor.name}
        headshot={data.sanityAuthor.headshot.asset.gatsbyImageData}
      />
      <About info={data.sanityAuthor._rawBio} />
      <ProjectList projects={homeProjects} />
      <HomeBlogs />
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

    sanityAuthor {
      name
      _rawBio
      headshot {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;

export default IndexPage;
