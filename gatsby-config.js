module.exports = {
    siteMetadata: {
        title: `Complete Stack`,
        image: `src/components/header/images/favicon.png`,
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
        `gatsby-plugin-smoothscroll`,
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: `https://brand.strapi.australia.ipst-dev.com`,
                queryLimit: 1000, // Defaults to 100
                collectionTypes: [],
                singleTypes: [
                    'homepage',
                ],
            },
        }, {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Complete Stack`,
                short_name: `Complete Stack`,
                start_url: `/`,
                lang: `en`,
                display: `standalone`,
                icon: `src/components/header/images/favicon.png`
            },
        },]
};