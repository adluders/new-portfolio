import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Layout from "../Layout";

const TopInfo = styled.div`
  border: solid black;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
`;

const Graphics = styled.div`
  border: solid green;
`;

const Description = styled.div`
  border: solid orange;
`;

const DemoLink = styled.a`
  border: solid blue;
`;

const ProjectInfo = ({ pageContext }) => {
  const { projectTitle, blurb, projectImg, projectDemo } = pageContext;
  return (
    <Layout title={projectTitle}>
      <TopInfo>
        <Title> {projectTitle} </Title>
        <Subtitle> {blurb} </Subtitle>
        <DemoLink href={projectDemo} target="_blank" rel="noreferrer">
          view live site
        </DemoLink>
      </TopInfo>

      <Graphics>
        <GatsbyImage
          image={projectImg.asset.gatsbyImageData}
          alt={projectTitle}
          placeholder="blurred"
        />
      </Graphics>

      <Description></Description>
    </Layout>
  );
};

export default ProjectInfo;
