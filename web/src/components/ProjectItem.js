import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(Link)`
  border-radius: 0.5rem;
  border: solid red 1px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  padding: 0.5rem;

  grid-row: ${({ featured }) => featured && "1 / 3"};
`;

const Title = styled.h2``;

const SubTitle = styled.p``;

const ProjectItem = ({ featured }) => {
  return (
    <Wrapper featured={featured} to={"/"}>
      <Title>Lorem ipsum dolor sit amet.</Title>
      <SubTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
        quae?
      </SubTitle>
    </Wrapper>
  );
};

export default ProjectItem;
