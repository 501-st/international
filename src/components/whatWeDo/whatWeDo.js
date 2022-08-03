import React from 'react';
import {Shadow, Subtitle, Title} from "../../ui/typography";
import BackEl from "./images/backEl.svg";
import {Col, Hidden, Row, useScreenClass, Visible} from "react-grid-system";
import Image from "./images/image.svg";
import Image2 from "./images/image2.svg";
import Image3 from "./images/image3.svg";
import Image4 from "./images/image4.svg";
import Image5 from "./images/image5.svg";
import Image6 from "./images/image6.svg";
import {Container, RowContainer} from "../../ui/containers";
import styled from "styled-components";

const WhatWeDo = () => {

    const screenClass = useScreenClass()

    return (
        <Container id={"whatWeDo"}>
            {['xl', 'xxl'].includes(screenClass)
                ? <Title style={{marginBottom: "35px", marginTop: "65px"}}>
                    What<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We Do
                    <Shadow style={{top: 20, left: 65, color: "white"}}>
                        What<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We Do
                    </Shadow>
                    <img style={{position: "absolute", top: 38, left: 280}} src={BackEl} alt={"backEl"}/>
                </Title>
                : <Title style={{marginBottom: "35px", marginTop: "65px"}}>
                    What We Do
                    <Shadow style={{top: 25, left: 65, color: "white"}}>
                        What We Do
                    </Shadow>
                    <img width={160} style={{position: "absolute", top: -20, right: 10}} src={BackEl} alt={"backEl"}/>
                </Title>}
            <Visible xl xxl>
                <Row>
                    <ModCol md={4}>
                        <Card>
                            <Subtitle>
                                Websites<br/>and mobile<br/>apps
                            </Subtitle>
                            <ImageContainer>
                                <img src={Image} alt={"lalal"}/>
                            </ImageContainer>
                        </Card>
                    </ModCol>
                    <ModCol md={4}>
                        <Card>
                            <Subtitle>
                                Technical<br/>support
                            </Subtitle>
                            <ImageContainer>
                                <img src={Image2} alt={"lalal"}/>
                            </ImageContainer>
                        </Card>
                    </ModCol>
                    <ModCol md={4}>
                        <Card>
                            <Subtitle>
                                Custom<br/>development
                            </Subtitle>
                            <ImageContainer>
                                <img src={Image3} alt={"lalal"}/>
                            </ImageContainer>
                        </Card>
                    </ModCol>
                    <ModCol md={4}>
                        <Card>
                            <Subtitle>
                                DevOps and<br/>security
                            </Subtitle>
                            <ImageContainer>
                                <img src={Image4} alt={"lalal"}/>
                            </ImageContainer>
                        </Card>
                    </ModCol>
                    <ModCol md={4}>
                        <Card>
                            <Subtitle>
                                UX/UI<br/>Design
                            </Subtitle>
                            <ImageContainer>
                                <img src={Image5} alt={"lalal"}/>
                            </ImageContainer>
                        </Card>
                    </ModCol>
                    <ModCol md={4}>
                        <Card>
                            <Subtitle>
                                Branding
                            </Subtitle>
                            <ImageContainer>
                                <img src={Image6} alt={"lalal"}/>
                            </ImageContainer>
                        </Card>
                    </ModCol>
                </Row>
            </Visible>
            <Hidden xl xxl>
                <RowContainer style={{justifyContent: "space-between", marginBottom: "30px"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <ModSubtitle style={{marginBottom: "30px"}}>
                            Websites<br/>and mobile<br/>apps
                        </ModSubtitle>
                        <ModSubtitle style={{marginBottom: "70px"}}>
                            Custom<br/>development
                        </ModSubtitle>
                        <ModSubtitle>
                            UX/UI Design
                        </ModSubtitle>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", paddingLeft: 8, borderLeft: "1px solid #58A0A3"}}>
                        <ModSubtitle style={{marginBottom: "64px"}}>
                            Technical<br/>support
                        </ModSubtitle>
                        <ModSubtitle style={{marginBottom: "70px"}}>
                            DevOps and<br/>security
                        </ModSubtitle>
                        <ModSubtitle>
                            Branding
                        </ModSubtitle>
                    </div>
                </RowContainer>
            </Hidden>
            <Title style={{fontSize: "24px", textAlign: "center", marginBottom: ['xl', 'xxl'].includes(screenClass) ? 75 : 45,
                color: !['xl', 'xxl'].includes(screenClass) ? "#58A0A3" : ""}}>
                and more...
            </Title>
        </Container>
    );
};

const Card = styled.div`
  background: #EFEFEF;
  border-radius: 4px;
  padding: 25px;
  width: 415px;
  height: 240px;
  @media (max-width: 1270px) and (min-width: 1200px) {
    width: 380px;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  right: 25px;
  bottom: 25px;
`;

const ModCol = styled(Col)`
  margin-bottom: 30px;
`;

const ModSubtitle = styled(Subtitle)`
  font-size: 24px;
`;

export default WhatWeDo;