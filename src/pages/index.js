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

const IndexPage = () => {
    return (
        <>
            <Header/>
            <Tagline/>
            <Marquee/>
            <WhoWeAre/>
            <WhatWeDo/>
            <HowWeDo/>
            <Portfolio/>
            <Form/>
            <div id={"modal-root"}/>
        </>
    )
}


export default IndexPage;
