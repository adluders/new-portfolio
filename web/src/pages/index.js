import { graphql } from "gatsby";
import React from "react";
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
      <Hero />
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
  }
`;

export default IndexPage;
