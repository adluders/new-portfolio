import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import ProjectItem from "../../components/ProjectItem";

const Title = styled.h1`
  font-family: "Gravitas One", cursive;
  font-size: 2.5rem;
`;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem auto;
`;

const Portfolio = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Title>My Work</Title>
      <Wrapper>
        {data.allSanityProject.nodes.map(project => (
          <ProjectItem project={project} />
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
        featured
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
