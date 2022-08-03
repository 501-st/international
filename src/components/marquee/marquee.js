import React from 'react';
import {Subtitle} from "../../ui/typography";
import {useScreenClass} from "react-grid-system";

const Marquee = () => {

    const screenClass = useScreenClass()

    return (
        <div style={{paddingTop: ['xl', 'xxl'].includes(screenClass) ? 80 : 100,
            paddingBottom: ['xl', 'xxl'].includes(screenClass) ? 200 : 140, backgroundColor: "#FBFBFB",
            overflow: !['xl', 'xxl'].includes(screenClass) ? "hidden" : ""}}>
            <div style={{transform: "rotate(6deg)", marginLeft: "-1%", width: "102%", zIndex: "2", position: "relative"}}>
                <marquee scrollamount={9} style={{backgroundColor: "#58A0A3"}}>
                    <Subtitle style={{color: "white", padding: "18px 0 13px 0", fontSize: ['xl', 'xxl'].includes(screenClass) ? 30 : 20}}>
                        We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                    </Subtitle>
                </marquee>
            </div>
            <div style={{marginTop: ['xl', 'xxl'].includes(screenClass) ? -90 : -115}}>
                <marquee scrollamount={9} style={{backgroundColor: "#333333"}}>
                    <Subtitle style={{color: "white", fontSize: ['xl', 'xxl'].includes(screenClass) ? 30 : 20, padding: "18px 0 13px 0"}}>
                        We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                        &nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do&nbsp;&nbsp;&nbsp;&nbsp; We Love What We Do
                    </Subtitle>
                </marquee>
            </div>
        </div>
    );
};

export default Marquee;