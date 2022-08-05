import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Modal from "../../ui/modal";
import Exit from "./images/exit.svg";
import ExitActive from "./images/exitActive.svg";
import {createPortal} from "react-dom";
import Logo from "./images/logo.svg"
import {Text} from "../../ui/typography";
import scrollTo from "gatsby-plugin-smoothscroll";
import {RowContainer} from "../../ui/containers";

const Container = styled.div`
  background: #F1F1F1;
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

const Menu = ({setShow, show}) => {

    const CancelPropagation = (event) => {
        event.stopPropagation()
    }

    const [isBrowser, setBrowser] = useState(false)

    useEffect(() => {
        setBrowser(true);
    }, []);

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
                    <Text style={{fontSize: 24, cursor: "pointer"}} onClick={() => {scrollTo('#whoWeAre'); setShow(false)}}>
                        Who We Are
                    </Text>
                    <Text style={{fontSize: 24, cursor: "pointer"}} onClick={() => {scrollTo('#whatWeDo'); setShow(false)}}>
                        What We Do
                    </Text>
                    <Text style={{fontSize: 24, cursor: "pointer"}} onClick={() => {scrollTo('#howWeDo'); setShow(false)}}>
                        How We Do
                    </Text>
                    <Text style={{fontSize: 24, cursor: "pointer"}} onClick={() => {scrollTo('#form'); setShow(false)}}>
                        Contact Us
                    </Text>
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

export default Menu;