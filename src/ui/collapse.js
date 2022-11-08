import React, {useState} from 'react';
import {Subtitle, Text} from "./typography";
import ArrowDown from "../components/whoWeAre/images/arrowDown.svg";
import ReactTransitionCollapse from "react-transition-collapse";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";
import {RowContainer} from "./containers";
import {useScreenClass} from "react-grid-system";

const Collapse = ({title, text}) => {

    const [expanded, setExpanded] = useState(false)
    const screenClass = useScreenClass()

    return (
        <>
            <ModRowContainer expanded={expanded} onClick={() => setExpanded(expanded => !expanded)}
                             style={{justifyContent: "space-between"}}>
                <Subtitle>
                    {title}
                </Subtitle>
                <img src={ArrowDown} alt={"arrow"}/>
            </ModRowContainer>
            <ReactTransitionCollapse expanded={expanded} duration={400}>
                <Text style={{paddingTop: !['xl', 'xxl'].includes(screenClass) ? 10 : 0}}>
                    <Markdown>
                        {text}
                    </Markdown>
                </Text>
            </ReactTransitionCollapse>
        </>
    );
};

const ModRowContainer = styled(RowContainer)`
  cursor: pointer;
  margin-top: 16px;

  img {
    transform: ${props => props.expanded ? "rotate(180deg)" : ""};
    transition: transform .4s ease;
  }
`;

export default Collapse;