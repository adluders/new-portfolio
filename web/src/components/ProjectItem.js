import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(Link)`
  border-radius: 0.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0.5rem;
  height: max-content;
  margin: auto;
  position: relative;

  grid-row: ${({ featured }) => featured && "1 / 3"};
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
  background-color: rgba(159, 91, 164, 0.7);
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
  /* top: 0px;
  left: 0px;

  width: 100%; */
`;

const Image = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;

const ProjectItem = ({ featured, project }) => {
  const { projectTitle, blurb, projectImg } = project;
  return (
    <Wrapper featured={featured} to={"/"}>
      <ImageHolder>
        <Image src={projectImg.asset.gatsbyImageData.images.fallback.src} />
      </ImageHolder>
      <Details>
        <Title>{projectTitle}</Title>
        <SubTitle>{blurb}</SubTitle>
      </Details>
    </Wrapper>
  );
};

export default ProjectItem;
