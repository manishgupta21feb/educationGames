import React from 'react';
import "./style.scss";

const ColorStripFooter = (props) => {
    const {colors} = props;
    const aa = [1,2,3,4,5,6,7,8,9]

    return(
        <div className="color-strip-footer">
            <div className="ph-value">
            {colors.map( (val, i) => {
                return <div aria-hidden={true} key={i}>{i}</div>
            })}
            <div aria-hidden={true} key={14}>{14}</div>
            </div>
            <div className="pointer">
            {aa.map( (val,index) => {
                return <Pointer key={index}></Pointer>
            })}
            </div>
        </div>
    )
}

const Pointer = (props) => {
    const {} = props;

    return(
        <div className="line-wrapper">
            <div className="h-line"></div>
            <div className="v-line"></div>
        </div>
    )

}

export default ColorStripFooter;