module.exports = {
  siteMetadata: {
    title: 'Leo T | Web Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Leo Torres',
        short_name: 'Leo-T',
        start_url: '/',
        background_color: '#323944',
        theme_color: '#FF7C00',
        display: 'minimal-ui',
        icon: 'src/images/logo1.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-emotion`, 
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
