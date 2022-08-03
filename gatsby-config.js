module.exports = {
  siteMetadata: {
    title: `australia`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Poppins",
              variants: ["100", "200", "300", "400", "500", "600", "700", "800"],
            },
            {
              family: "Inconsolata",
              variants: ["600"]
            }
          ],
        },
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
    `gatsby-plugin-smoothscroll`,]
};