import React from "react";
import TimeLine from "../../containers/TimelineInfoboxContainer";
import Tabs from "../../containers/TabContainer";
import "./style.scss";

const FullView = ({ selectedTab,data,isPopupActive }) => {
    return (
        <div className="full-view">
            <h1 className="sr-only" aria-hidden={isPopupActive}>
                {data.activityHeading}
            </h1>
            <div className="full-view-wrapper">
                <div className={`full-container tab-${selectedTab}`} >
                    <Tabs />
                    <TimeLine />
                </div>
            </div>
        </div>
    )
}

export default FullView