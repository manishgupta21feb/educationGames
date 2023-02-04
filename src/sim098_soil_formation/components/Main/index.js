import "./style.scss";
import React, { useEffect, useRef, useState } from "react";
import TabPanel from "../../containers/TabPanel";
import Tab from "../../containers/Tab";
import PieChartContainer from "../../containers/PieChartContainer";
import VideoContainer from "../../containers/VideoContainer";

const MainArea = (props) => {
  const ref = useRef(null);
  const [tabIndex, setTabIndex] = useState(null);
  let { selected, isPopupActive, currentTab, soilSection } = props;
  let tabArr = [selected];

  useEffect(() => {
    if (ref.current) {
      let tabIndex = null;
      if (ref.current.clientHeight < ref.current.scrollHeight) {
        tabIndex = "0";
      } else {
        tabIndex = null;
      }
      if (isPopupActive) {
        tabIndex = null;
      }
      setTabIndex(tabIndex);
    }
  }, [currentTab, isPopupActive]);

  return (
    <TabPanel>
      {tabArr.map((val, index) => {
        return (
          <Tab key={index} isPopupActive={isPopupActive}>
            <>
              <div className="main-container">
                <div className="main-top">
                  <PieChartContainer />
                  <div className="main-vid">
                    {soilSection ? (
                      <div
                        className="img-soil"
                        role="img"
                        aria-label={currentTab.alt}
                      ></div>
                    ) : (
                      <VideoContainer />
                    )}
                  </div>
                </div>
                <div className="main-text" ref={ref} tabIndex={tabIndex}>
                  <p dangerouslySetInnerHTML={{ __html: currentTab.text1 }} />
                  <p
                    className="para-second"
                    dangerouslySetInnerHTML={{ __html: currentTab.text2 }}
                  />
                  <p
                    className="para-third"
                    dangerouslySetInnerHTML={{ __html: currentTab.text3 }}
                  />
                </div>
              </div>
            </>
          </Tab>
        );
      })}
    </TabPanel>
  );
};

export default MainArea;
