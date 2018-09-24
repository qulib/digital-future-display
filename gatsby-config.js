module.exports = {
  pathPrefix: `/slideshow`,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Digital Future Display',
        short_name: 'Digital Future Display',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#00305e',
        display: 'minimal-ui',
        icon: 'src/images/qul-squares.png',
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'digital-future.queensu.ca',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: false,
        excludedRoutes: ['/wp/v2/users/*', '/wp/v2/comments/*'],
      },
    },
    'gatsby-plugin-offline',
  ],
}
