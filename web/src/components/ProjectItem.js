import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 0.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem;
  position: relative;
`;

const ProjectLink = styled(Link)`
  &:hover {
    & > div {
      display: flex;
    }
  }
`;

const Details = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(95, 108, 175, 0.85);
  display: none;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  border-radius: 0.5rem;
`;

const Title = styled.h2`
  color: #fff;
`;

const SubTitle = styled.p`
  color: #f9f5f9;
`;

const ImageHolder = styled.div`
  max-width: 100%;
  max-height: max-content;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  object-fit: fill;
`;

const ProjectItem = ({ project }) => {
  const { projectTitle, blurb, projectImg, slug } = project;
  return (
    <Wrapper>
      <ProjectLink to={`/work/${slug.current}`}>
        <ImageHolder>
          <Image
            src={projectImg.asset.gatsbyImageData.images.fallback.src}
            alt={projectTitle}
          />
        </ImageHolder>
        <Details>
          <Title>{projectTitle}</Title>
          <SubTitle>{blurb}</SubTitle>
        </Details>
      </ProjectLink>
    </Wrapper>
  );
};

ProjectItem.proptype = {
  project: PropTypes.object.isRequired,
};

ProjectItem.defaultProps = {
  project: {},
};

export default ProjectItem;
