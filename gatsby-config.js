/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `BuyPedal`,
    titleTemplate: `%s · BuyPedal`,
    description: `Have an adventure. We sell cycling and fishing goods that aim to please.`,
    url: `https://buypedal.netlify.app`,
    image: `/thesite.jpg`,
    owner: `Samuel Yusuf`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      }
    },
  ],
}
