import React from "react";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import ContactForm from "../../components/ContactForm";
import styled from "styled-components";
import Socialnfo from "../../components/Socialnfo";

const Details = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  margin-bottom: 3rem;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

const Contact = () => {
  return (
    <Layout title="Contact">
      <Banner title="contact info" />
      <Details>
        <ContactForm />
        <Socialnfo />
      </Details>
    </Layout>
  );
};

export default Contact;
