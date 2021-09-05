const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const projects = await graphql(`
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
    }
  `);

  const projectTemplate = path.resolve(
    `src/components/templates/ProjectInfo.js`
  );

  projects.data.allSanityProject.nodes.forEach(node => {
    createPage({
      path: `/${node.slug.current}`,
      component: projectTemplate,
      context: node,
    });
  });
};
