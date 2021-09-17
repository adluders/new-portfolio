import React from "react";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import ContactForm from "../../components/ContactForm";
import { graphql } from "gatsby";
import styled from "styled-components";
import TwitterDeck from "../../components/TwitterDeck";

const Details = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  margin-bottom: 3rem;
`;

const Contact = ({ data }) => {
  const tweets = data.allTwitterStatusesUserTimelineAdlertweets.nodes;

  return (
    <Layout title="Contact">
      <Banner title="contact info" />
      <Details>
        <ContactForm />
        <TwitterDeck tweets={tweets} />
      </Details>
    </Layout>
  );
};

export const query = graphql`
  {
    allTwitterStatusesUserTimelineAdlertweets {
      nodes {
        entities {
          hashtags {
            text
          }
        }
        text
      }
    }
  }
`;

export default Contact;
