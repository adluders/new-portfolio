import { graphql } from "gatsby";
import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";

const IndexPage = ({ data }) => {
  const homeProjects = data.allSanityProject.nodes.filter(
    project => project.showOnHome === true
  );

  return (
    <Layout>
      <Hero />
      <ProjectList projects={homeProjects} />
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
        featured
        showOnHome
        projectImg {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default IndexPage;
