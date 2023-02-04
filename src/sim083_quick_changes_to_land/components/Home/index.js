import React from "react";
import "./style.scss";
import Button from "../../../app/components/Button";

const Home = (props) => {
  const {
    contOne,
    contTwo,
    hotspotData,
    onClick,
    visitedHotspots,
    isPopupActive,
    selectedHotspot,
  } = props;

  return (
    <>
      <div
        className="main"
        aria-hidden={!!selectedHotspot || isPopupActive || null}
      >
        <div className="main-head">
          <h2 className="headOne">{contOne}</h2>
          <h2 className="headTwo">{contTwo}</h2>
        </div>
        <div className="image-main">
          {hotspotData.map((m) => {
            return (
              <div className="frame" key={m.SerNo}>
                <div className="frame-image">
                  <img src={m.imgMain} alt={m.altMain}></img>
                </div>
                <div className="frame_button">
                  <Button
                    classes={`hotspot-btn label ${
                      visitedHotspots.indexOf(m.SerNo) >= 0 ? "visited" : ""
                    }`}
                    title={m.title}
                    aria-label={m.title}
                    data-target={m.target}
                    text={m.title}
                    ariaHidden={isPopupActive || !!selectedHotspot || null}
                    disabled={
                      isPopupActive ||
                      !!selectedHotspot ||
                      visitedHotspots.indexOf(m.SerNo) >= 0
                    }
                    onClick={() => onClick(m.SerNo)}
                  ></Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
