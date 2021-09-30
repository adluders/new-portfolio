const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  //Redirects
  // const { createRedirect } = actions;

  // createRedirect({
  //   fromPath: "/contact",
  //   toPath: "/",
  //   statusCode: 200,
  // });

  const { createPage } = actions;

  const results = await graphql(`
    {
      allSanityProject {
        nodes {
          _rawDescription
          id
          projectTitle
          blurb
          projectDemo
          projectImg {
            asset {
              gatsbyImageData
            }
          }
          tabletImg {
            asset {
              gatsbyImageData
            }
          }
          mobileImg {
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
          _rawBlog
          blogTitle
          blogLink {
            current
          }
        }
      }
    }
  `);

  const projectTemplate = path.resolve(
    `src/components/templates/ProjectInfo.js`
  );

  const blogTemplate = path.resolve(`src/components/templates/BlogDetail.js`);

  results.data.allSanityBlog.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.blogLink.current}`,
      component: blogTemplate,
      context: node,
    });
  });

  results.data.allSanityProject.nodes.forEach(node => {
    createPage({
      path: `/work/${node.slug.current}`,
      component: projectTemplate,
      context: node,
    });
  });
};
