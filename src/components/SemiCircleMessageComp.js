import React, { useState } from "react";

import "./SemiCircleMessageComp.css";

export default (props) => {
    const [radius] = useState( props.height + ( props.height / 2 ) );
    const [borderRadius] = useState(`${radius}vw ${radius}vw 0 0`);


    return (
        <div className="semi-circle-container">
            <div className="semi-circle"
            style={{
                height: `${props.height}vw`,
                width: `${props.height * 2}vw`,
                borderRadius: borderRadius,
                backgroundColor: props.backgroundColor,
                zIndex: props.zIndex,
            }}
            >
                <div className="message-text">
                    <span style={{ fontWeight: "bold"}}>Heading</span> 
                    <br />
                    <span>Message</span>
                </div>
            </div>
        </div>
    );
}
