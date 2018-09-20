module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Digital Future Display",
        short_name: "Digital Future Display",
        start_url: "/",
        background_color: "#406486",
        theme_color: "#00305e",
        display: "minimal-ui",
        icon: "src/images/qul-squares.png", 
      }
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "digital-future.queensu.ca",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: false,
        excludedRoutes: [
          "/akismet/**",
          "/jetpack/**",
          "/wp/v2/jp_pay_order/**",
          "/wp/v2/users/**"
        ]
      }
    },
    "gatsby-plugin-offline"
  ]
}