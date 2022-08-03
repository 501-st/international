import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Modal from "../../ui/modal";
import Exit from "./images/exit.svg";
import {createPortal} from "react-dom";
import Logo from "./images/logo.svg"
import {Text} from "../../ui/typography";
import scrollTo from "gatsby-plugin-smoothscroll";

const Container = styled.div`
  background: #F1F1F1;
  width: 100%;
  height: 100%;
  padding: 25px;
  text-align: center;
`;

export const CloseBlock = styled.div`
  cursor: pointer;
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
                <div style={{display: "flex", justifyContent: "end", marginBottom: "50px"}}>
                    <CloseBlock onClick={() => setShow(false)}>
                        <img className={"exit"} src={Exit} alt={"Exit"}/>
                    </CloseBlock>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div style={{marginBottom: "80px", width: "fit-content"}} onClick={() => setShow(false)}>
                        <img src={Logo} alt={"logo"}/>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "80px",
                    alignItems: "center"
                }}>
                    <Text style={{fontSize: "24px", cursor: "pointer"}} onClick={() => {scrollTo('#whoWeAre'); setShow(false)}}>
                        Who We Are
                    </Text>
                    <Text style={{fontSize: "24px", cursor: "pointer"}} onClick={() => {scrollTo('#howWeDo'); setShow(false)}}>
                        How We Do
                    </Text>
                    <Text style={{fontSize: "24px", cursor: "pointer"}} onClick={() => {scrollTo('#whatWeDo'); setShow(false)}}>
                        What We Do
                    </Text>
                </div>
            </Container>
        </Modal>
    ) : null

    return isBrowser ? createPortal(content, document.getElementById('modal-root')) : null
};

export default Menu;