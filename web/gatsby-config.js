require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Adler Luders",
    description: "Portfolio website built with all of my projects ",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: "production",
        watchMode: true,
      },
    },
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credetials: {
          consumer_key: process.env.CONSUMER_KEY,
          consumer_secret: process.env.CONSUMER_SECRET,
          bearer_token: process.env.BEARER_TOKEN,
        },
        queries: {
          adlerTweet: {
            endpoint: "search/tweets",
            params: {
              tweet_mode: "extended",
              screen_name: "just_a_devguy",
            },
          },
        },
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
        watchMode: true,
      },
      __key: "images",
    },
  ],
};
