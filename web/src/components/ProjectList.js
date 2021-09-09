import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import InnerLink from "../components/InnerLink";

const Wrapper = styled.section`
  margin: 0 auto 3rem;
  border-radius: 0.5rem;
  padding: 2rem 0;
  background-color: #fff;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 75%;
  margin: 2rem auto;

  & > a:last-of-type {
    grid-column: 1/2;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-family: "Gravitas One", cursive; ;
`;

const CtaDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectList = ({ projects }) => {
  return (
    <Wrapper>
      <Title> Projects </Title>
      <GridBox>
        {projects.map(project => (
          <ProjectItem
            featured={project.featured}
            key={project.id}
            project={project}
          />
        ))}

        <CtaDiv>
          <InnerLink userRoute="portfolio" text="view more" />
        </CtaDiv>
      </GridBox>
    </Wrapper>
  );
};

ProjectList.proptype = {
  projects: PropTypes.array.isRequired,
};

ProjectList.defaultProps = {
  projects: [],
};

export default ProjectList;
