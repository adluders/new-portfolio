import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Banner from "../../components/Banner";
import Layout from "../../components/Layout";
import ProjectItem from "../../components/ProjectItem";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2rem auto;
`;

const Portfolio = ({ data }) => {
  return (
    <Layout title="Portfolio">
      <Banner
        title="my work"
        subtitle="These are some of my favorite projects. Come learn what made them unique and why I loved working on each of them"
      />
      <Wrapper>
        {data.allSanityProject.nodes.map(project => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </Wrapper>
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

export default Portfolio;
