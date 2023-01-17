/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Kerry Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Anonymous Pro`, // you can also specify font weights and styles
          `PT Sans`,
          `Nanum Gothic`,
        ],
        display: "swap",
      },
    },
  ],
};
