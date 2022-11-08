import React, {useContext, useState} from 'react';
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
import {Context, EN, ES} from "../../context/context";
import Dropdown from "../../ui/dropdown";

const Header = ({setLang}) => {

    const screenClass = useScreenClass()
    const [show, setShow] = useState(false)
    const [lang] = useContext(Context);

    return (
        <div>
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
                            <RowContainer style={{columnGap: lang !== ES ? 80 : 50}}>
                                <Text style={{fontSize: 24, cursor: "pointer"}}
                                      onClick={() => scrollTo('#whoWeAre')}>
                                    {lang === EN ? "Who We Are" : lang === ES ? "Quienes somos" : "Кто мы"}
                                </Text>
                                <Text style={{fontSize: 24, cursor: "pointer"}}
                                      onClick={() => scrollTo('#whatWeDo')}>
                                    {lang === EN ? "What We Do" : lang === ES ? "Nuestro trabajo" : "Что мы делаем"}
                                </Text>
                                <Text style={{fontSize: 24, cursor: "pointer"}}
                                      onClick={() => scrollTo('#howWeDo')}>
                                    {lang === EN ? "How We Do" : lang === ES ? "Nuestro enfoque" : "Наш подход"}
                                </Text>
                            </RowContainer>
                            <RowContainer style={{columnGap: "35px"}}>
                                <Dropdown setLang={setLang}/>
                                <Button onClick={() => scrollTo('#form')}>
                                    {lang === EN ? "Contact us" : lang === ES ? "Conéctate" : "Связаться с нами"}
                                </Button>
                            </RowContainer>
                        </>
                        : <MenuBlock onClick={() => setShow(true)} style={{cursor: "pointer"}}>
                            <img className={"menu"} src={MenuImage} alt={"menu"}/>
                            <img className={"menu_active"} src={MenuImageActive} alt={"menu"}/>
                        </MenuBlock>}
                </RowContainer>
            </Container>
            <Menu show={show} setShow={setShow} setLang={setLang}/>
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