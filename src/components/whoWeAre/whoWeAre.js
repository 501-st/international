import React, {useState} from 'react';
import {Container, RowContainer} from "../../ui/containers";
import {Shadow, Subtitle, Text, Title} from "../../ui/typography";
import {Col, Row, useScreenClass, Visible} from "react-grid-system";
import BackEl from "../tagline/images/bgel2.svg";
import Arrow from "../whoWeAre/images/arrow.svg"
import scrollTo from 'gatsby-plugin-smoothscroll';
import ReactTransitionCollapse from "react-transition-collapse";
import ArrowDown from "../whoWeAre/images/arrowDown.svg"
import styled from "styled-components";
import Markdown from "markdown-to-jsx";

const WhoWeAre = ({data}) => {

    const screenClass = useScreenClass()
    const [expanded, setExpanded] = useState(false)
    const [expanded2, setExpanded2] = useState(false)
    const [expanded3, setExpanded3] = useState(false)

    return (
        <div style={{/*backgroundColor: "#FBFBFB", */paddingBottom: ['xl', 'xxl'].includes(screenClass) ? 110 : 80}}
             id={"whoWeAre"}>
            <Container>
                <Title style={{marginBottom: 35, position: "relative", zIndex: 1}}>
                    {data.Title}
                    <Shadow style={{top: 23, left: 50}}>
                        {data.Title}
                    </Shadow>
                </Title>
                <Row style={{marginBottom: ['xl', 'xxl'].includes(screenClass) ? 200 : 26}}>
                    <Col md={5}>
                        <Text style={{whiteSpace: "break-spaces"}}>
                            <Markdown>
                                {data.Text}
                            </Markdown>
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
                                <Subtitle>
                                    {data.Features[0].Title}
                                </Subtitle>
                                <Text style={{marginBottom: 75}}>
                                    <Markdown>
                                        {data.Features[0].Text}
                                    </Markdown>
                                </Text>
                                <Subtitle onClick={() => setExpanded2(expanded => !expanded)}>
                                    {data.Features[1].Title}
                                </Subtitle>
                                <Text style={{marginBottom: 50}}>
                                    <Markdown>
                                        {data.Features[1].Text}
                                    </Markdown>
                                </Text>
                                <Subtitle onClick={() => setExpanded3(expanded => !expanded)}>
                                    {data.Features[2].Title}
                                </Subtitle>
                                <Text style={{marginBottom: 50}}>
                                    <Markdown>
                                        {data.Features[2].Text}
                                    </Markdown>
                                </Text>
                            </>
                            : <div style={{marginBottom: 40}}>
                                <ModRowContainer expanded={expanded} onClick={() => setExpanded(expanded => !expanded)}
                                                 style={{justifyContent: "space-between"}}>
                                    <Subtitle>
                                        {data.Features[0].Title}
                                    </Subtitle>
                                    <img src={ArrowDown} alt={"arrow"}/>
                                </ModRowContainer>
                                <ReactTransitionCollapse expanded={expanded} duration={400}>
                                    <Text style={{paddingTop: !['xl', 'xxl'].includes(screenClass) ? 10 : 0}}>
                                        <Markdown>
                                            {data.Features[0].Text}
                                        </Markdown>
                                    </Text>
                                </ReactTransitionCollapse>
                                <ModRowContainer expanded={expanded2}
                                                 onClick={() => setExpanded2(expanded => !expanded)}
                                                 style={{justifyContent: "space-between"}}>
                                    <Subtitle>
                                        {data.Features[1].Title}
                                    </Subtitle>
                                    <img src={ArrowDown} alt={"arrow"}/>
                                </ModRowContainer>
                                <ReactTransitionCollapse expanded={expanded2} duration={400}>
                                    <Text style={{paddingTop: !['xl', 'xxl'].includes(screenClass) ? 10 : 0}}>
                                        <Markdown>
                                            {data.Features[1].Text}
                                        </Markdown>
                                    </Text>
                                </ReactTransitionCollapse>
                                <ModRowContainer expanded={expanded3}
                                                 onClick={() => setExpanded3(expanded => !expanded)}
                                                 style={{justifyContent: "space-between"}}>
                                    <Subtitle>
                                        {data.Features[2].Title}
                                    </Subtitle>
                                    <img src={ArrowDown} alt={"arrow"}/>
                                </ModRowContainer>
                                <ReactTransitionCollapse expanded={expanded3} duration={400}>
                                    <Text style={{paddingTop: !['xl', 'xxl'].includes(screenClass) ? 10 : 0}}>
                                        <Markdown>
                                            {data.Features[2].Text}
                                        </Markdown>
                                    </Text>
                                </ReactTransitionCollapse>
                            </div>}
                        <RowContainer onClick={() => scrollTo('#form')}
                                      style={{columnGap: 50, cursor: "pointer", width: "fit-content"}}>
                            <Subtitle style={{fontWeight: 700, fontStyle: "italic"}}>
                                Got a project?
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


const ModRowContainer = styled(RowContainer)`
  cursor: pointer;
  margin-top: 16px;

  img {
    transform: ${props => props.expanded ? "rotate(180deg)" : ""};
    transition: transform .4s ease;
  }
`;

export default WhoWeAre;