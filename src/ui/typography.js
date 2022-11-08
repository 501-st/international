import styled from "styled-components";
import {EN, RU} from "../context/context";

export const TaglineStyle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: ${props => props.lang === EN ? 500 : props.lang === RU ? 600 : 500};
  font-size: ${props => props.lang === EN ? "96px" : props.lang === RU ? "92px" : "96px"};
  color: #262626;
  @media (max-width: 1270px) and (min-width: 1200px){
    font-size: 90px;
  }
  @media (max-width: 1199px){
    font-size: 48px;
  }
`;

export const Title = styled(TaglineStyle)`
  font-weight: 600;
  font-size: 64px;
  @media (max-width: 1199px){
    font-size: 40px;
  }
`;

export const Subtitle = styled(Title)`
  font-size: 36px;
  @media (max-width: 1199px){
    font-size: 28px;
  }
`;

export const Text = styled(Title)`
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 1270px) and (min-width: 1200px){
    font-size: 18px;
  }
`;

export const Shadow = styled(Title)`
  color: #fbfbfb;
  text-shadow: 1px 0 1px #cccccc, 0 1px 1px #cccccc, -1px 0 1px #cccccc, 0 -1px 1px #cccccc;
  position: absolute;
  z-index: -1;
`;