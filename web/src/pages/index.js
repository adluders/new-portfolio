import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <ProjectList />
    </Layout>
  );
};

export default IndexPage;
