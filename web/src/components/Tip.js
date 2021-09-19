import React from "react";
import styled from "styled-components";
import PortableText from "@sanity/block-content-to-react";

const Wrapper = styled.div`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.7);
  padding: 1rem;
  border-radius: 0.5rem;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
`;

const Tip = ({ tipInfo }) => {
  const { tip, _rawInfo } = tipInfo;
  return (
    <Wrapper>
      <Title> {tip} </Title>
      <PortableText blocks={_rawInfo} />
    </Wrapper>
  );
};

export default Tip;
