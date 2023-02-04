import React from "react";
import "./style.scss";
import { getSimLanguage } from "../../../../../app/helpers";
 const lang = getSimLanguage();
const Direction = (props) => {
    const { forceDirections } = props;
    return (
        <div className={`directionBox ${lang=="es"?"spanishWidth":""}`}>
            {forceDirections.map((item,index) => {
                const classes=item.classes+'_'+index;
                return (
                 <div className={classes} key={`direction-${index}`}>
                     <div className={`shape shape--${item.direction}`} aria-label={item.ariaLable} role="img">
                         <div className="shape__line" style={{width:item.lineWidth}}></div>
                         <div className={`shape__triangle shape__triangle--${item.direction}`}></div>
                     </div>
                    <p className={`arrow ${lang=="es"?"smallfont":""} ${item.classes}`}>{item.forceName}</p>
                </div>
                )
            })}
        </div>
    )
}

export default Direction