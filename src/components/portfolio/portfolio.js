import React, {useContext, useState} from 'react';
import {Container, RowContainer} from "../../ui/containers";
import {Shadow, Subtitle, Text, Title} from "../../ui/typography";
import Vector from "../portfolio/images/vector.svg"
import "swiper/css";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {Col, Row, useScreenClass} from "react-grid-system";
import styled from "styled-components";
import Arrow from "../portfolio/images/arrowRight.svg"
import {Context, EN, ES} from "../../context/context";
import GetUseEffect from "../../fetch/getUseEffect";

const Switch = () => {
    const swiper = useSwiper();
    return (
        <div onClick={() => swiper.slideNext()} style={{cursor: "pointer"}}>
            <img src={Arrow} alt={"arrow"}/>
        </div>
    );
};

const Portfolio = ({dataEN, dataES, dataRU}) => {

    const [lang] = useContext(Context);

    const screenClass = useScreenClass()

    const [data, setData] = useState(dataEN)

    GetUseEffect(lang, setData, dataES, dataEN, dataRU)

    return (
        <Container style={{margin: ['xl', 'xxl'].includes(screenClass) ? "80px auto" : "60px auto"}}>
            <RowContainer style={{columnGap: 80}}>
                <Title style={{marginBottom: 35, position: "relative", zIndex: 1}}>
                    {lang === EN ? "Portfolio" : lang === ES ? "Portafolio" : "Портфолио"}
                    <Shadow style={{top: 23, left: 50}}>
                        {lang === EN ? "Portfolio" : lang === ES ? "Portafolio" : "Портфолио"}
                    </Shadow>
                </Title>
                {lang === EN && <img style={{
                    width: !['xl', 'xxl'].includes(screenClass) ? 80 : "",
                    marginTop: !['xl', 'xxl'].includes(screenClass) ? -50 : 0,
                    marginLeft: !['xl', 'xxl'].includes(screenClass) ? -15 : 0
                }}
                                     src={Vector} alt={"vector"}/>}
            </RowContainer>
            <Swiper
                spaceBetween={30}
                className="mySwiper"
                grabCursor={true}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Row>
                            <Col style={{marginTop: !['xl', 'xxl'].includes(screenClass) ? 15 : 0}}
                                 order={!['xl', 'xxl'].includes(screenClass) ? {xs: 1} : {}} md={5}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    height: "100%"
                                }}>
                                    <div>
                                        <Subtitle style={{marginBottom: ['xl', 'xxl'].includes(screenClass) ? 10 : 0}}>
                                            {item.title}
                                        </Subtitle>
                                        <Text style={{marginBottom: ['xl', 'xxl'].includes(screenClass) ? 0 : 25}}>
                                            {item.description}
                                        </Text>
                                    </div>
                                    <RowContainer style={{columnGap: 30}}>
                                        <ModTitle>
                                            {index < 9 ? `0${index + 1}` : index}/{index < 9 ? `0${data.length}` : data.length}
                                        </ModTitle>
                                        <Switch/>
                                    </RowContainer>
                                </div>
                            </Col>
                            <Col md={7}>
                                <img style={{
                                    width: "100%",
                                    height: ['xl', 'xxl'].includes(screenClass) ? 410 : 190,
                                    objectFit: "cover"
                                }} src={item.image.localFile.url} alt={"imageCarousel"}/>
                            </Col>
                        </Row>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

const ModTitle = styled(Title)`
  @media (max-width: 1199px) {
    font-size: 36px;
  }
`;

export default Portfolio;