import React, {useState} from 'react';
import {Container, RowContainer} from "../../ui/containers";
import Logo from "./images/logo.svg";
import {Text} from "../../ui/typography";
import Button from "../../ui/button";
import styled from "styled-components";
import scrollTo from 'gatsby-plugin-smoothscroll';
import {useScreenClass} from "react-grid-system";
import MenuImage from "./images/menu.svg"
import MenuImageActive from "./images/menuActive.svg";
import Menu from "./menu";

const Header = () => {

    const screenClass = useScreenClass()
    const [show, setShow] = useState(false)

    return (
        <div /*style={{backgroundColor: "#FBFBFB"}}*/>
            <Container style={{paddingTop: 30, paddingBottom: 60}}>
                <RowContainer style={{justifyContent: "space-between"}}>
                    <RowContainer style={{columnGap: 10}}>
                        <img src={Logo} alt={"logo"}/>
                        <LogoText>
                            Complete<br/>
                            Stack
                        </LogoText>
                    </RowContainer>
                    {['xl', 'xxl'].includes(screenClass)
                        ? <>
                            <RowContainer style={{columnGap: 80}}>
                                <Text style={{fontSize: 24, cursor: "pointer"}}
                                      onClick={() => scrollTo('#whoWeAre')}>
                                    Who We Are
                                </Text>
                                <Text style={{fontSize: 24, cursor: "pointer"}}
                                      onClick={() => scrollTo('#whatWeDo')}>
                                    What We Do
                                </Text>
                                <Text style={{fontSize: 24, cursor: "pointer"}}
                                      onClick={() => scrollTo('#howWeDo')}>
                                    How We Do
                                </Text>
                            </RowContainer>
                            <Button onClick={() => scrollTo('#form')}>
                                Contact us
                            </Button>
                        </>
                        : <MenuBlock onClick={() => setShow(true)} style={{cursor: "pointer"}}>
                            <img className={"menu"} src={MenuImage} alt={"menu"}/>
                            <img className={"menu_active"} src={MenuImageActive} alt={"menu"}/>
                        </MenuBlock>}
                </RowContainer>
            </Container>
            <Menu show={show} setShow={setShow}/>
        </div>
    );
};

const MenuBlock = styled.div`
  .menu_active {
    display: none;
  }

  :active {
    .menu_active {
      display: inline-block;
    }

    .menu {
      display: none;
    }
  }
`;

const LogoText = styled.div`
  font-family: 'Inconsolata', sans-serif;
  font-weight: 600;
  font-size: 28px;
  color: #262626;
`;

export default Header;