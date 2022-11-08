import React, {useContext, useState} from 'react';
import {Container, RowContainer} from "../../ui/containers";
import {Shadow, Subtitle, Text, Title} from "../../ui/typography";
import {Col, Row, useScreenClass, Visible} from "react-grid-system";
import BackEl from "../tagline/images/bgel2.svg";
import Arrow from "../whoWeAre/images/arrow.svg"
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from "styled-components";
import Markdown from "markdown-to-jsx";
import Collapse from "../../ui/collapse";
import GetUseEffect from "../../fetch/getUseEffect";
import {Context, EN, ES, RU} from "../../context/context";

const WhoWeAre = ({dataEN, dataES, dataRU}) => {

    const [lang] = useContext(Context);

    const screenClass = useScreenClass()

    const [data, setData] = useState(dataEN)

    GetUseEffect(lang, setData, dataES, dataEN, dataRU)

    return (
        <div style={{paddingBottom: ['xl', 'xxl'].includes(screenClass) ? 110 : 80}}
             id={"whoWeAre"}>
            <Container>
                <Title style={{marginBottom: 35, position: "relative", zIndex: 1}}>
                    {data.Title}
                    <Shadow style={lang === EN ? {top: 23, left: 50} : lang === ES ? {top: 23, left: 25} : {top: 17, left: 50}}>
                        {data.Title}
                    </Shadow>
                </Title>
                <Row style={{marginBottom: ['xl', 'xxl'].includes(screenClass) ? 200 : 26}}>
                    <Col md={5}>
                        <Text style={{whiteSpace: "break-spaces"}}>
                            <ModMarkdown>
                                {data.Text}
                            </ModMarkdown>
                        </Text>
                    </Col>
                    <Visible xl xxl>
                        <Col md={7}>
                            <img src={data.Img.localFile.url} alt={"who we are"}/>
                        </Col>
                    </Visible>
                </Row>
                <Row>
                    <Col md={7}>
                        {['xl', 'xxl'].includes(screenClass)
                            ? <>
                                {data.Features.map((item, index) => (
                                    <div key={index}>
                                        <Subtitle>
                                            {item.Title}
                                        </Subtitle>
                                        <Text style={{marginBottom: index === 0 ? 75 : 50}}>
                                            <Markdown>
                                                {item.Text}
                                            </Markdown>
                                        </Text>
                                    </div>
                                ))}
                            </>
                            : <div style={{marginBottom: 40}}>
                                {data.Features.map((item, index) => (
                                    <Collapse key={index} title={item.Title} text={item.Text}/>
                                ))}
                            </div>}
                        <RowContainer onClick={() => scrollTo('#form')}
                                      style={{columnGap: 50, cursor: "pointer", width: "fit-content"}}>
                            <Subtitle style={{fontWeight: 700, fontStyle: "italic"}}>
                                {lang === EN ? "Got a project?" : lang === RU ? "Есть проект?" : "¿Tienes un proyecto?"}
                            </Subtitle>
                            <img width={!['xl', 'xxl'].includes(screenClass) ? 80 : ""} src={Arrow} alt={"arrow"}/>
                        </RowContainer>
                    </Col>
                    <Visible xl xxl>
                        <Col md={5}>
                            <img style={{marginLeft: 200, marginTop: 30}} src={BackEl} alt={"backEl"}/>
                        </Col>
                    </Visible>
                </Row>
            </Container>
        </div>
    );
};

const ModMarkdown = styled(Markdown)`
  ul{
    line-height: 35px;
  }
`;

export default WhoWeAre;