import React from "react";
import Button from "../../../../../app/components/Button";
import NextButtonContainer from "../../../../containers/NextButtonContainer";
import "./style.scss";
import { getSimLanguage } from "../../../../../app/helpers";
 const lang = getSimLanguage();
const BottomArea = (props) => {
    const { introduction, 
        selectedHotspot, 
        visitedHotspot, 
        btnClasses, 
        isPopupActive,
        btnText,
        continueClick,
        isContinuePressed,toggleScreen,moveToAnimation ,btnNext} = props
    return (
        <div className="bottomArea">
            {!moveToAnimation ?
            selectedHotspot && selectedHotspot.hotspotDescription  ?
                <p className={`description ${lang=="es"?"addScroll":""}`}
                 dangerouslySetInnerHTML={{ __html: selectedHotspot.travserId==1 && !isContinuePressed ?
                    selectedHotspot.hotspotDescription.detail2: 
                    selectedHotspot.hotspotDescription.detail1}}/>
                : <h2 className="introductionText">{introduction}</h2>
                :<NextButtonContainer/>}

            <div className="footer">
                {selectedHotspot.travserId == 1 && isContinuePressed &&
                    <Button
                        text={btnText}
                        classes={btnClasses}
                        isPopupActive={isPopupActive}
                        onClick={continueClick}
                    />
                    }
                 {
                    visitedHotspot.length==3 &&  !isContinuePressed && !moveToAnimation &&
                    <Button text={btnNext}
                     classes="btn next-btn toast-secondary-button positive right-arrow"
                     onClick={toggleScreen}
                     isPopupActive={isPopupActive}
                     />
                 }
            </div>
        </div>
    )
}

export default BottomArea