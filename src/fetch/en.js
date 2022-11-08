import {graphql, useStaticQuery} from "gatsby";

const ENData = () => {

    const {allStrapiHomepage} = useStaticQuery(graphql`
        query {
  allStrapiHomepage(filter: {locale: {eq: "en"}}) {
    nodes {
      HowWeDo {
        text
        Vacancy {
          title
          description
          stack {
            name
          }
        }
      }
      Portfolio {
        description
        title
        image {
          localFile {
            url
          }
        }
      }
      WhatWeDo {
        text
        image {
          localFile {
            url
          }
        }
      }
      WhoWeAre {
        Title
        Text
        Features {
          Title
          Text
        }
        Img {
          localFile {
            url
          }
        }
      }
    }
  }
        }
    `)

    return allStrapiHomepage.nodes[0]
};

export default ENData;