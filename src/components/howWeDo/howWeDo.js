import React, {useContext, useState} from 'react';
import {Container, RowContainer} from "../../ui/containers";
import {Shadow, Text, Title} from "../../ui/typography";
import Image from "../whatWeDo/images/image5.svg"
import {Col, Row, useScreenClass, Visible} from "react-grid-system";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";
import {Context, EN, ES} from "../../context/context";
import GetUseEffect from "../../fetch/getUseEffect";

const HowWeDo = ({dataEN, dataES, dataRU}) => {

    const [lang] = useContext(Context);

    const screenClass = useScreenClass()

    const [data, setData] = useState(dataEN)

    GetUseEffect(lang, setData, dataES, dataEN, dataRU)

    return (
        <div style={{ paddingTop: ['xl', 'xxl'].includes(screenClass) ? 95 : 10, paddingBottom: 60}} id={"howWeDo"}>
            <Container>
                <Title style={{marginBottom: 35, position: "relative", zIndex: 1}}>
                    {lang === EN ? "How We Do" : lang === ES ? "Nuestro enfoque" : "Наш подход"}
                    <Shadow style={lang === EN ? {top: 23, left: 50} : lang === ES ? {top: 15, left: 7} : {top: 23, left: 50}}>
                        {lang === EN ? "How We Do" : lang === ES ? "Nuestro enfoque" : "Наш подход"}
                    </Shadow>
                </Title>
                <RowContainer style={{justifyContent: "space-between", marginBottom: ['xl', 'xxl'].includes(screenClass) ? 90 : 30}}>
                    <Text style={{whiteSpace: "break-spaces"}}>
                        <Markdown>
                            {data.text}
                        </Markdown>
                    </Text>
                    <Visible xl xxl>
                        <img style={{marginTop: -100}} src={Image} alt={"image1"}/>
                    </Visible>
                </RowContainer>
                <Row style={{rowGap: 100}}>
                    {data.Vacancy.map((item, index) => (
                        <Col md={4} key={index}>
                            <StackContainer>
                                <div style={{marginBottom: !['xl', 'xxl'].includes(screenClass) ? 20 : 0}}>
                                    <div style={{
                                        backgroundColor: "#58A0A3",
                                        width: 40,
                                        height: 40,
                                        marginBottom: 25,
                                        borderRadius: "50%"
                                    }}/>
                                    <ModTitle>
                                        {item.title}
                                    </ModTitle>
                                    <ModText>
                                        {item.description}
                                    </ModText>
                                </div>
                                <ModRowContainer>
                                    {item.stack.map((item2, index) => (
                                        <Technology key={index}>
                                            {item2.name}
                                        </Technology>
                                    ))}
                                </ModRowContainer>
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

const ModRowContainer = styled(RowContainer)`
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 15px;
  height: 92px;
  align-items: start;
  @media (max-width: 1199px){
    height: unset;
  }
`;

export default HowWeDo;