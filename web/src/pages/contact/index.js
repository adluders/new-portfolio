import React from "react";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import ContactForm from "../../components/ContactForm";
import { graphql } from "gatsby";

const Contact = ({ data }) => {
  console.log(data);
  return (
    <Layout title="Contact">
      <Banner title="contact info" />
      <ContactForm />
    </Layout>
  );
};

// export const query = graphql`
// allAdlerTweet{
//  totalCount
// }
// `;

export default Contact;
