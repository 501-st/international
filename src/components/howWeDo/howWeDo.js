import React from 'react';
import {Container, RowContainer} from "../../ui/containers";
import {Shadow, Text, Title} from "../../ui/typography";
import Image from "../whatWeDo/images/image5.svg"
import {Col, Row, useScreenClass, Visible} from "react-grid-system";
import styled from "styled-components";

const HowWeDo = () => {

    const data = [{
        title: "Front-end development",
        description: "development of client applications",
        stack: [{
            item: "React.js"
        }, {
            item: "Redux"
        }, {
            item: "Next.js"
        }, {
            item: "Gatsby.js"
        }, {
            item: "TypeScript"
        },]
    },{
        title: "Back-end development",
        description: "development of server applications",
        stack: [{
            item: "Node.js"
        }, {
            item: "Nest.js"
        }, {
            item: "TypeORM"
        }, {
            item: "Sequelize"
        }, {
            item: "Swagger"
        }, {
            item: "TypeScript"
        }]
    },{
        title: "Machine Learning",
        description: "application development using machine learning and artificial intelligence",
        stack: [{
            item: "Speech Recogn."
        }, {
            item: "Python"
        }, {
            item: "Flask"
        }]
    },{
        title: "Analytics",
        description: "collecting, analyzing, designing and documenting requirements",
        stack: [{
            item: "IDEF"
        }, {
            item: "UML"
        }, {
            item: "FRD"
        },{
            item: "Use Case"
        },{
            item: "Mind Map"
        },{
            item: "SRS"
        },{
            item: "ГОСТ"
        }]
    },{
        title: "Database",
        description: "data usage and storage",
        stack: [{
            item: "Firebase"
        }, {
            item: "MongoDB"
        }, {
            item: "PostgreSQL"
        }]
    },]

    const screenClass = useScreenClass()

    return (
        <div style={{backgroundColor: "#FBFBFB", paddingTop: ['xl', 'xxl'].includes(screenClass) ? 95 : 10, paddingBottom: "60px"}} id={"howWeDo"}>
            <Container>
                <Title style={{marginBottom: "35px", position: "relative", zIndex: "1"}}>
                    How We Do
                    <Shadow style={{top: 23, left: 50}}>
                        How We Do
                    </Shadow>
                </Title>
                <RowContainer style={{justifyContent: "space-between", marginBottom: ['xl', 'xxl'].includes(screenClass) ? 90 : 30}}>
                    <Text>
                        We are continuously learning. Every day our developers research new technologies in<br/>order to
                        make products more and more modern and fulfilling.
                    </Text>
                    <Visible xl xxl>
                        <img style={{marginTop: "-100px"}} src={Image} alt={"image1"}/>
                    </Visible>
                </RowContainer>
                <Row style={{rowGap: "100px"}}>
                    {data.map((item, index) => (
                        <Col md={4} key={index}>
                            <StackContainer>
                                <div style={{marginBottom: 20}}>
                                    <div style={{
                                        backgroundColor: "#58A0A3",
                                        width: "40px",
                                        height: "40px",
                                        marginBottom: "25px",
                                        borderRadius: "50%"
                                    }}/>
                                    <ModTitle>
                                        {item.title}
                                    </ModTitle>
                                    <ModText>
                                        {item.description}
                                    </ModText>
                                </div>
                                <RowContainer style={{flexWrap: "wrap", columnGap: "10px", rowGap: "15px", height: "92px", alignItems: "start"}}>
                                    {item.stack.map((item2, index) => (
                                        <Technology key={index}>
                                            {item2.item}
                                        </Technology>
                                    ))}
                                </RowContainer>
                            </StackContainer>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

const StackContainer = styled.div`
  width: 415px;
  height: 270px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 1199px){
    width: 350px;
    height: auto;
  }
`;

const Technology = styled(Text)`
  color: #58A0A3;
  padding: 3px 15px;
  border: 1px solid #58A0A3;
  border-radius: 20px;
  @media (max-width: 1199px){
    font-size: 19px;
  }
`;

const ModTitle = styled(Title)`
  font-size: 30px;
  color: #325058;
  @media (max-width: 1199px){
    font-size: 27px;
  }
`;

const ModText = styled(Text)`
  @media (max-width: 1199px){
    font-size: 19px;
  }
`;

export default HowWeDo;