import * as React from "react"
import "../ui/index.css";
import Header from "../components/header/header";
import Tagline from "../components/tagline/tagline";
import Marquee from "../components/marquee/marquee";
import WhoWeAre from "../components/whoWeAre/whoWeAre";
import WhatWeDo from "../components/whatWeDo/whatWeDo";
import HowWeDo from "../components/howWeDo/howWeDo";
import Portfolio from "../components/portfolio/portfolio";
import Form from "../components/form/form";
import {Fade} from "react-awesome-reveal";
import {graphql, useStaticQuery} from "gatsby";

const IndexPage = () => {

    const {allStrapiHomepage} = useStaticQuery(graphql`
        query {
       allStrapiHomepage {
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

    const howWeDo = allStrapiHomepage.nodes[0].HowWeDo
    const portfolio = allStrapiHomepage.nodes[0].Portfolio
    const whatWeDo = allStrapiHomepage.nodes[0].WhatWeDo
    const whoWeAre = allStrapiHomepage.nodes[0].WhoWeAre

    let age = 18

    const worker = {
        name: "Andrew",
        age: 21
    }

    const {name, age: workerAge} = worker
    console.log(workerAge)

    return (
        <>
            <Header/>
            <Fade triggerOnce direction={"up"}>
                <Tagline/>
                <Marquee/>
            </Fade>
            <Fade triggerOnce direction={"up"}>
                <WhoWeAre data={whoWeAre}/>
            </Fade>
            <Fade triggerOnce direction={"up"}>
                <WhatWeDo data={whatWeDo}/>
            </Fade>
            <Fade triggerOnce direction={"up"}>
                <HowWeDo data={howWeDo}/>
            </Fade>
            <Fade triggerOnce direction={"up"}>
                <Portfolio data={portfolio}/>
            </Fade>
            <Fade triggerOnce direction={"up"}>
                <Form/>
            </Fade>
            <div id={"modal-root"}/>
        </>
    )
}

export default IndexPage;
