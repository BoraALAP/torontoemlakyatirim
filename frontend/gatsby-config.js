require('dotenv').config({
  path: `.env.*`
});

module.exports = {
  siteMetadata: {
    title: `Toronto Emlak - Gokce Zeren - Gayrimenkul, Alım, Satım, Yatırım`,
    description: `Toronto'nun yüksek karlı emlak marketinde garimenkul alımı satım yatırım ve renovasyon hizmetlerini bir arada sunan tek adres!`,
    url: "https://torontoemlakyatirim.com", 
    image: "src/images/gzlogo-fav.jpg",
    author: `GokceZeren`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-modal-routing`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gokce_zeren_webiste`,
        short_name: `theme`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#043962`,
        display: `artticfox_design`,
        icon: `src/images/gzlogo-fav.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134265026-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
  ],
}
