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
import ESData from "../fetch/es";
import ENData from "../fetch/en";
import RUData from "../fetch/ru";
import { useState} from "react";
import {Context, EN} from "../context/context";

const IndexPage = () => {

    const enData = ENData()
    const esData = ESData()
    const ruData = RUData()

    const whoWeAreEN = enData.WhoWeAre
    const whatWeDoEN = enData.WhatWeDo
    const howWeDoEN = enData.HowWeDo
    const portfolioEN = enData.Portfolio

    const whoWeAreES = esData.WhoWeAre
    const whatWeDoES = esData.WhatWeDo
    const howWeDoES = esData.HowWeDo
    const portfolioES = esData.Portfolio

    const whoWeAreRU = ruData.WhoWeAre
    const whatWeDoRU = ruData.WhatWeDo
    const howWeDoRU = ruData.HowWeDo
    const portfolioRU = ruData.Portfolio

    const [lang, setLang] = useState(EN)

    return (
        <Context.Provider value={[lang, setLang]}>
            <Header setLang={setLang}/>
            <Fade triggerOnce direction={"up"}>
                <Tagline/>
                <Marquee/>
            </Fade>
            <Fade triggerOnce direction={"up"}>
                <WhoWeAre dataEN={whoWeAreEN} dataES={whoWeAreES} dataRU={whoWeAreRU}/>
            </Fade>
            <Fade triggerOnce direction={"up"}>
                <WhatWeDo dataEN={whatWeDoEN} dataES={whatWeDoES} dataRU={whatWeDoRU}/>
            </Fade>
            <Fade triggerOnce direction={"up"}>
                <HowWeDo dataEN={howWeDoEN} dataES={howWeDoES} dataRU={howWeDoRU}/>
            </Fade>
            <Fade triggerOnce direction={"up"}>
                <Portfolio dataEN={portfolioEN} dataES={portfolioES} dataRU={portfolioRU}/>
            </Fade>
            <Fade triggerOnce direction={"up"}>
                <Form/>
            </Fade>
            <div id={"modal-root"}/>
        </Context.Provider>
    )
}

export default IndexPage;
