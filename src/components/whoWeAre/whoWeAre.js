import React, {useState} from 'react';
import {Container, RowContainer} from "../../ui/containers";
import {Shadow, Subtitle, Text, Title} from "../../ui/typography";
import {Col, Row, useScreenClass, Visible} from "react-grid-system";
import Image from "./images/who-we-are.png";
import BackEl from "../tagline/images/bgel2.svg";
import Arrow from "../whoWeAre/images/arrow.svg"
import scrollTo from 'gatsby-plugin-smoothscroll';
import ReactTransitionCollapse from "react-transition-collapse";
import ArrowDown from "../whoWeAre/images/arrowDown.svg"
import styled from "styled-components";

const WhoWeAre = () => {

    const screenClass = useScreenClass()
    const [expanded, setExpanded] = useState(false)
    const [expanded2, setExpanded2] = useState(false)
    const [expanded3, setExpanded3] = useState(false)

    return (
        <div style={{backgroundColor: "#FBFBFB", paddingBottom: ['xl', 'xxl'].includes(screenClass) ? 110 : 80}} id={"whoWeAre"}>
            <Container>
                <Title style={{marginBottom: "35px", position: "relative", zIndex: "1"}}>
                    Who We Are
                    <Shadow style={{top: 23, left: 50}}>
                        Who We Are
                    </Shadow>
                </Title>
                <Row style={{marginBottom: ['xl', 'xxl'].includes(screenClass) ? 200 : 26}}>
                    <Col md={5}>
                        <Text>
                            We are a team of young, inventive, skilled and constantly evolving people from technical and
                            creative fields
                            <br/><br/>
                            We adopt the Agile Methodology to the development process
                            <br/><br/>
                            It helps us ensure:
                            <ul>
                                <li> customer satisfaction</li>
                                <li> superior quality product</li>
                                <li> high level of management</li>
                                <li> unparalleled flexibility</li>
                                <li> continuous growth</li>
                            </ul>
                        </Text>
                    </Col>
                    <Visible xl xxl>
                        <Col md={7}>
                            <img src={Image} alt={"who we are"}/>
                        </Col>
                    </Visible>
                </Row>
                <Row>
                    <Col md={7}>
                        {['xl', 'xxl'].includes(screenClass)
                            ? <>
                                <Subtitle>
                                    Extensive Experience
                                </Subtitle>
                                <Text style={{marginBottom: "75px"}}>
                                    International development is what we are based on. At the moment we have experience
                                    of
                                    working with more than 5 countries. We love foreign customers and adapt to any time
                                    zone.
                                </Text>
                                <Subtitle onClick={() => setExpanded2(expanded => !expanded)}>
                                    Creativity
                                </Subtitle>
                                <Text style={{marginBottom: "50px"}}>
                                    Our creative and technically equipped team crave interesting and original projects
                                    and
                                    customers with non-standard ideas. We will help you to realize your dream or your
                                    need.
                                </Text>
                                <Subtitle onClick={() => setExpanded3(expanded => !expanded)}>
                                    Flexibility
                                </Subtitle>
                                <Text style={{marginBottom: "50px"}}>
                                    Do you want to select a pricing model? Okay, we are ready to adjust. Want to propose
                                    a
                                    large-scale project? Choose time and material. Does your project require a tight
                                    deadline?
                                    Let’s work under a fixed price contract.
                                </Text>
                            </>
                            : <div style={{marginBottom: 40}}>
                                <ModRowContainer expanded={expanded} onClick={() => setExpanded(expanded => !expanded)}
                                                 style={{justifyContent: "space-between"}}>
                                    <Subtitle>
                                        Extensive Experience
                                    </Subtitle>
                                    <img src={ArrowDown} alt={"arrow"}/>
                                </ModRowContainer>
                                <ReactTransitionCollapse expanded={expanded} duration={400}>
                                    <Text style={{paddingTop: !['xl', 'xxl'].includes(screenClass) ? 10 : 0}}>
                                        International development is what we are based on. At the moment we have
                                        experience of
                                        working with more than 5 countries. We love foreign customers and adapt to any
                                        time zone.
                                    </Text>
                                </ReactTransitionCollapse>
                                <ModRowContainer expanded={expanded2}
                                                 onClick={() => setExpanded2(expanded => !expanded)}
                                                 style={{justifyContent: "space-between"}}>
                                    <Subtitle>
                                        Creativity
                                    </Subtitle>
                                    <img src={ArrowDown} alt={"arrow"}/>
                                </ModRowContainer>
                                <ReactTransitionCollapse expanded={expanded2} duration={400}>
                                    <Text style={{paddingTop: !['xl', 'xxl'].includes(screenClass) ? 10 : 0}}>
                                        Our creative and technically equipped team crave interesting and original
                                        projects
                                        and
                                        customers with non-standard ideas. We will help you to realize your dream or
                                        your
                                        need.
                                    </Text>
                                </ReactTransitionCollapse>
                                <ModRowContainer expanded={expanded3}
                                                 onClick={() => setExpanded3(expanded => !expanded)}
                                                 style={{justifyContent: "space-between"}}>
                                    <Subtitle>
                                        Flexibility
                                    </Subtitle>
                                    <img src={ArrowDown} alt={"arrow"}/>
                                </ModRowContainer>
                                <ReactTransitionCollapse expanded={expanded3} duration={400}>
                                    <Text style={{paddingTop: !['xl', 'xxl'].includes(screenClass) ? 10 : 0}}>
                                        Do you want to select a pricing model? Okay, we are ready to adjust. Want to
                                        propose
                                        a
                                        large-scale project? Choose time and material. Does your project require a tight
                                        deadline?
                                        Let’s work under a fixed price contract.
                                    </Text>
                                </ReactTransitionCollapse>
                            </div>}
                        <RowContainer onClick={() => scrollTo('#form')}
                                      style={{columnGap: "50px", cursor: "pointer", width: "fit-content"}}>
                            <Subtitle style={{fontWeight: 700, fontStyle: "italic"}}>
                                Got a project?
                            </Subtitle>
                            <img width={!['xl', 'xxl'].includes(screenClass) ? 80 : ""} src={Arrow} alt={"arrow"}/>
                        </RowContainer>
                    </Col>
                    <Visible xl xxl>
                        <Col md={5}>
                            <img style={{marginLeft: "200px", marginTop: "30px"}} src={BackEl} alt={"backEl"}/>
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