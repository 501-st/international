import React, {useState} from 'react';
import RUFlag from '../components/header/images/Russia.svg'
import ESFlag from '../components/header/images/Spain.svg'
import UKFlag from '../components/header/images/UK.svg'
import ArrowUp from "../components/header/images/dropdownArrowUp.svg"
import ArrowDown from "../components/header/images/dropdownArrowDown.svg"
import {RowContainer} from "./containers";
import styled from "styled-components";
import {EN, ES, RU} from "../context/context";

const Dropdown = ({setLang}) => {

    const [showMenu, setShowMenu] = useState(false)
    const [content, setContent] = useState({
        image: UKFlag,
        text: "eng"
    })

    const variants = [{
        image: UKFlag,
        text: "eng",
        lang: EN
    },{
        image: ESFlag,
        text: "esp",
        lang: ES
    },{
        image: RUFlag,
        text: "rus",
        lang: RU
    },]

    return (
        <div style={{position: "relative"}}>
            <Container onClick={() => setShowMenu(!showMenu)}>
                <img src={content.image} alt={"flag img"}/>
                <div>{content.text}</div>
                <img src={showMenu ? ArrowUp : ArrowDown} alt={"arrow img"}/>
            </Container>
            <VariantsMenu visible={showMenu}>
                {variants.map((item, index) => (
                    <ModRowContainer key={index} onClick={() => {setContent(item); setShowMenu(false); setLang(item.lang)}}>
                        <img src={item.image} alt={"item img"}/>
                        {item.text}
                    </ModRowContainer>
                ))}
            </VariantsMenu>
        </div>
    );
};

const Container = styled.div`
  background: #FFFFFF;
  border: 1px solid #DBDBDB;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  padding: 6px 20px 6px 10px;
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  justify-content: space-between;
  cursor: pointer;
  width: 130px;
`;

const VariantsMenu = styled(Container)`
  position: absolute;
  top: 60px;
  border-radius: 5px;
  z-index: 2;
  padding: 8px 0;
  display: ${props => props.visible ? "block" : "none"};
`;

const ModRowContainer = styled(RowContainer)`
  column-gap: 10px;
  cursor: pointer;
  z-index: 3;
  padding: 15px 34px 15px 14px;
  :hover{
    background-color: #DBDBDB;;
  }
`;

export default Dropdown;