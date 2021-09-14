import { graphql } from "gatsby";
import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import HomeBlogs from "../components/HomeBlogs";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";

const IndexPage = ({ data }) => {
  const homeProjects = data.allSanityProject.nodes.filter(
    project => project.showOnHome === true
  );

  const blogs = data.allSanityBlog.nodes.filter(blog => blog.featured === true);

  console.log(blogs);

  return (
    <Layout title="Home">
      <Hero
        name={data.sanityAuthor.name}
        headshot={data.sanityAuthor.headshot.asset.gatsbyImageData}
      />
      <ProjectList projects={homeProjects} />
      <HomeBlogs blogs={blogs} />
    </Layout>
  );
};

export const query = graphql`
  {
    allSanityProject {
      nodes {
        id
        projectTitle
        blurb
        showOnHome
        projectImg {
          asset {
            gatsbyImageData
          }
        }
        slug {
          current
        }
      }
    }

    allSanityBlog {
      nodes {
        blogTitle
        featured
        topic
        blogLink {
          current
        }
      }
    }

    sanityAuthor {
      name
      _rawBio
      headshot {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;

export default IndexPage;
