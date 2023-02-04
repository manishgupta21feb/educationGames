import React from "react";
import "./style.scss";

const TopSection= (props) => {
    const {data}=props
  return (
    
        <div className="top-section">
                    <div className="altTextCombine">{data.introImages[0].altText}</div>
          <div className="outScreen">
              {data.introImages.map((item)=>{
              return(
                <div
                    key={item.srNo}
                    className="wholeCell"
                    onContextMenu={(e) => e.preventDefault()}
                >
                    <div
                     role="img"
                     aria-label={item.ariaLabel}
                     className={item.id}
                     //ispopupactive={ isPopupActive ? isPopupActive.toString() : undefined}
                     >
                    </div>
                    <p className="label" aria-hidden="true">
                    {item.label}
                    </p>
                </div>
              )})}
           </div>

        </div>
     
  );
};

export default TopSection;
