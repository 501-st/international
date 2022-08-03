import React, {useState} from 'react';
import {Container, RowContainer} from "../../ui/containers";
import Logo from "./images/logo.svg";
import {Text} from "../../ui/typography";
import Button from "../../ui/button";
import styled from "styled-components";
import scrollTo from 'gatsby-plugin-smoothscroll';
import {useScreenClass} from "react-grid-system";
import MenuImage from "./images/menu.svg"
import Menu from "./menu";

const Header = () => {

    const screenClass = useScreenClass()
    const [show, setShow] = useState(false)

    return (
        <div style={{backgroundColor: "#FBFBFB"}}>
            <Container style={{paddingTop: "30px", paddingBottom: "60px"}}>
                <RowContainer style={{justifyContent: "space-between"}}>
                    <RowContainer style={{columnGap: "10px"}}>
                        <img src={Logo} alt={"logo"}/>
                        <LogoText>
                            Complete<br/>
                            Stack
                        </LogoText>
                    </RowContainer>
                    {['xl', 'xxl'].includes(screenClass)
                        ? <>
                            <RowContainer style={{columnGap: "80px"}}>
                                <Text style={{fontSize: "24px", cursor: "pointer"}}
                                      onClick={() => scrollTo('#whoWeAre')}>
                                    Who We Are
                                </Text>
                                <Text style={{fontSize: "24px", cursor: "pointer"}}
                                      onClick={() => scrollTo('#howWeDo')}>
                                    How We Do
                                </Text>
                                <Text style={{fontSize: "24px", cursor: "pointer"}}
                                      onClick={() => scrollTo('#whatWeDo')}>
                                    What We Do
                                </Text>
                            </RowContainer>
                            <Button onClick={() => scrollTo('#form')}>
                                Contact us
                            </Button>
                        </>
                        : <div onClick={() => setShow(true)} style={{cursor: "pointer"}}>
                            <img src={MenuImage} alt={"menu"}/>
                        </div>}
                </RowContainer>
            </Container>
            <Menu show={show} setShow={setShow}/>
        </div>
    );
};

const LogoText = styled.div`
  font-family: 'Inconsolata', sans-serif;
  font-weight: 600;
  font-size: 28px;
  color: #262626;
`;

export default Header;