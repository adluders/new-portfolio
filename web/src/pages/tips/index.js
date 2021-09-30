import React from "react";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import styled from "styled-components";
import Tip from "../../components/Tip";
import { graphql } from "gatsby";

const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
  gap: 3rem;
`;

const DevTips = ({ data }) => {
  return (
    <Layout title="Dev Tips">
      <Banner
        title="tips"
        subtitle="welcome to the dev zone! These are some of the little things that helps me in my day to day development activities."
      />
      <Content>
        {data.allSanityTip.nodes.map(tip => (
          <Tip tipInfo={tip} key={tip.id} />
        ))}
      </Content>
    </Layout>
  );
};

export const query = graphql`
  {
    allSanityTip {
      nodes {
        _rawInfo
        id
        tip
      }
    }
  }
`;

export default DevTips;
