import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import Modal from "../../ui/modal";
import Exit from "./images/exit.svg";
import ExitActive from "./images/exitActive.svg";
import {createPortal} from "react-dom";
import Logo from "./images/logo.svg"
import {Text} from "../../ui/typography";
import scrollTo from "gatsby-plugin-smoothscroll";
import {RowContainer} from "../../ui/containers";
import {Context, EN, ES} from "../../context/context";
import Dropdown from "../../ui/dropdown";

const Container = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding: 25px;
  text-align: center;
`;

const CloseBlock = styled.div`
  cursor: pointer;
  .exit_active{
    display: none;
  }
  :active{
    .exit{
      display: none;
    }
    .exit_active{
      display: inline-block;
    }
  }
`;

const Menu = ({setShow, show, setLang}) => {

    const CancelPropagation = (event) => {
        event.stopPropagation()
    }

    const [isBrowser, setBrowser] = useState(false)

    useEffect(() => {
        setBrowser(true);
    }, []);

    const [lang] = useContext(Context);

    const content = show ? (
        <Modal setShow={setShow}>
            <Container onClick={CancelPropagation}>
                <div style={{display: "flex", justifyContent: "end", marginBottom: 50}}>
                    <CloseBlock onClick={() => setShow(false)}>
                        <img className={"exit"} src={Exit} alt={"Exit"}/>
                        <img className={"exit_active"} src={ExitActive} alt={"Exit"}/>
                    </CloseBlock>
                </div>
                <RowContainer style={{justifyContent: "center", marginBottom: 80, columnGap: 10}}>
                    <div style={{width: "fit-content"}} onClick={() => setShow(false)}>
                        <img src={Logo} alt={"logo"}/>
                    </div>
                    <LogoText>
                        Complete<br/>
                        Stack
                    </LogoText>
                </RowContainer>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "80px",
                    alignItems: "center"
                }}>
                    <Dropdown setLang={setLang}/>
                    <ModText onClick={() => {scrollTo('#whoWeAre'); setShow(false)}}>
                        {lang === EN ? "Who We Are" : lang === ES ? "Quienes somos" : "Кто мы"}
                    </ModText>
                    <ModText onClick={() => {scrollTo('#whatWeDo'); setShow(false)}}>
                        {lang === EN ? "What We Do" : lang === ES ? "Nuestro trabajo" : "Что мы делаем"}
                    </ModText>
                    <ModText onClick={() => {scrollTo('#howWeDo'); setShow(false)}}>
                        {lang === EN ? "How We Do" : lang === ES ? "Nuestro enfoque" : "Наш подход"}
                    </ModText>
                    <ModText onClick={() => {scrollTo('#form'); setShow(false)}}>
                        {lang === EN ? "Contact us" : lang === ES ? "Conéctate" : "Связаться с нами"}
                    </ModText>
                </div>
            </Container>
        </Modal>
    ) : null

    return isBrowser ? createPortal(content, document.getElementById('modal-root')) : null
};

const LogoText = styled.div`
  font-family: 'Inconsolata', sans-serif;
  font-weight: 600;
  font-size: 28px;
  color: #262626;
  text-align: left;
`;

const ModText = styled(Text)`
  font-size: 24px;
  cursor: pointer;
`;

export default Menu;