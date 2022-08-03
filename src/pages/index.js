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

const IndexPage = () => {
    return (
        <>
            <Header/>
            <Fade triggerOnce direction={"up"}>
                <Tagline/>
                <Marquee/>
            </Fade>
            <Fade triggerOnce direction={"up"}>
                <WhoWeAre/>
            </Fade>
            <Fade triggerOnce direction={"up"}>
                <WhatWeDo/>
            </Fade>
            <Fade triggerOnce direction={"up"}>
                <HowWeDo/>
            </Fade>
            <Fade triggerOnce direction={"up"}>
                <Portfolio/>
            </Fade>
            <Fade triggerOnce direction={"up"}>
                <Form/>
            </Fade>
            <div id={"modal-root"}/>
        </>
    )
}

export default IndexPage;
