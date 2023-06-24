import React from "react"
import "./MainContainer.css";
import SemiCircleMessageComp from "../components/SemiCircleMessageComp"
export default props => {
    const semCircleArr = [
        {height: 10, zIndex: 5, backgroundColor: "rgb(228, 148, 29)"},
        {height: 20, zIndex: 4, backgroundColor: "yellow"},
        {height: 31, zIndex: 3, backgroundColor: "rgb (200, 158, 53)"},
        {height: 38, zIndex: 2, backgroundColor: "yellow"},
];
const semiCircleComp = semCircleArr.map(r => (
    <SemiCircleMessageComp 
     key = {r.height}
     height = {r.height}
     zIndex = {r.zIndex}
     backgroundColor = {r.backgroundColor} 
    />
));
 return (
    <div>
        <div className="y-axis-container">
            <div className="y-axis">
                <span>Y-Axis</span>
            </div>
            <div className="container">
                <i className="arrow up"></i>
                {semiCircleComp}
            </div>
        </div>
        <div className="x-axis">
            <span>X-Axis</span>
        </div>
    </div>
)
}
    
