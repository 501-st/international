import styled from "styled-components";
import React from "react"

const ButtonComponent = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: white;
  background-color: #58A0A3;
  border-radius: 5px;
  padding: ${props => props.padding || "12px 30px"};
  outline: none;
  border: none;
  cursor: pointer;
  :hover{
    background: #67B7BA;
  }
  :active{
    background: #418184;
  }
  @media (max-width: 1199px){
    width: 100%;
  }
`;

const Button = ({children, padding, onClick = () => {}}, type, style) => {
    return (
        <ButtonComponent style={style} type={type} onClick={onClick} padding={padding}>
            {children}
        </ButtonComponent>
    )
}

export default Button;