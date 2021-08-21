import React from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  margin: 3rem 0;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const ProjectList = ({ projects }) => {
  return (
    <Wrapper>
      {projects.map(project => (
        <ProjectItem
          featured={project.featured}
          key={project.id}
          project={project}
        />
      ))}
    </Wrapper>
  );
};

export default ProjectList;
