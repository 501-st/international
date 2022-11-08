import React, {useContext} from 'react';
import BgEl from "./images/bgel1.svg";
import TitleImage from "./images/title1.png";
import TitleImage2 from "./images/title2.png";
import TitleImage3 from "./images/title3.png";
import {Container, RowContainer} from "../../ui/containers";
import BgEl3 from "./images/bgel3.svg";
import BgEl4 from "./images/bgel4.svg";
import BgEl2 from "./images/bgel2.svg";
import {TaglineStyle} from "../../ui/typography";
import {useScreenClass} from "react-grid-system";
import {Context, EN, ES} from "../../context/context";
import Markdown from "markdown-to-jsx";

const Tagline = () => {
        const screenClass = useScreenClass()
        const [lang] = useContext(Context);


    /*Мы создаем продукты, которые выведут вашу жизнь на новый уровень*/
    /*Creamos      productos que       llevarán tu      vida al       siguiente nivel*/
        return (
            <div>
                <Container>
                    {['xl', 'xxl'].includes(screenClass) &&
                    <div style={{textAlign: "end"}}>
                        <img src={BgEl} alt={"bgEl"}/>
                    </div>}
                    {['xl', 'xxl'].includes(screenClass)
                        ? <TaglineStyle lang={lang}>
                            {lang === EN ? "We " : lang === ES ? "We " : "Мы "}
                            <img style={{margin: "0 40px -15px"}} src={TitleImage} alt={"img1"}/>
                            {lang === EN ? " create products" : lang === ES ? " create products" : " создаем продукты"}
                        </TaglineStyle>
                        : <RowContainer>
                            <TaglineStyle lang={lang} style={{lineHeight: "51px"}}>
                                <Markdown>
                                    {lang === EN ? "We<br/>create<br/>products" : lang === ES ? "We<br/>create<br/>products" : "Мы<br/>создаем<br/>продукты"}
                                </Markdown>
                            </TaglineStyle>
                            <img width={107} style={{margin: lang === EN ? "-80px 0 0 -60px" : "-80px 0 0 -40px"}} src={TitleImage} alt={"img1"}/>
                            <img width={50} style={{margin: "40px 0 0 0"}} src={BgEl} alt={"bgEl"}/>
                        </RowContainer>}
                    {['xl', 'xxl'].includes(screenClass)
                        ? <TaglineStyle lang={lang} style={{textAlign: "right"}}>
                            {lang === EN ? "that will " : lang === ES ? "that will " : "которые "}
                            <img style={{margin: "0 10px -15px"}} src={TitleImage2} alt={"img2"}/>
                            {lang === EN ? " take your life" : lang === ES ? " take your life" : " поднимут вас"}
                        </TaglineStyle>
                        : <RowContainer style={{marginBottom: 10}}>
                            <img width={107} style={{margin: "20px 15px 0 0"}} src={TitleImage2} alt={"img2"}/>
                            <TaglineStyle lang={lang} style={{textAlign: "right", lineHeight: "51px"}}>
                                {lang === EN ? "that will" : lang === ES ? "that will" : "которые"}
                            </TaglineStyle>
                        </RowContainer>}
                    {['xl', 'xxl'].includes(screenClass)
                        ? <TaglineStyle lang={lang} style={{textAlign: "center", marginLeft: "100px"}}>
                            {lang === EN ? "to the " : lang === ES ? "to the " : "на "}
                            <span style={{color: "#58A0A3", fontWeight: 700, fontStyle: "italic"}}>
                                {lang === EN ? "next level" : lang === ES ? "next level" : "новый уровень"}
                            </span>
                            <img style={{margin: "0 40px -15px"}} src={TitleImage3} alt={"img3"}/>
                        </TaglineStyle>
                        : <div>
                            <TaglineStyle lang={lang} style={{textAlign: "left", lineHeight: "51px"}}>
                                <Markdown>
                                    {lang === EN ? "take your life<br/>to the<br/>" : lang === ES ? "take your life<br/>to the<br/>" : "поднимут вас<br/>на новый<br/>"}
                                </Markdown>
                                <span style={{color: "#58A0A3", fontWeight: 700, fontStyle: "italic"}}>
                                    {lang === EN ? "next level" : lang === ES ? "next level" : "уровень"}
                                </span>
                            </TaglineStyle>
                            <div style={{textAlign: "right", marginTop: -30}}>
                                <img width={107} src={TitleImage3} alt={"img3"}/>
                            </div>
                        </div>}
                    <img style={{
                        position: "absolute",
                        left: ['xl', 'xxl'].includes(screenClass) ? -40 : 265,
                        bottom: ['xl', 'xxl'].includes(screenClass) ? 370 : 220,
                        width: !['xl', 'xxl'].includes(screenClass) ? 90 : ""
                    }} src={BgEl2} alt={"BgEl2"}/>
                    <RowContainer style={{justifyContent: "space-between", alignItems: "start"}}>
                        <img style={{marginTop: !['xl', 'xxl'].includes(screenClass) ? -70 : 0}}
                             width={!['xl', 'xxl'].includes(screenClass) ? 100 : ""}
                             src={BgEl3} alt={"bgEl"}/>
                        <img width={!['xl', 'xxl'].includes(screenClass) ? 100 : ""} src={BgEl4} alt={"bgEl"}
                             style={{
                                 paddingTop: ['xl', 'xxl'].includes(screenClass) ? 50 : 20,
                                 marginRight: !['xl', 'xxl'].includes(screenClass) ? 20 : 0
                             }}/>
                    </RowContainer>
                </Container>
            </div>
        );
    }
;

export default Tagline;