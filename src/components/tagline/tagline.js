import React from 'react';
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

const Tagline = () => {
        const screenClass = useScreenClass()

        return (
            <div style={{backgroundColor: "#FBFBFB"}}>
                <Container>
                    {['xl', 'xxl'].includes(screenClass) &&
                    <div style={{textAlign: "end"}}>
                        <img src={BgEl} alt={"bgEl"}/>
                    </div>}
                    {['xl', 'xxl'].includes(screenClass)
                        ? <TaglineStyle>
                            We <img style={{margin: "0 40px -15px"}} src={TitleImage} alt={"img1"}/> create products
                        </TaglineStyle>
                        : <RowContainer>
                            <TaglineStyle style={{lineHeight: "51px"}}>
                                We<br/>create<br/>products
                            </TaglineStyle>
                            <img width={107} style={{margin: "-80px 0 0 -60px"}} src={TitleImage} alt={"img1"}/>
                            <img width={50} style={{margin: "40px 0 0 0"}} src={BgEl} alt={"bgEl"}/>
                        </RowContainer>}
                    {['xl', 'xxl'].includes(screenClass)
                        ? <TaglineStyle style={{textAlign: "right"}}>
                            that will <img style={{margin: "0 10px -15px"}} src={TitleImage2} alt={"img2"}/> take your life
                        </TaglineStyle>
                        : <RowContainer style={{marginBottom: 10}}>
                            <img width={107} style={{margin: "20px 15px 0 0"}} src={TitleImage2} alt={"img2"}/>
                            <TaglineStyle style={{textAlign: "right", lineHeight: "51px"}}>
                                that will
                            </TaglineStyle>
                        </RowContainer>}
                    {['xl', 'xxl'].includes(screenClass)
                        ? <TaglineStyle style={{textAlign: "center", marginLeft: "100px"}}>
                            to the <span style={{color: "#58A0A3", fontWeight: 700, fontStyle: "italic"}}>next level</span>
                            <img style={{margin: "0 40px -15px"}} src={TitleImage3} alt={"img3"}/>
                        </TaglineStyle>
                        : <div>
                            <TaglineStyle style={{textAlign: "left", lineHeight: "51px"}}>
                                take your life<br/>to the<br/><span style={{color: "#58A0A3", fontWeight: 700, fontStyle: "italic"}}>next level</span>
                            </TaglineStyle>
                            <div style={{textAlign: "right", marginTop: -30}}>
                                <img width={107} src={TitleImage3} alt={"img3"}/>
                            </div>
                        </div>}
                    <img style={{position: "absolute", left: ['xl', 'xxl'].includes(screenClass) ? -40 : 265, bottom: ['xl', 'xxl'].includes(screenClass) ? 370 : 220,
                        width: !['xl', 'xxl'].includes(screenClass) ? 90 : ""}} src={BgEl2} alt={"BgEl2"}/>
                     <RowContainer style={{justifyContent: "space-between", alignItems: "start"}}>
                        <img style={{marginTop: !['xl', 'xxl'].includes(screenClass) ? -70 : 0}} width={!['xl', 'xxl'].includes(screenClass) ? 100 : ""}
                             src={BgEl3} alt={"bgEl"}/>
                        <img  width={!['xl', 'xxl'].includes(screenClass) ? 100 : ""} src={BgEl4} alt={"bgEl"}
                              style={{paddingTop: ['xl', 'xxl'].includes(screenClass) ?  50 : 20, marginRight: !['xl', 'xxl'].includes(screenClass) ? 20 : 0}} />
                    </RowContainer>
                </Container>
            </div>
        );
    }
;

export default Tagline;