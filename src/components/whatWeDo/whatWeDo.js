import React from 'react';
import {Shadow, Subtitle, Title} from "../../ui/typography";
import BackEl from "./images/backEl.svg";
import {Col, Hidden, Row, useScreenClass, Visible} from "react-grid-system";
import {Container} from "../../ui/containers";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";

const WhatWeDo = ({data}) => {

    const screenClass = useScreenClass()


    return (
        <Container id={"whatWeDo"}>
            {['xl', 'xxl'].includes(screenClass)
                ? <Title style={{marginBottom: 35, marginTop: 65}}>
                    What<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We Do
                    <Shadow style={{top: 20, left: 65, color: "white"}}>
                        What<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We Do
                    </Shadow>
                    <img style={{position: "absolute", top: 38, left: 280}} src={BackEl} alt={"backEl"}/>
                </Title>
                : <Title style={{marginBottom: 35, marginTop: 65}}>
                    What We Do
                    <Shadow style={{top: 25, left: 65, color: "white"}}>
                        What We Do
                    </Shadow>
                    <img width={160} style={{position: "absolute", top: -20, right: 10}} src={BackEl} alt={"backEl"}/>
                </Title>}
            <Visible xl xxl>
                <Row>
                    {data.map((item, index) => (
                        <ModCol key={index} md={4}>
                            <Card>
                                <Subtitle>
                                    <Markdown>
                                        {item.text}
                                    </Markdown>
                                </Subtitle>
                                <ImageContainer>
                                    <img src={item.image.localFile.url} alt={"image21"}/>
                                </ImageContainer>
                            </Card>
                        </ModCol>
                    ))}
                </Row>
            </Visible>
            <Hidden xl xxl>
                <Row>
                    {data.map((item, index) => (
                        <Col style={{marginBottom: "40px"}} key={index} xs={6}>
                            <ModSubtitle>
                                {item.text}
                            </ModSubtitle>
                        </Col>
                    ))}
                    <div style={{position: "absolute", border: "1px solid #58A0A3", top: 90, left: "50%", height: 330}}/>
                </Row>
            </Hidden>
            <Title style={{
                fontSize: 24, textAlign: "center", marginBottom: ['xl', 'xxl'].includes(screenClass) ? 75 : 45,
                color: !['xl', 'xxl'].includes(screenClass) ? "#58A0A3" : ""
            }}>
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