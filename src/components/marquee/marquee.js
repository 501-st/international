import React, {useContext} from 'react';
import {Subtitle} from "../../ui/typography";
import {useScreenClass} from "react-grid-system";
import {Context, EN, ES, RU} from "../../context/context";
import {RowContainer} from "../../ui/containers";


const MarqueeContent = ({screenClass, lang}) => {

    let arrayOfPhrases = []

    for (let i = 0; i < 30; i++){
        if (lang === EN)
            arrayOfPhrases.push("We Love What We Do")
        if (lang === RU)
            arrayOfPhrases.push("Мы любим свою работу")
        if (lang === ES)
            arrayOfPhrases.push("Amamos nuestro trabajo")
    }

    return (
        <RowContainer style={{columnGap: "40px", padding: "18px 0 13px 0"}}>
            {arrayOfPhrases.map((item, index) => (
                <Subtitle key={index} style={{color: "white", fontSize: ['xl', 'xxl'].includes(screenClass) ? 30 : 20}}>
                    {item}
                </Subtitle>
            ))}
        </RowContainer>
    )
}

const Marquee = () => {

    const screenClass = useScreenClass()
    const [lang] = useContext(Context);

    return (
        <div style={{
            paddingTop: ['xl', 'xxl'].includes(screenClass) ? 80 : 100,
            paddingBottom: ['xl', 'xxl'].includes(screenClass) ? 200 : 140,
            overflow: !['xl', 'xxl'].includes(screenClass) ? "hidden" : ""
        }}>
            <div style={{
                transform: "rotate(6deg)",
                marginLeft: "-1%",
                width: "102%",
                zIndex: "2",
                position: "relative"
            }}>
                <marquee scrollamount={9} style={{backgroundColor: "#58A0A3"}}>
                    <MarqueeContent lang={lang} screenClass={screenClass}/>
                </marquee>
            </div>
            <div style={{marginTop: ['xl', 'xxl'].includes(screenClass) ? -90 : -115}}>
                <marquee scrollamount={9} style={{backgroundColor: "#333333"}}>
                    <MarqueeContent lang={lang} screenClass={screenClass}/>
                </marquee>
            </div>
        </div>
    );
};

export default Marquee;