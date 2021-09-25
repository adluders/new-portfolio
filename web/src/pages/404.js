import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 10rem;
  @media screen and (max-width: 415px) {
    font-size: 5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 4rem;
  text-transform: capitalize;
  @media screen and (max-width: 415px) {
    font-size: 2rem;
  }
`;

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <Wrapper>
        <Title>OOPS</Title>
        <Subtitle>Nothing to see here!</Subtitle>
      </Wrapper>
    </Layout>
  );
};

export default NotFoundPage;
